import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  // Process booking inquiry submission
  console.log('Booking inquiry submission:', data);
  return NextResponse.json({ message: 'Booking inquiry submitted successfully' });
}