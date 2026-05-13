import { editLeaderBoard, getLeaderBoardDetail, removeLeaderBoard } from "@/app/Lab23/service/leaderboard.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const leaderID = Number(id)
     if (isNaN(leaderID)) {
    return NextResponse.json(
      { error: true, message: "Invalid anserId" },
      { status: 400 }
    );
  }
  const data = await getLeaderBoardDetail(leaderID)
   if(!data){
        return NextResponse.json({
            error:true,
            message:"leaderID Not Found"
        }),
        { status: 404 }
    }
    return NextResponse.json({
            error:false,
            data,
            message:"leaderID Found By Id",
            
    })
}

export async function PUT(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const leaderID = Number(id)
    const body = await req.json()
    const data = await editLeaderBoard(body,leaderID)
     if (!data) {
    return NextResponse.json(
      { error: true, message: "leaderID not Updated" },
      { status: 404 }
    );
  }

  return NextResponse.json({ error: false, data });
}

export async function DELETE(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const leaderID = Number(id)
    const data = await removeLeaderBoard(leaderID)
    if (!data) {
    return NextResponse.json(
      { error: true, message: "leaderID not Deleted" },
      { status: 404 }
    );
  }

  return NextResponse.json({ error: false, data });
}