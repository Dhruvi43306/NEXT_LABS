import { NextRequest, NextResponse } from "next/server";
import { createUserAnswer, listUserAnswer } from "../../service/user_answers.service";

export async function GET(){
    const data = await listUserAnswer()
    return NextResponse.json({ message: "All UserAnswer SuccesFully Feached!",data})  

}

export async function POST(req:NextRequest){
    const body = await req.json()
    const data = await createUserAnswer(body)
    return NextResponse.json({ message: "All UserAnswer SuccesFully Feached!",data})  

}