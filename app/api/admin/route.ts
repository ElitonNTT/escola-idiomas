import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma/prismaClient";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
  try {
    const session = await getServerSession(authOptions);

    if (session == null) {
      return NextResponse.json({ message: "not logged in" }, { status: 401 });
    }

    const { password, email, role, name } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    const { id } = await prisma.admin.upsert({
      where: {
        email,
      },
      update: {
        name,
        password_digest: hashedPassword,
        role,
      },
      create: {
        name,
        email,
        password_digest: hashedPassword,
        role,
      },
    });

    return NextResponse.json({ email, id });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
