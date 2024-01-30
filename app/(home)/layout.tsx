import "@/app/globals.css";
import { Footer } from "@/components/main/Footer";
import { Header } from "@/components/main/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Escola - Idiomas",
  description: "Escola de Idiomas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(inter.className, "min-h-[100vh]")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
