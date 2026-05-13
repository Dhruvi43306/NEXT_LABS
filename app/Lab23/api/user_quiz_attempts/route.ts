import { NextRequest, NextResponse } from "next/server";
import { createUserAttempts, listUserAttempts } from "../../service/user_quiz_attempts.service";

export async function GET(){
    const data = await listUserAttempts()
    return NextResponse.json({ message: "All UserAttempts SuccesFully Feached!",data})  
    
}

export async function POST(req:NextRequest){
    const body = await req.json()
    const data = await createUserAttempts(body)
    return NextResponse.json({ message: "All UserAttempts SuccesFully Inserted!",data})  

}