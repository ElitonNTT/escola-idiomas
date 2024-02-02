import saveFile from "@/app/utils/saveFile";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
  const session = await getServerSession(authOptions);

  if (session == null) {
    return NextResponse.json({ message: "not logged in" }, { status: 401 });
  }

  const data = await request.formData();
  const file = data.get("file");
  if (file == null || typeof file === "string") {
    return NextResponse.json({ message: "error" }, { status: 400 });
  }

  const [filePath] = await saveFile(file);

  return NextResponse.json({
    message: "success",
    filePath,
  });
}
