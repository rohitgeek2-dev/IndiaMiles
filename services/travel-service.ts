import { Prisma } from "@prisma/client";

import { isDatabaseConfigured, prisma } from "@/lib/prisma";

const categoryInclude = {
  categories: {
    include: {
      category: true,
    },
  },
} satisfies Prisma.PlaceInclude;

const placeExplorerInclude = {
  city: {
    include: {
      state: true,
    },
  },
  ...categoryInclude,
} satisfies Prisma.PlaceInclude;

export type ExplorerPlace = Prisma.PlaceGetPayload<{
  include: typeof placeExplorerInclude;
}>;

async function safeRead<T>(operation: () => Promise<T>, fallback: T) {
  if (!isDatabaseConfigured) {
    return fallback;
  }

  try {
    return await operation();
  } catch (error) {
    console.error("Travel data read failed:", error);
    return fallback;
  }
}

export function getStates() {
  return safeRead(
    () =>
      prisma.state.findMany({
        where: { isActive: true },
        orderBy: { name: "asc" },
      }),
    [],
  );
}

export function getCitiesByState(stateSlug: string) {
  return safeRead(
    () =>
      prisma.city.findMany({
        where: {
          isActive: true,
          state: {
            slug: stateSlug,
            isActive: true,
          },
        },
        include: { state: true },
        orderBy: { name: "asc" },
      }),
    [],
  );
}

export function getStateBySlug(stateSlug: string) {
  return safeRead(
    () =>
      prisma.state.findFirst({
        where: {
          slug: stateSlug,
          isActive: true,
        },
        include: {
          cities: {
            where: { isActive: true },
            orderBy: { name: "asc" },
            include: {
              places: {
                where: { isActive: true },
                include: categoryInclude,
                orderBy: { name: "asc" },
              },
            },
          },
        },
      }),
    null,
  );
}

export function getCityByStateAndCitySlug(stateSlug: string, citySlug: string) {
  return safeRead(
    () =>
      prisma.city.findFirst({
        where: {
          slug: citySlug,
          isActive: true,
          state: {
            slug: stateSlug,
            isActive: true,
          },
        },
        include: {
          state: true,
          places: {
            where: { isActive: true },
            include: categoryInclude,
            orderBy: { name: "asc" },
          },
        },
      }),
    null,
  );
}

export function getPlacesByCity(citySlug: string) {
  return safeRead(
    () =>
      prisma.place.findMany({
        where: {
          isActive: true,
          city: {
            slug: citySlug,
            isActive: true,
          },
        },
        include: placeExplorerInclude,
        orderBy: { name: "asc" },
      }),
    [],
  );
}

export function getPlaces(filters?: {
  query?: string;
  stateSlug?: string;
  citySlug?: string;
  categorySlug?: string;
}) {
  const query = filters?.query?.trim();
  const cityFilter: Prisma.CityWhereInput = {
    ...(filters?.citySlug ? { slug: filters.citySlug, isActive: true } : {}),
    ...(filters?.stateSlug
      ? { state: { slug: filters.stateSlug, isActive: true } }
      : {}),
  };

  return safeRead(
    () =>
      prisma.place.findMany({
        where: {
          isActive: true,
          ...(query
            ? {
                OR: [
                  { name: { contains: query } },
                  { shortDescription: { contains: query } },
                  { description: { contains: query } },
                  { city: { name: { contains: query } } },
                  { city: { state: { name: { contains: query } } } },
                ],
              }
            : {}),
          ...(filters?.stateSlug || filters?.citySlug ? { city: cityFilter } : {}),
          ...(filters?.categorySlug
            ? {
                categories: {
                  some: {
                    category: {
                      slug: filters.categorySlug,
                      isActive: true,
                    },
                  },
                },
              }
            : {}),
        },
        include: placeExplorerInclude,
        orderBy: { name: "asc" },
      }),
    [],
  );
}

export function getPlaceBySlug(slug: string) {
  return safeRead(
    () =>
      prisma.place.findFirst({
        where: {
          slug,
          isActive: true,
        },
        include: placeExplorerInclude,
      }),
    null,
  );
}

export function getCategories() {
  return safeRead(
    () =>
      prisma.category.findMany({
        where: { isActive: true },
        orderBy: { name: "asc" },
      }),
    [],
  );
}

export function getCategoryBySlug(categorySlug: string) {
  return safeRead(
    () =>
      prisma.category.findFirst({
        where: {
          slug: categorySlug,
          isActive: true,
        },
      }),
    null,
  );
}

export function getTrendingPlaces(limit = 6) {
  return safeRead(
    () =>
      prisma.place.findMany({
        where: {
          isActive: true,
          trendingScore: { gt: 0 },
        },
        include: placeExplorerInclude,
        orderBy: [{ trendingScore: "desc" }, { viewCount: "desc" }],
        take: limit,
      }),
    [],
  );
}

