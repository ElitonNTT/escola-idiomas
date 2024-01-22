type THeaderItems = {
  title: string;
  label: string;
};

const HeaderForm = ({ title, label }: THeaderItems) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <h1 className="text-3xl">{title}</h1>
      <h1 className="text-lg text-slate-950">{label}</h1>
    </div>
  );
};
const ItemCardList = ({ title, label }: THeaderItems) => {
  return (
    <div className="flex w-full flex-col">
      <h1 className="text-2xl font-bold text-blue-500">{title}</h1>
      <h1 className="text-lg font-semibold text-slate-950">{label}</h1>
    </div>
  );
};

export { HeaderForm, ItemCardList };
