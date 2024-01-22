import ContactForm from "../components/contact-form";

const Welcome = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-evenly bg-zinc-100">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">BEM-VINDO à ESCOLA DE IDIOMAS</h1>
        <h2 className="text-3xl font-semibold">
          Venha conhecer nossos programas!
        </h2>
      </div>
      <div className="flex w-full items-center justify-evenly">
        <ContactForm />
        <div className="flex h-[300px] w-[500px] items-center justify-center rounded-3xl bg-zinc-500">
          <p>Video</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