export function getTopPlaces(limit = 6) {
  return safeRead(
    () =>
      prisma.place.findMany({
        where: {
          isActive: true,
          isTop: true,
        },
        include: placeExplorerInclude,
        orderBy: [{ viewCount: "desc" }, { trendingScore: "desc" }],
        take: limit,
      }),
    [],
  );
}

export async function getRecommendedPlaces(placeSlug: string, limit = 3) {
  const place = await getPlaceBySlug(placeSlug);

  if (!place) {
    return [];
  }

  const categorySlugs = place.categories.map(({ category }) => category.slug);

  return safeRead(
    () =>
      prisma.place.findMany({
        where: {
          isActive: true,
          slug: { not: place.slug },
          OR: [
            { cityId: place.cityId },
            {
              categories: {
                some: {
                  category: {
                    slug: { in: categorySlugs },
                  },
                },
              },
            },
          ],
        },
        include: placeExplorerInclude,
        orderBy: [{ trendingScore: "desc" }, { viewCount: "desc" }],
        take: limit,
      }),
    [],
  );
}

export async function getSearchSuggestions(query: string, limit = 8) {
  const normalizedQuery = query.trim();

  if (normalizedQuery.length < 2) {
    return [];
  }

  const [places, cities, states, categories] = await Promise.all([
    safeRead(
      () =>
        prisma.place.findMany({
          where: {
            isActive: true,
            OR: [
              { name: { contains: normalizedQuery } },
              { shortDescription: { contains: normalizedQuery } },
            ],
          },
          include: {
            city: { include: { state: true } },
            ...categoryInclude,
          },
          orderBy: [{ trendingScore: "desc" }, { name: "asc" }],
          take: limit,
        }),
      [],
    ),
    safeRead(
      () =>
        prisma.city.findMany({
          where: { isActive: true, name: { contains: normalizedQuery } },
          include: { state: true },
          orderBy: { name: "asc" },
          take: limit,
        }),
      [],
    ),
    safeRead(
      () =>
        prisma.state.findMany({
          where: { isActive: true, name: { contains: normalizedQuery } },
          orderBy: { name: "asc" },
          take: limit,
        }),
      [],
    ),
    safeRead(
      () =>
        prisma.category.findMany({
          where: { isActive: true, name: { contains: normalizedQuery } },
          orderBy: { name: "asc" },
          take: limit,
        }),
      [],
    ),
  ]);

  return [
    ...places.map((place) => ({
      id: place.id,
      label: place.name,
      type: "Place" as const,
      href: `/place/${place.slug}`,
      meta: `${place.city.name}, ${place.city.state.name}`,
    })),
    ...cities.map((city) => ({
      id: city.id,
      label: city.name,
      type: "City" as const,
      href: `/${city.state.slug}/${city.slug}`,
      meta: city.state.name,
    })),
    ...states.map((state) => ({
      id: state.id,
      label: state.name,
      type: "State" as const,
      href: `/${state.slug}`,
      meta: "State",
    })),
    ...categories.map((category) => ({
      id: category.id,
      label: category.name,
      type: "Category" as const,
      href: `/categories/${category.slug}`,
      meta: "Category",
    })),
  ].slice(0, limit);
}

export const stateAdmin = {
  list: () => prisma.state.findMany({ orderBy: { name: "asc" } }),
  getById: (id: string) => prisma.state.findUnique({ where: { id } }),
  create: (data: Prisma.StateCreateInput) => prisma.state.create({ data }),
  update: (id: string, data: Prisma.StateUpdateInput) =>
    prisma.state.update({ where: { id }, data }),
  delete: (id: string) => prisma.state.delete({ where: { id } }),
};

export const cityAdmin = {
  list: () =>
    prisma.city.findMany({ include: { state: true }, orderBy: { name: "asc" } }),
  getById: (id: string) => prisma.city.findUnique({ where: { id } }),
  create: (data: Prisma.CityCreateInput) => prisma.city.create({ data }),
  update: (id: string, data: Prisma.CityUpdateInput) =>
    prisma.city.update({ where: { id }, data }),
  delete: (id: string) => prisma.city.delete({ where: { id } }),
};

export const placeAdmin = {
  list: () =>
    prisma.place.findMany({
      include: placeExplorerInclude,
      orderBy: { name: "asc" },
    }),
  getById: (id: string) =>
    prisma.place.findUnique({ where: { id }, include: categoryInclude }),
  create: (data: Prisma.PlaceCreateInput) => prisma.place.create({ data }),
  update: (id: string, data: Prisma.PlaceUpdateInput) =>
    prisma.place.update({ where: { id }, data }),
  delete: (id: string) => prisma.place.delete({ where: { id } }),
};

export const categoryAdmin = {
  list: () => prisma.category.findMany({ orderBy: { name: "asc" } }),
  getById: (id: string) => prisma.category.findUnique({ where: { id } }),
  create: (data: Prisma.CategoryCreateInput) => prisma.category.create({ data }),
  update: (id: string, data: Prisma.CategoryUpdateInput) =>
    prisma.category.update({ where: { id }, data }),
  delete: (id: string) => prisma.category.delete({ where: { id } }),
};
