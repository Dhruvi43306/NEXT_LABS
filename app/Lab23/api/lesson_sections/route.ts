import { NextRequest, NextResponse } from "next/server";
import {
  createSection,
  listSections
} from "@/app/Lab23/service/lessonSection.service";

export async function GET(req: NextRequest) {
  const lessonId = req.nextUrl.searchParams.get("lessonId");

  if (!lessonId) {
    return NextResponse.json(
      { error: true, message: "lessonId is required" },
      { status: 400 }
    );
  }

  const data = await listSections(Number(lessonId));

  return NextResponse.json({
    error: false,
    message: "Sections fetched",
    data
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const data = await createSection(body);

  return NextResponse.json({
    error: false,
    message: "Section created",
    data
  });
}