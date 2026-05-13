import { NextResponse,NextRequest } from "next/server";
import {listProduct,createProduct}  from "@/app/Lab23/service/product.service"
//All Product
export async function GET(){
  const data = await listProduct()
  return NextResponse.json({ message: "All Product SuccesFully Feached!",data})  
}

//Insert Product
export async function POST(req:NextRequest){
  const body = await req.json()
  const data = await createProduct(body)
  return NextResponse.json({ message: "Product SuccesFully Inserted!",data})
}
