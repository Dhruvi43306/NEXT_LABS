import { NextRequest, NextResponse } from "next/server";
import { createModule, listModule } from "../../service/module.service";

export async function GET(){
    const data = await listModule()
    return NextResponse.json({message:"All Module SuccesFully",data})
}

export async function POST(req:NextRequest){
    const body = await req.json()
    const data = await createModule(body)
console.log(body)

    return NextResponse.json({message:"Module SuccesFully created",data})
}