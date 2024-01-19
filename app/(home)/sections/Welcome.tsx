import ContactForm from "../components/contact-form";

const Welcome = () => {
  return (
    <div className="flex h-screen items-center justify-evenly">
      <ContactForm />
      <div className="flex h-[300px] w-[500px] items-center justify-center rounded-3xl bg-zinc-500">
        <p>Video</p>
      </div>
    </div>
  );
};

export default Welcome;
