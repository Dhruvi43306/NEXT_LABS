import { NextResponse } from "next/server";
import { findAlluser } from "../../model/users";

export async function GET(){
    const user = await findAlluser()
    return NextResponse.json({
        message:"User Feached SuccesFully",
        data:user
    })

}