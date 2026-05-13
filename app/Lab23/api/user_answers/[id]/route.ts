import { getAllUserAnser } from "@/app/Lab23/model/user_answers.model";
import { editUserAnswer, removeUserAnswer, UserAnswerById } from "@/app/Lab23/service/user_answers.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(params:{params:Promise<{id:string}>}){
    const {id} = await params.params
    const answerID = Number(id)
     if (isNaN(answerID)) {
    return NextResponse.json(
      { error: true, message: "Invalid anserId" },
      { status: 400 }
    );
  }
  const data = await UserAnswerById(answerID)
   if(!data){
        return NextResponse.json({
            error:true,
            message:"answerID Not Found"
        }),
        { status: 404 }
    }
    return NextResponse.json({
            error:false,
            data,
            message:"answerID Found By Id",
            
    })
}

export async function PUT(req:NextRequest,params:{params:Promise<{id:string}>}){
    const {id} = await params.params
    const answerID = Number(id)
    const body = await req.json()
    const data = await editUserAnswer(body,answerID)
     if (!data) {
    return NextResponse.json(
      { error: true, message: "answerID not Updated" },
      { status: 404 }
    );
  }

  return NextResponse.json({ error: false, data });
}

export async function DELETE(req:NextRequest,params:{params:Promise<{id:string}>}){
    const {id} = await params.params
    const answerID = Number(id)
    const data = await removeUserAnswer(answerID)
    if (!data) {
    return NextResponse.json(
      { error: true, message: "answerId not Deleted" },
      { status: 404 }
    );
  }

  return NextResponse.json({ error: false, data });
}