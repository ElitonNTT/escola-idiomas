import ContactForm from "@/app/(home)/components/contact-form";

type WelcomeProps = {
  videoId?: string | null;
};

export function Welcome({ videoId }: WelcomeProps) {
  return (
    <div className="flex-col items-center bg-none bg-contain p-4 text-gray-700 md:flex md:h-[90vh] md:gap-4 md:bg-waves 2xl:justify-evenly">
      <div className="w-full flex-col items-center justify-center p-4 md:flex md:p-0">
        <h1 className="text-center text-3xl font-bold text-gray-800 sm:text-4xl 2xl:text-6xl">
          BEM-VINDO À ESCOLA DE IDIOMAS
        </h1>
        <h2 className="text-center text-xl font-semibold text-gray-700 sm:text-2xl 2xl:text-4xl">
          Venha conhecer nossos programas!
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-evenly gap-4 md:flex-row md:gap-0">
        <ContactForm />
        <div
          className="glass flex h-[300px] w-[95%] items-center justify-center bg-zinc-500 p-4 md:m-0 md:h-[300px] 
        md:w-[450px]"
        >
          <p className="flex h-full w-full items-center justify-center overflow-hidden rounded-md bg-zinc-200">
            <iframe
              width="450"
              height="280"
              src={`https://www.youtube.com/embed/${videoId}&amp;controls=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </p>
        </div>
      </div>
    </div>
  );
}
