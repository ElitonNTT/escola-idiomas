type THeaderItems = {
  title: string;
  label: string;
};

const ItemCardList = ({ title, label }: THeaderItems) => {
  return (
    <div className="flex w-full flex-col ">
      <h1
        className={`text-graysecondary text-[${label ? "15px" : "18px"}] font-bold`}
      >
        {title}
      </h1>
      <h1 className="mt-2 text-[15px]">{label}</h1>
    </div>
  );
};

export { ItemCardList };
