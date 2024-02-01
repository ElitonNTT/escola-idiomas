"use client";
export default function HeaderCourse({
  title,
  content,
  bannerUrl,
}: {
  title: string;
  content: string;
  bannerUrl: string;
}) {
  return (
    <div className="mb-[35%] flex h-[40%] flex-col sm:hidden sm:h-[100%] sm:max-h-[80%]">
      {/*   eslint-disable-next-line @next/next/no-img-element  */}
      <img
        src={bannerUrl}
        alt="banner"
        className="absolute sm:relative  sm:ml-auto"
      />
      <div className=" from-blueprimary relative top-[15.5vh] z-50 mb-4 mt-auto w-full  flex-1 bg-gradient-to-t from-80% p-4 text-secondary sm:top-[2vh] sm:-mt-[15vh] sm:h-[100%] sm:max-h-[80%] md:flex md:flex-col">
        <div className="mb-2 ">
          <span className="text-[24px] font-semibold">
            <span className="mt-2 text-[32px] font-bold leading-3">
              {title}
            </span>
          </span>
        </div>
        <span className="mt-2 text-justify font-medium">{content}</span>
      </div>
    </div>
  );
}
