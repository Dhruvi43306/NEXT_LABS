import { CreateTopic, editTopic, getTopicDetail, removeTopic } from "@/app/Lab23/service/topic.service"
import { NextRequest, NextResponse } from "next/server"


export async function GET(req:NextRequest,params:{params:Promise<{id:string}>}){
    const {id} = await params.params
    const topicid = Number(id)
     if (isNaN(topicid)) {
    return NextResponse.json(
      { error: true, message: "Invalid topicid" },
      { status: 400 }
    );
  }
    const data = await getTopicDetail(topicid)
    if(!data){
        return NextResponse.json({
            error:true,
            message:"Topic Not Found"
        }),
        { status: 404 }
    }
    return NextResponse.json({
            error:false,
            data,
            message:"Topic Found By Id",
            
    })
}

export async function PUT(req:NextRequest,params:{params:Promise<{id:string}>}){
    const {id} = await params.params
    const topicid = Number(id)
    const body = await req.json()
    const data = await editTopic(body,topicid)
     if (!data) {
    return NextResponse.json(
      { error: true, message: "Topic not Updated" },
      { status: 404 }
    );
  }

  return NextResponse.json({ error: false, data });
}

export async function DELETE(req:NextRequest,params:{params:Promise<{id:string}>}){
    const {id} = await params.params
    const topicid = Number(id)
    const data = await removeTopic(topicid)
      if (!data) {
    return NextResponse.json(
      { error: true, message: "Topic not Deleted" },
      { status: 404 }
    );
  }

  return NextResponse.json({ error: false, data });
}