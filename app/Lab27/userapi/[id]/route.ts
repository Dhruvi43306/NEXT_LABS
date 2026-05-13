import { prisma } from "@/app/db/prismaConnection";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    const {id} =  await params
    const userId = Number(id)
    const user = await prisma.users.findUnique({
        where:{
            user_id:userId
        }
    })
    return NextResponse.json({
        message:"users are SuccesFully feached ById",
        data:user
    })
}

export async function PUT(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const userId = Number(id)
    const body = await req.json()
    const user = await prisma.users.update({
        where:{
            user_id:userId
        },
        data:body
       
    })
     return NextResponse.json({
        message:"User updated successfully",
        data:user
    })
}

export async function DELETE(req: NextRequest,{params}:{params:Promise<{id:string}>}){
  const {id} = await params;
  const userId = Number(id)
  const user = await prisma.users.delete({
    where:{
        user_id:userId
    }
  })
   return NextResponse.json({
        message:"User deleted successfully",
        data:user
    })
}