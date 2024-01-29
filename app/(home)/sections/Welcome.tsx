import ContactForm from "../components/contact-form";

const Welcome = () => {
  return (
    <div className="flex-col items-center justify-center bg-none bg-contain p-4 md:flex md:gap-4 md:bg-waves">
      <div className="w-full flex-col items-center justify-center p-4 md:flex md:p-0">
        <h1 className="text-center text-3xl font-bold md:text-6xl">
          BEM-VINDO À ESCOLA DE IDIOMAS
        </h1>
        <h2 className="text-center text-xl font-semibold md:text-3xl">
          Venha conhecer nossos programas!
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-evenly gap-4 md:flex-row md:gap-0">
        <ContactForm />
        <div className="glass flex h-[300px] w-[95%] items-center justify-center bg-zinc-500 p-4 md:m-0 md:h-[400px] md:w-[600px]">
          <p className="flex h-full w-full items-center justify-center rounded-md bg-zinc-200">
            Video
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
