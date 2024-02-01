import logo from "@/assets/logo-name.png";
import { authOptions } from "@/lib/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Administração | Escola",
  description: "",
};

export default async function Layout({ children }: { children?: ReactNode }) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/admin");
  }

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 sm:py-12">
      <div className="xs:p-0 mx-auto flex flex-col p-10 md:w-full md:max-w-md">
        <div className="xs:p-0 mx-auto flex-row p-10 md:w-full md:max-w-md">
          <Image src={logo} alt="logo" />
        </div>
        <div className="w-full divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="px-5 py-7">{children}</div>
        </div>
      </div>
    </div>
  );
}
