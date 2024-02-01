"use client";
import { DropdownMenuCourses } from "@/app/(home)/components/dropdown-menu";
import logo_color from "@/assets/logo-color.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

type HeaderProps = {
  course?: string;
  listCourses?: {
    name: string;
    slug: string;
  };
};

export function Header({}: HeaderProps) {
  const path = usePathname();
  if (path === "/admin/login") {
    return <></>;
  }

  const coursesList = [
    {
      id: 1,
      name: "Inglês",
      slug: "ingles",
    },
    {
      id: 2,
      name: "Francês",
      slug: "frances",
    },
    {
      id: 3,
      name: "Alemão",
      slug: "alemao",
    },
  ];

  return (
    <div className="sticky top-0 z-50 flex h-[8dvh] items-center justify-center bg-white shadow-md sm:h-[5dvh]">
      <div className="flex w-5/6 items-center justify-between">
        <Image src={logo_color} alt="logo" width={60} />
        <DropdownMenuCourses courses={coursesList} />
      </div>
    </div>
  );
}
