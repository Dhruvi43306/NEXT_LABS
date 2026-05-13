import { NextRequest, NextResponse } from "next/server";
import { createLesson, getLesson } from "@/app/Lab23/service/topicLesson.service";

export async function GET(req: NextRequest) {
  const topicId = req.nextUrl.searchParams.get("topicId");

  if (!topicId) {
    return NextResponse.json(
      { error: true, message: "topicId is required" },
      { status: 400 }
    );
  }

  const data = await getLesson(Number(topicId));

  return NextResponse.json({
    error: false,
    message: "Lesson fetched",
    data
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const data = await createLesson(body);

  return NextResponse.json({
    error: false,
    message: "Lesson created",
    data
  });
}