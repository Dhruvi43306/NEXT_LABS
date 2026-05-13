import { editTask, removeTask, TaskDetail } from "@/app/Lab23/service/task.service";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,params:{params:Promise<{id:string}>}){
    const {id} = await params.params
    const taskid = Number(id)
    const data = await TaskDetail(taskid)
    if(isNaN(taskid)){
        return NextResponse.json({
            error:true,
            message:"Task Id can not Found"
        },{status:400})
    }
    if(!data){
        return NextResponse.json({
            error:true,
            message:"Task Not Found"
            },{status:404}
        )
    }
    return NextResponse.json({
        error:false,
        data,
        message:"Task Found By Id"
    },{status:200}
    )
}

export async function PUT(req:NextRequest,params:{params:Promise<{id:string}>}){
    const {id} = await params.params
    const taskid = Number(id)
    const body = await req.json()
    const data = await editTask(body,taskid)
      if (!data) {
    return NextResponse.json(
      { error: true, message: "Task not Updated" },
      { status: 404 }
    );
  }

  return NextResponse.json({ error: false, data });
}

export async function DELETE(params:{params:Promise<{id:string}>}){
    const {id} = await params.params
    const taskid = Number(id)
    const data = await removeTask(taskid)
     if (!data) {
    return NextResponse.json(
      { error: true, message: "Task not Deleted" },
      { status: 404 }
    );
  }

  return NextResponse.json({ error: false, data });
}