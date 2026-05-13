import { NextResponse } from "next/server";
import { CreateTopic, listTopic } from "../../service/topic.service";

export async function GET(){
    const data = await listTopic()
    return NextResponse.json({mesaage:"All Topic",data})
}

export async function POST(req:any){
    const body = await req.json()
    const data = await CreateTopic(body)
    return NextResponse.json({message:"Insert Topic",data})
}

