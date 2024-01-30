"use client";
import { DropdownMenuCourses } from "@/app/(home)/components/dropdown-menu";
import logo_color from "@/assets/logo-color.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const path = usePathname();
  if (path === "/admin/login") {
    return <></>;
  }

  return (
    <div className="sticky top-0 z-50 flex h-[10dvh] items-center justify-center bg-white shadow-md">
      <div className="flex w-5/6 items-center justify-between">
        <Image src={logo_color} alt="logo" width={`100`} height={100} />
        <DropdownMenuCourses />
      </div>
    </div>
  );
}
