import { NextResponse } from "next/server";
import { resetPassword } from "@/app/Lab23/service/user.service";

export async function POST(req: Request) {
  try {
    const { token, newPassword } = await req.json();
    const result = await resetPassword(token, newPassword);

    if (result.error) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}