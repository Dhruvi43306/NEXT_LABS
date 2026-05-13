import { productDetail, editProduct, removeProduct } from "@/app/Lab23/service/product.service";
import { NextRequest, NextResponse } from "next/server";

// GET product by id
export async function GET({params}: { params: Promise<{ id: string }> }) {
  const { id } = await params   
  const productid = Number(id);
;
  if (isNaN(productid)) {
    return NextResponse.json(
      { error: true, message: "Invalid product id" },
      { status: 400 }
    );
  }

  const data = await productDetail(productid);

  if (!data) {
    return NextResponse.json(
      { error: true, message: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ error: false, data });
}


// DELETE product
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const productid = Number(id);

  const data = await removeProduct(productid);

  return NextResponse.json({ error: false, data });
}


// UPDATE product
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const productid = Number(id);
  const body = await req.json();

  const data = await editProduct(body, productid);

  return NextResponse.json({ error: false, data });
}
