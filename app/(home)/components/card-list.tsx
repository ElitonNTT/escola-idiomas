"use client";
import { Card, CardHeader } from "@/components/ui/card";
import { ItemCardList } from "../components/header-form";

type TCardList = {
  headerLabel: string;
  headerTitle: string;
};

export const CardList = ({ headerLabel, headerTitle }: TCardList) => {
  return (
    <div className="flex w-full items-center justify-center">
      <Card className="w-4/6 border-0 bg-inherit shadow-none">
        <CardHeader className="px-6 pb-2 pt-4">
          <ItemCardList label={headerLabel} title={headerTitle} />
        </CardHeader>
      </Card>
    </div>
  );
};
