import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  // Process contact form submission
  console.log('Contact form submission:', data);
  return NextResponse.json({ message: 'Contact form submitted successfully' });
}