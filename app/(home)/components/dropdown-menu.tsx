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
import { useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";

export function DropdownMenuCourses() {
  //Isso não está bom => refatorar.
  const router = useRouter();

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <FaAlignJustify />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Cursos disponiveis</DropdownMenuLabel>
        <DropdownMenuGroup>
          {coursesList.map((course) => (
            <DropdownMenuItem key={course.id}>
              <Button
                onClick={() => router.push(`/cursos/${course.slug}`)}
                variant="ghost"
                className="flex-grow"
              >
                {course.name}
              </Button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
