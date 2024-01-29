import { prisma } from "@/lib/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
  try {
    const {
      slug,
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
    } = await request.json();

    const created = await prisma.course.upsert({
      where: { slug },
      update: {
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
      },
      create: {
        slug,
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
      },
    });

    return NextResponse.json(created);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
