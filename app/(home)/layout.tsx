import "@/app/globals.css";
import { Footer } from "@/components/main/Footer";
import { Header } from "@/components/main/Header";
import { prisma } from "@/lib/prisma/prismaClient";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Centro de Idiomas",
  description: "Escola de Idiomas",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const coursesList = await prisma.course.findMany();

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header listCourses={coursesList} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
