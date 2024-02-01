import { About } from "@/app/(home)/components/sections/About";
import { Accordions } from "@/app/(home)/components/sections/Accordions";
import { Welcome } from "@/app/(home)/components/sections/Welcome";
import { prisma } from "@/lib/prisma/prismaClient";
import { Metadata } from "next";
import HeaderCourse from "../../components/HeaderCourse";

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
        <About sections={null} />
        <div className="mt-4 flex flex-1 flex-col px-4 sm:m-auto sm:w-2/3 md:w-2/3">
          <span className="text-grraysecondary my-4 p-4 text-[18px] font-bold ">
            Acordions
          </span>
          <Accordions />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <HeaderCourse
        bannerUrl="https://sspma.com.br/wp-content/uploads/2022/05/ingless.png"
        content={course.content}
        title={course.title}
      />
      <div className="hidden flex-1 flex-col p-4 text-center sm:m-auto sm:flex sm:w-2/3 md:w-2/3 lg:w-2/3">
        <div className="text-graysecondary top-[15.5vh] m-auto mb-4 mt-auto w-full flex-1 bg-gradient-to-t  sm:h-[100%]  md:flex md:flex-col">
          <div className="mb-2 ">
            <span className="text-[32px] font-semibold">
              <span className="mt-2 text-[48px] font-bold leading-3">
                {course.title}
              </span>
            </span>
          </div>
          <span className="m-auto mt-2 text-justify font-medium">
            {course.content}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <Welcome videoId={course.videoId} />
      </div>
      <About sections={course.sections} />
      <div className="mt-4 px-4 sm:m-auto sm:w-2/3 md:w-2/3">
        <span className="text-graysecondary my-4 px-4 text-[18px] font-bold ">
          {course.titleAcordions}
        </span>
        <Accordions accordion={course.acordions} />
      </div>
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
