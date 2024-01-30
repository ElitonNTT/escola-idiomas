import About from "@/app/(home)/components/sections/About";
import Accordions from "@/app/(home)/components/sections/Accordions";
import { Welcome } from "@/app/(home)/components/sections/Welcome";
import { prisma } from "@/lib/prisma/prismaClient";
import { Metadata } from "next";

interface pageProps {
  params: { slug: string };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const course = await prisma.course.findUnique({
    where: {
      slug,
    },
  });

  if (!course) {
    // return (
    //   <div className="relative w-full">
    //     <Loading />
    //   </div>
    // );

    return (
      <div className="relative w-full">
        <Welcome />
        <About />
        <Accordions />
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Welcome />
      <About />
      <Accordions />
    </div>
  );
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
