import { NextResponse } from "next/server";

import { getTopPlaces } from "@/services/travel-service";

export async function GET() {
  const places = await getTopPlaces();

  return NextResponse.json({ data: places });
}
