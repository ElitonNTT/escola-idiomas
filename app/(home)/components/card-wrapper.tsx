"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HeaderForm } from "./header-form";

type TCardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  headerTitle: string;
};

export const CardWrapper = ({
  children,
  headerLabel,
  headerTitle,
}: TCardWrapperProps) => {
  return (
    <Card className="w-[500px] shadow-md">
      <CardHeader className="px-6 pb-2 pt-4">
        <HeaderForm label={headerLabel} title={headerTitle} />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
