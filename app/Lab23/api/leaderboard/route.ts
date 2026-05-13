import { NextRequest, NextResponse } from "next/server";
import { createLeaderBoard, listLeaderBoard } from "../../service/leaderboard.service";

export async function GET(){
    const data = await listLeaderBoard()
    return NextResponse.json({ message: "All Leader SuccesFully Feached!",data})  

}

export async function POST(req:NextRequest){
    const body = await req.json()
    const data = await createLeaderBoard(body)
    return NextResponse.json({ message: "All Leader SuccesFully Feached!",data})  

}