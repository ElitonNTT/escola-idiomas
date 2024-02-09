"use client";
import { DropdownMenuCourses } from "@/app/(home)/components/dropdown-menu";
import logo_color from "@/assets/logo-color.png";
import { Course } from "@prisma/client";
import Image from "next/image";
import { usePathname } from "next/navigation";

type HeaderProps = {
  course?: string;
  listCourses?: Course[];
};

export function Header({ listCourses }: HeaderProps) {
  const path = usePathname();
  if (path === "/admin/login") {
    return <></>;
  }

  return (
    <div className="sticky top-0 z-50 flex h-[8dvh] items-center justify-center bg-white shadow-md sm:h-[5dvh]">
      <div className="flex w-5/6 items-center justify-between">
        <Image src={logo_color} alt="logo" width={60} />
        <DropdownMenuCourses courses={listCourses} />
      </div>
    </div>
  );
}
