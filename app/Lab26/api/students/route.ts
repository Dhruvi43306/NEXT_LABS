import {connection} from "@/app/Lab26/lib/mongoose"
import { Student } from "../../model/student"
import { NextRequest, NextResponse } from "next/server"
import mongoose from "mongoose"
export async function GET(){
    await connection()

    const student = await Student.find()
    console.log("Student:", student)
 return NextResponse.json(student)
}

export async function POST(req:NextRequest){
    await connection()

    const body = await req.json()

    console.log("BODY DATA:", body)

    const student = await Student.create(body)

    console.log("INSERTED:", student)

    return NextResponse.json(student)
}