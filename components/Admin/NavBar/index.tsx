"use client";

import { linksOutros } from "@/app/utils/Links";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";

import logo_color from "@/assets/logo-color.png";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed bottom-0 left-0 top-0 flex w-48 flex-col gap-3 overflow-auto bg-white p-4 shadow">
      <Image src={logo_color} alt="" />
      <Link href="/admin/cursos" className="mb-5 w-36"></Link>
      <Link
        href={"/admin"}
        className={[
          "block border-b p-3 font-semibold uppercase tracking-tight hover:text-sky-400",
          pathname === "/admin/" ? "text-sky-400" : "text-black",
        ].join(" ")}
      >
        INICIO
      </Link>
      {linksOutros.map(({ label, href }, index) => (
        <Link
          href={href}
          key={index}
          className={[
            "block border-b p-3 font-semibold uppercase tracking-tight hover:text-sky-400",
            pathname === href ? "text-sky-400" : "text-black",
          ].join(" ")}
        >
          {typeof label === "string" ? label.toUpperCase() : label}
        </Link>
      ))}
      <div className="flex-grow" />
      <button
        className="my-2 flex items-center gap-1 font-semibold uppercase tracking-tight text-black"
        onClick={() => signOut({ redirect: true })}
      >
        <FaSignOutAlt className="h-4 w-4 text-red-500" /> Sair
      </button>
    </header>
  );
}
