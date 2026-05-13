import { NextRequest, NextResponse } from "next/server";
import {
  editSection,
  removeSection
} from "@/app/Lab23/service/lessonSection.service";

export async function PUT(
  req: NextRequest,
  params: { params: Promise<{ id: string }> }
) {
  const { id } = await params.params;
  const sectionId = Number(id);
  const body = await req.json();

  const data = await editSection(body, sectionId);

  return NextResponse.json({
    error: false,
    message: "Section updated",
    data
  });
}

export async function DELETE(
  req: NextRequest,
  params: { params: Promise<{ id: string }> }
) {
  const { id } = await params.params;
  const sectionId = Number(id);

  const data = await removeSection(sectionId);

  return NextResponse.json({
    error: false,
    message: "Section deleted",
    data
  });
}