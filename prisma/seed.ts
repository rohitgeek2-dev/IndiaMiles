import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const databaseUrl = process.env.DATABASE_URL;


if (!databaseUrl) {
  throw new Error("DATABASE_URL is required to seed the database.");
}

const adapter = new PrismaPg(databaseUrl);
const prisma = new PrismaClient({ adapter });


async function main() {

  const heritage = await prisma.category.upsert({
    where: { slug: "heritage" },
    update: {},
    create: {
      name: "Heritage",
      slug: "heritage",
      description: "Historic forts, palaces, monuments, and cultural sites.",
    },
  });

  const nature = await prisma.category.upsert({
    where: { slug: "nature" },
    update: {},
    create: {
      name: "Nature",
      slug: "nature",
      description: "Mountains, lakes, forests, beaches, and scenic escapes.",
    },
  });

  const pilgrimage = await prisma.category.upsert({
    where: { slug: "pilgrimage" },
    update: {},
    create: {
      name: "Pilgrimage",
      slug: "pilgrimage",
      description: "Sacred temples, ghats, monasteries, and spiritual journeys.",
    },
  });

  const rajasthan = await prisma.state.upsert({
    where: { slug: "rajasthan" },
    update: {},
    create: {
      name: "Rajasthan",
      slug: "rajasthan",
      description: "India's desert state known for forts, palaces, and royal cities.",
      cities: {
        create: [
          {
            name: "Jaipur",
            slug: "jaipur",
            description: "The Pink City, famous for palaces, bazaars, and hill forts.",
          },
          {
            name: "Udaipur",
            slug: "udaipur",
            description: "A romantic lake city surrounded by Aravalli hills.",
          },
        ],
      },
    },
    include: { cities: true },
  });

  const kerala = await prisma.state.upsert({
    where: { slug: "kerala" },
    update: {},
    create: {
      name: "Kerala",
      slug: "kerala",
      description: "A lush coastal state known for backwaters, beaches, and tea hills.",
      cities: {
        create: [
          {
            name: "Kochi",
            slug: "kochi",
            description: "A historic port city shaped by spice trade and coastal culture.",
          },
          {
            name: "Munnar",
            slug: "munnar",
            description: "A hill station surrounded by tea estates and misty valleys.",
          },
        ],
      },
    },
    include: { cities: true },
  });

  const uttarPradesh = await prisma.state.upsert({
    where: { slug: "uttar-pradesh" },
    update: {},
    create: {
      name: "Uttar Pradesh",
      slug: "uttar-pradesh",
      description: "A northern state rich in spiritual landmarks and Mughal heritage.",
      cities: {
        create: [
          {
            name: "Agra",
            slug: "agra",
            description: "Home to the Taj Mahal and Mughal-era monuments.",
          },
          {
            name: "Varanasi",
            slug: "varanasi",
            description: "One of the world's oldest living cities on the Ganga.",
          },
        ],
      },
    },
    include: { cities: true },
  });

  const cityBySlug = new Map(
    [...rajasthan.cities, ...kerala.cities, ...uttarPradesh.cities].map((city) => [
      city.slug,
      city,
    ]),
  );

  const places = [
    {
      citySlug: "jaipur",
      name: "Amber Fort",
      slug: "amber-fort",
      shortDescription: "A hilltop fort known for ornate palaces and sweeping views.",
      description: "Amber Fort blends Rajput and Mughal architecture above Maota Lake.",
      bestTimeToVisit: "October to March",
      isTop: true,
      trendingScore: 88,
      viewCount: 1800,
      categoryIds: [heritage.id],
    },
    {
      citySlug: "udaipur",
      name: "Lake Pichola",
      slug: "lake-pichola",
      shortDescription: "A scenic lake framed by palaces and old-city ghats.",
      description: "Lake Pichola is one of Udaipur's most atmospheric landmarks.",
      bestTimeToVisit: "September to March",
      isTop: true,
      trendingScore: 82,
      viewCount: 1420,
      categoryIds: [nature.id, heritage.id],
    },
    {
      citySlug: "kochi",
      name: "Fort Kochi",
      slug: "fort-kochi",
      shortDescription: "A coastal heritage quarter with colonial streets and art cafes.",
      description: "Fort Kochi reflects Portuguese, Dutch, British, and Kerala influences.",
      bestTimeToVisit: "October to February",
      isTop: false,
      trendingScore: 74,
      viewCount: 920,
      categoryIds: [heritage.id],
    },
    {
      citySlug: "munnar",
      name: "Eravikulam National Park",
      slug: "eravikulam-national-park",
      shortDescription: "A high-altitude park known for Nilgiri tahr and rolling grasslands.",
      description: "Eravikulam National Park is a protected Western Ghats landscape near Munnar.",
      bestTimeToVisit: "September to May",
      isTop: false,
      trendingScore: 79,
      viewCount: 1100,
      categoryIds: [nature.id],
    },
    {
      citySlug: "agra",
      name: "Taj Mahal",
      slug: "taj-mahal",
      shortDescription: "A white marble mausoleum and one of India's most iconic monuments.",
      description: "The Taj Mahal is a UNESCO World Heritage Site built by Shah Jahan.",
      bestTimeToVisit: "October to March",
      isTop: true,
      trendingScore: 96,
      viewCount: 2500,
      categoryIds: [heritage.id],
    },
    {
      citySlug: "varanasi",
      name: "Dashashwamedh Ghat",
      slug: "dashashwamedh-ghat",
      shortDescription: "A sacred riverside ghat known for the evening Ganga Aarti.",
      description: "Dashashwamedh Ghat is one of Varanasi's most important spiritual gathering places.",
      bestTimeToVisit: "October to March",
      isTop: true,
      trendingScore: 91,
      viewCount: 2100,
      categoryIds: [pilgrimage.id, heritage.id],
    },
  ];

  for (const place of places) {
    const city = cityBySlug.get(place.citySlug);

    if (!city) {
      throw new Error(`Missing seed city: ${place.citySlug}`);
    }

    await prisma.place.upsert({
      where: {
        cityId_slug: {
          cityId: city.id,
          slug: place.slug,
        },
      },
      update: {},
      create: {
        name: place.name,
        slug: place.slug,
        shortDescription: place.shortDescription,
        description: place.description,
        bestTimeToVisit: place.bestTimeToVisit,
        isTop: place.isTop,
        trendingScore: place.trendingScore,
        viewCount: place.viewCount,
        city: { connect: { id: city.id } },
        categories: {
          create: place.categoryIds.map((categoryId) => ({
            category: { connect: { id: categoryId } },
          })),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
