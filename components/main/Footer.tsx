"use client";
import { usePathname } from "next/navigation";

export function Footer() {
  const path = usePathname();
  if (path === "/admin/login") {
    return <></>;
  }
  const year = new Date().getFullYear();

  return (
    <div className="flex w-full items-center justify-center bg-[#62ABEC] p-4">
      <div className="flex w-5/6 items-center justify-center">
        <span className="text-sm text-black">
          Escola de Idiomas © {year} All rights reserved
        </span>
      </div>
    </div>
  );
}
