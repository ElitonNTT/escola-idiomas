import DataTable from "../../../../components/Admin/dataTable";
import { prisma } from "@/lib/prisma/prismaClient";
import { Course } from "@prisma/client";
import Link from "next/link";
import { FaArrowRight, FaPlus } from "react-icons/fa";

export default async function Pages() {
  const listCourses = await prisma.course.findMany();
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h1 className="mb-3 text-3xl font-semibold text-primary lg:text-4xl ">
          Cursos
        </h1>
        <Link
          href={`/admin/cursos/novo`}
          className="float-left mb-5 ml-auto flex w-[15%] justify-between rounded bg-primary p-3 text-white"
        >
          Novo <FaPlus />
        </Link>
      </div>

      <div className="">
        <DataTable
          data={listCourses}
          idExtractor={(course) => course.slug}
          rowGenerator={(key: Course) => [
            key.title,
            <Link
              href={`/admin/cursos/${key.slug}`}
              key={key.slug}
              className="float-left block rounded bg-primary p-3 text-white"
            >
              <FaArrowRight />
            </Link>,
          ]}
          titles={["Curso", "Rota"]}
        />
      </div>
    </div>
  );
}
