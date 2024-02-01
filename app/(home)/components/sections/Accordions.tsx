import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SkeletonList } from "../skeleton-list";

export function Accordions({ accordion }: any) {
  if (!accordion) {
    return <SkeletonList />;
  }

  return (
    <Accordion type="single" collapsible className="mb-4 px-2 text-[18px] ">
      {accordion.map((item: any, index: number) => (
        <AccordionItem
          value={"item" + index}
          key={index}
          className="my-2 rounded-md bg-gray-50 text-[18px]"
        >
          <AccordionTrigger className="text-graysecondary text-start text-[18px]">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="p-2 text-[15px]">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
