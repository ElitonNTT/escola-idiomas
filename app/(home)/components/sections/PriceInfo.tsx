import { CardContent, CardHeader } from "@/components/ui/card";
import { SkeletonList } from "../skeleton-list";

type PriceSectionsProps = {
  copyPrice: string | null;
  price: string | null;
};

export function PriceSectionsProps({ copyPrice, price }: PriceSectionsProps) {
  if (!copyPrice || !price) {
    return <SkeletonList />;
  }

  return (
    <div className="flex flex-1 flex-col items-center p-4 text-start text-graysecondary sm:m-auto sm:w-2/3">
      <CardContent className="text-[24px] font-medium">{copyPrice}</CardContent>
      <CardHeader className="text-[48px] font-bold">R${price}</CardHeader>
    </div>
  );
}
