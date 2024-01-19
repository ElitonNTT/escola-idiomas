type THeaderForm = {
  title: string;
  label: string;
};

const HeaderForm = ({ title, label }: THeaderForm) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <h1 className="text-3xl">{title}</h1>
      <h1 className="text-lg text-slate-950">{label}</h1>
    </div>
  );
};

export default HeaderForm;
