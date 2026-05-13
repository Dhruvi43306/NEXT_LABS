import { prisma } from "@/app/db/prismaConnection";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.users.findMany();

  return NextResponse.json({
    message: "All users are Successfully Fetched!",
    data: users
  });
}

export async function POST(req:NextRequest) {
  const body = await req.json()
  const user = await prisma.users.create({data:body});

  return NextResponse.json({
    message: "User created successfully!",
    data: user
  });
}

