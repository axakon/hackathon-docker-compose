import { loginUser } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const { username, password } = await req.json();

  try {
    const user = await loginUser(username, password);
    console.log('User logged in:', user);

    // For simplicity, we'll send the user ID in the response
    return NextResponse.json({ userId: user.id }, { status: 200 });
  } catch (error: any) {
    console.error('Login failed:', error.message);
    return NextResponse.json({ error: 'Login failed' }, { status: 401 });
  }
}