import { editUserAttempts, getUserAttemptDetail, removeUserAttempts } from "@/app/Lab23/service/user_quiz_attempts.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(params:{params:Promise<{id:string}>}){
    const {id} = await params.params
    const attemptid = Number(id)
     if (isNaN(attemptid)) {
    return NextResponse.json(
      { error: true, message: "Invalid attemptid" },
      { status: 400 }
    );
  }
  const data = await getUserAttemptDetail(attemptid)
   if(!data){
        return NextResponse.json({
            error:true,
            message:"attemptId Not Found"
        }),
        { status: 404 }
    }
    return NextResponse.json({
            error:false,
            data,
            message:"attemptId Found By Id",
            
    })
}

export async function PUT(req:NextRequest,params:{params:Promise<{id:string}>}){
    const {id} = await params.params
    const attemptid = Number(id)
    const body = await req.json()
    const data = await editUserAttempts(body,attemptid)
     if (!data) {
    return NextResponse.json(
      { error: true, message: "attemptId not Updated" },
      { status: 404 }
    );
  }

  return NextResponse.json({ error: false, data });
}

export async function DELETE(req:NextRequest,params:{params:Promise<{id:string}>}){
    const {id} = await params.params
    const attemptid = Number(id)
    const data = await removeUserAttempts(attemptid)
    if (!data) {
    return NextResponse.json(
      { error: true, message: "attemptId not Deleted" },
      { status: 404 }
    );
  }

  return NextResponse.json({ error: false, data });
}