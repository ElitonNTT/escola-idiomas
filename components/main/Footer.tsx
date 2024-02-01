"use client";
import { usePathname } from "next/navigation";

export function Footer() {
  const path = usePathname();
  if (path === "/admin/login") {
    return <></>;
  }
  const year = new Date().getFullYear();

  return (
    <div className="bg-graysecondary flex w-full items-center justify-center p-4">
      <div className="flex w-5/6 items-center justify-center">
        <span className="text-sm text-white">
          Escola de Idiomas © {year} All rights reserved
        </span>
      </div>
    </div>
  );
}
