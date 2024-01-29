type THeaderItems = {
  title: string;
  label: string;
};

const HeaderForm = ({ title, label }: THeaderItems) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <h1 className="text-xl font-semibold sm:text-2xl">{title}</h1>
      <h1 className="text-md font-medium text-slate-950">{label}</h1>
    </div>
  );
};
const ItemCardList = ({ title, label }: THeaderItems) => {
  return (
    <div className="flex w-full flex-col text-justify">
      <h1 className="text-2xl font-bold text-blue-500">{title}</h1>
      <h1 className="text-lg font-semibold text-slate-950">{label}</h1>
    </div>
  );
};

export { HeaderForm, ItemCardList };
