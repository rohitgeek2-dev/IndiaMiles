import { NextResponse } from "next/server";

import { getTrendingPlaces } from "@/services/travel-service";

export async function GET() {
  const places = await getTrendingPlaces();

  return NextResponse.json({ data: places });
}
