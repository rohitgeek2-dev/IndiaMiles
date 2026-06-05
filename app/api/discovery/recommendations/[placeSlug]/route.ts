import { NextResponse } from "next/server";

import { getRecommendedPlaces } from "@/services/travel-service";

type RouteContext = {
  params: Promise<{
    placeSlug: string;
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { placeSlug } = await context.params;
  const places = await getRecommendedPlaces(placeSlug);

  return NextResponse.json({ data: places });
}
