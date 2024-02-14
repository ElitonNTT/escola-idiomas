import { About } from "@/app/(home)/components/sections/About";
import { Accordions } from "@/app/(home)/components/sections/Accordions";
import { Welcome } from "@/app/(home)/components/sections/Welcome";
import { prisma } from "@/lib/prisma/prismaClient";
import { Metadata } from "next";
import HeaderCourse from "../../components/HeaderCourse";
import { PriceSectionsProps } from "../../components/sections/PriceInfo";
import Loading from "./loading";

interface pageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { platform: string | undefined; campaing: string | undefined };
}) {
  const { slug } = params;

  const { platform, campaing } = searchParams;

  const course = await prisma.course.findUnique({
    where: {
      slug,
    },
  });

  if (!course) {
    return (
      <div className="relative w-full">
        <Loading />
      </div>
    );
  }

  const { id: sessionId } = await prisma.session.create({
    data: {
      campaing,
      platform,
    },
  });

  return (
    <div className="relative h-full w-full">
      <HeaderCourse
        bannerUrl={course.bannerUrl}
        content={course.content}
        title={course.title}
      />
      <div className="hidden flex-1 flex-col p-4 text-center sm:m-auto sm:flex sm:w-2/3 md:w-2/3 lg:w-2/3">
        <div className="top-[15.5vh] m-auto mb-4 mt-auto w-full flex-1 bg-gradient-to-t text-graysecondary  sm:h-[100%]  md:flex md:flex-col">
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
        <Welcome
          course={course.title}
          videoId={course.videoId}
          sessionId={sessionId}
        />
      </div>
      <About sections={course.sections} titleSections={course.titleSections} />
      <PriceSectionsProps copyPrice={course.copyPrice} price={course.price} />
      <div className="mt-4 px-4 sm:m-auto sm:w-2/3 md:w-2/3">
        <span className="my-4 px-4 text-[18px] font-bold text-graysecondary ">
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
