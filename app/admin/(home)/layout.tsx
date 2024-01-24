import Navbar from "../../../components/Admin/NavBar";
import { authOptions } from "@/lib/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Administração | EPEX",
  description: "",
};

export const revalidate = 0;
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <>
      <Navbar />
      <div className="ml-56 overflow-y-auto p-3">
        <div className="mx-auto rounded-2xl bg-white p-4 lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl">
          {children}
        </div>
      </div>
    </>
  );
}
