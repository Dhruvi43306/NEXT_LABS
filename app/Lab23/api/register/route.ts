import { NextResponse } from "next/server";
import { registerUser } from "@/app/Lab23/service/user.service";


export async function POST(req: Request) {
  try {
     
    const body = await req.json();
    const result = await registerUser(body);

  return NextResponse.json(result, { status: 201 });

  } catch (error:any) {
  console.log("REGISTER ERROR:", error);   
  return NextResponse.json(
    { message: error.message || "Something went wrong" },
    { status: 500 }
  );
}
}