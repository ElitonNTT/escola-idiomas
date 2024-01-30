import FormCourse from "@/components/Admin/FormCourse";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default async function Home() {
  return (
    <div className="flex flex-col">
      <Link
        href={`/admin/cursos/`}
        className="float-left mb-4 mr-auto flex w-[15%] justify-between rounded bg-primary p-3 text-white"
      >
        Voltar <FaArrowLeft />
      </Link>
      <FormCourse />
    </div>
  );
}
