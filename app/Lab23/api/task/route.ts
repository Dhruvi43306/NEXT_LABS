import { NextRequest, NextResponse } from "next/server";
import { createTask, listTask } from "../../service/task.service";

export async function GET(){
    const data = await listTask()
    return NextResponse.json({message:"All Task SuccesFully Feached!",data})
}

export async function POST(req:NextRequest){
    const body = await req.json()
    const data = await createTask(body)
    return NextResponse.json({message:"Task SuccesFully Inserted!",data})
}