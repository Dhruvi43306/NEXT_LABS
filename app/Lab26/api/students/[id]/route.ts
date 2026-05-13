import { connection } from "@/app/Lab26/lib/mongoose";
import { Student } from "@/app/Lab26/model/student";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const stuid = Number(id)

    await connection()
    const student = await Student.findById(stuid)
    return NextResponse.json(student)

}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {

  const { id } = params

  await connection()

  const student = await Student.findByIdAndDelete(id)

  return NextResponse.json(student)

}