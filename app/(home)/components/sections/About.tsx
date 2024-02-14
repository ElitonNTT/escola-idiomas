import { JsonValue } from "@prisma/client/runtime/library";
import { CardList } from "../card-list";
import { SkeletonList } from "../skeleton-list";

type AboutProps = {
  sections: JsonValue[] | null;
  titleSections: string | null;
};

export function About({ sections, titleSections }: AboutProps) {
  if (!sections || titleSections) {
    return <SkeletonList />;
  }

  return (
    <div className="flex flex-1 flex-col p-4 text-start text-graysecondary sm:m-auto sm:w-2/3">
      <span className="my-4 px-4 text-[18px] font-bold text-graysecondary ">
        {titleSections}
      </span>
      {/* @ts-ignore */}
      {sections.map(({ title, content }, index: number) => (
        <CardList key={index} headerLabel={content} headerTitle={title} />
      ))}
    </div>
  );
}
