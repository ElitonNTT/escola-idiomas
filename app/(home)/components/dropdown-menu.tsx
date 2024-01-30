import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaAlignJustify } from "react-icons/fa";

export function DropdownMenuCourses() {
  const coursesList = [
    {
      id: 1,
      name: "Inglês",
    },
    {
      id: 2,
      name: "Francês",
    },
    {
      id: 3,
      name: "Alemão",
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
              <Button variant="ghost" className="flex-grow">
                {course.name}
              </Button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
