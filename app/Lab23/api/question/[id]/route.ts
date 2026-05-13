import { editQuestion, getQuestionDetail, removeQuestion } from "@/app/Lab23/service/question.service"
import { NextRequest, NextResponse } from "next/server"

export async function GET({params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const questionid = Number(id)
    if(isNaN(questionid)){
        return NextResponse.json({error:true,message:"QuestionId Not Found"},
        { status: 400 }
        )
    }
    const data = await getQuestionDetail(questionid)
    if (!data) {
    return NextResponse.json(
      { error: true, message: "Question not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ error: false, data });
}

export async function PUT(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const questionid = Number(id)
    const body = await req.json()
    const data = await editQuestion(body,questionid)
     if (!data) {
    return NextResponse.json(
      { error: true, message: "Question not Updated" },
      { status: 404 }
    );
  }

  return NextResponse.json({ error: false, data });
}

export async function DELETE({params}:{params:Promise<{id:string}>}){
     const {id} = await params
    const questionid = Number(id)
    const data = await removeQuestion(questionid)
     if (!data) {
    return NextResponse.json(
      { error: true, message: "Question not Deleted" },
      { status: 404 }
    );
  }

  return NextResponse.json({ error: false, data });
}