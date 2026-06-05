import { NextResponse } from "next/server";

import { getCitiesByState } from "@/services/travel-service";

type RouteContext = {
  params: Promise<{
    stateSlug: string;
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { stateSlug } = await context.params;
  const cities = await getCitiesByState(stateSlug);

  return NextResponse.json({ data: cities });
}
