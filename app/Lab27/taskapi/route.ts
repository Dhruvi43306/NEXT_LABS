import { prisma } from "@/app/db/prismaConnection";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const body = await req.json()
    const task = await prisma.task.createMany({
        data:body
    })
     return NextResponse.json({
        message: "Task created successfully!",
        data: task
      });
}

export async function GET(){
    const task = await prisma.task.findMany()
     return NextResponse.json({
        message: "Task Feacked successfully!",
        data: task
      });
}