import { NextResponse } from "next/server";
import { forgotPassword } from "@/app/Lab23/service/user.service";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const result = await forgotPassword(email);

    const response = NextResponse.json({ message: result.message });

    // Store token in HTTP-only cookie (10 minutes)
    response.cookies.set("resetToken", result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 10 * 60 // 10 minutes
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}