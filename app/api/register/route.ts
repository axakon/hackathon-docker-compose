import { registerUser } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const { username, password } = await req.json();

  try {
    const user = await registerUser(username, password);
    console.log('User registered:', user);

    // For simplicity, we'll send the user ID in the response
    return NextResponse.json({ userId: user.id }, { status: 201 });
  } catch (error: any) {
    console.error('Registration failed:', error.message);
    return NextResponse.json({ error: 'Registration failed' }, { status: 400 });
  }
}