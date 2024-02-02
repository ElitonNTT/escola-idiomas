import { CreateConvertion } from "@/app/utils/rdStation";
import { prisma } from "@/lib/prisma/prismaClient";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
  try {
    const { name, phone, email, terms, course, sessionId } =
      await request.json();
    const cookieStore = cookies();
    let trafficSource = cookieStore.get("__trf.src");

    const lead = await prisma.lead.upsert({
      where: {
        email,
      },
      update: {
        name,
        phone,
        email,
        course,
        sessionId,
      },
      create: {
        email,
        name,
        terms,
        phone,
        course,
        sessionId,
      },
    });

    CreateConvertion({ name, phone, email, course, trafficSource });

    return NextResponse.json(lead);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
