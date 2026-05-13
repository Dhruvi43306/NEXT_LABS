import { NextRequest, NextResponse } from "next/server";
import { getQuestionDetail, listQuestion } from "../../service/question.service";

export async function GET(){
    const data = await listQuestion()
    return NextResponse.json({message:"All List Feached SuccesFully",data})
}

export async function POST(req:NextRequest){
    const body = await req.json()
    const data = await getQuestionDetail(body)
    return NextResponse.json({message:"All List Inserted SuccesFully",data})
}