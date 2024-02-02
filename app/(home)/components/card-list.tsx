"use client";
import { Card, CardHeader } from "@/components/ui/card";
import ItemCardList from "../components/header-form";

type TCardList = {
  headerLabel: string;
  headerTitle: string;
};

export const CardList = ({ headerLabel, headerTitle }: TCardList) => {
  return (
    <div className="flex w-full text-start">
      <Card className="w-[95%] border-0 bg-inherit shadow-none md:w-4/5">
        <CardHeader className="px-4">
          <ItemCardList label={headerLabel} title={headerTitle} />
        </CardHeader>
      </Card>
    </div>
  );
};
