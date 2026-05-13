import { NextRequest, NextResponse } from "next/server";
import { getModuleById, editModule, removeModule } from "@/app/Lab23/service/module.service";

export async function GET(
  request: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const moduleid = Number(id);

    if (isNaN(moduleid)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const data = await getModuleById(moduleid);

    return NextResponse.json({ message: 'Modules fetched successfully', data });
  } catch (err) {
    console.error('GET ERROR:', err); 
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}


export async function PUT(request: NextRequest,{params}: { params: Promise<{id: string }> }) {
  const {id} = await params
  const topicId = Number(id)
  const body = await request.json();

  const data = await editModule(body, topicId);

  return NextResponse.json({ message: "Updated", data });
}

export async function DELETE({params}: { params: Promise<{id: string }> }) {
   const {id} = await params
  const topicId = Number(id)

  const data = await removeModule(topicId);

  return NextResponse.json({ message: "Deleted", data });
}
