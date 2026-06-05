import { NextResponse } from "next/server";

import { getStates } from "@/services/travel-service";

export async function GET() {
  const states = await getStates();

  return NextResponse.json({ data: states });
}
