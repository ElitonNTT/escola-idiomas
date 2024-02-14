import { prisma } from "@/lib/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  {
    params: { slug },
  }: {
    params: { slug: string };
  },
): Promise<Response> {
  try {
    const courseInfo = await prisma.course.findUnique({
      where: {
        slug,
      },
    });

    return NextResponse.json(courseInfo);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  {
    params: { slug },
  }: {
    params: { slug: string };
  },
): Promise<Response> {
  try {
    const {
      title,
      acordions,
      sections,
      content,
      titleSections,
      coordinatorName,
      coordinatorPhotoUrl,
      videoId,
      bannerUrl,
      titleAcordions,
      type,
      copyPrice,
      price,
    } = await request.json();

    const created = await prisma.course.update({
      where: { slug },
      data: {
        title,
        content,
        acordions,
        sections,
        titleSections,
        coordinatorName,
        coordinatorPhotoUrl,
        videoId,
        bannerUrl,
        titleAcordions,
        type,
        copyPrice,
        price,
      },
    });

    return NextResponse.json(created);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
