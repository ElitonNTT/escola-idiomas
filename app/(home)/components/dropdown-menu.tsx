"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Course } from "@prisma/client";
import Link from "next/link";
import { FaAlignJustify } from "react-icons/fa";

type DropdownMenuCoursesProps = {
  courses?: Course[];
};

export function DropdownMenuCourses({ courses }: DropdownMenuCoursesProps) {
  if (!courses) {
    return <Skeleton />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <FaAlignJustify />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Cursos disponiveis</DropdownMenuLabel>
        <DropdownMenuGroup>
          {courses.map((course) => (
            <DropdownMenuItem key={course.slug} className="flex-grow">
              <Button variant="ghost">
                <Link href={`/cursos/${course.slug}`}>{course.title}</Link>
              </Button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
