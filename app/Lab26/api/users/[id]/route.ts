import { NextRequest, NextResponse } from "next/server";
import { findById } from "@/app/Lab26/model/users";

export async function GET(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const userid = Number(id)
    const user = await findById(userid)
    return NextResponse.json({
        message:"User Feached ById SuccesFully",
        data:user
    })

}