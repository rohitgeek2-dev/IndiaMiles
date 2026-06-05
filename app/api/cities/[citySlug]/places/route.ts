import { NextResponse } from "next/server";

import { getPlacesByCity } from "@/services/travel-service";

type RouteContext = {
  params: Promise<{
    citySlug: string;
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { citySlug } = await context.params;
  const places = await getPlacesByCity(citySlug);

  return NextResponse.json({ data: places });
}
