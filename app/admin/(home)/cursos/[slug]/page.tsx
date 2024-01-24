import FormCourse from "../../../../../components/Admin/FormCourse";
import { prisma } from "@/lib/prisma/prismaClient";
import { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default async function Home({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const course = await prisma.course.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!course) {
    return <>Carregando</>;
  }

  return (
    <div className="flex flex-col">
      <Link
        href={`/admin/cursos/`}
        className="float-left mb-4 mr-auto flex w-[15%] justify-between rounded bg-primary p-3 text-white"
      >
        Voltar <FaArrowLeft />
      </Link>
      <FormCourse data={course} />
    </div>
  );
}

interface pageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: pageProps): Promise<Metadata> {
  const { slug } = params;

  const course = await prisma.course.findUnique({
    where: {
      slug,
    },
  });

  if (course) {
    return {
      title: course.title,
    };
  } else {
    return {
      title: "Not Found",
    };
  }
}
