import ContactForm from "@/app/(home)/components/contact-form";

type WelcomeProps = {
  videoId?: string | null;
};

export function Welcome({ videoId }: WelcomeProps) {
  return (
    <div className="m-auto sm:mb-8 sm:flex sm:w-2/3">
      <div className="flex flex-1 flex-col p-4 text-center sm:m-auto sm:w-1/3 md:w-1/3">
        <ContactForm course={""} />
      </div>
      <div className="sm:w-3/3 flex flex-1 flex-col p-4 text-center sm:m-auto md:w-2/3">
        <p className="flex h-full w-full items-center justify-center overflow-hidden rounded-md">
          <iframe
            className="mb-5 aspect-video w-full rounded  sm:m-auto"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </p>
      </div>
    </div>
  );
}
