import { NextRequest, NextResponse } from "next/server";
import {
  editLesson,
  removeLesson
} from "@/app/Lab23/service/topicLesson.service";

export async function PUT(
  req: NextRequest,
  params: { params: Promise<{ id: string }> }
) {
  const { id } = await params.params;
  const lessonId = Number(id);
  const body = await req.json();

  const data = await editLesson(body, lessonId);

  return NextResponse.json({
    error: false,
    message: "Lesson updated",
    data
  });
}

export async function DELETE(
  req: NextRequest,
  params: { params: Promise<{ id: string }> }
) {
  const { id } = await params.params;
  const lessonId = Number(id);

  const data = await removeLesson(lessonId);

  return NextResponse.json({
    error: false,
    message: "Lesson deleted",
    data
  });
}