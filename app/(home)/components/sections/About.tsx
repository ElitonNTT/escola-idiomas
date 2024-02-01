import { JsonValue } from "@prisma/client/runtime/library";
import { CardList } from "../card-list";
import { SkeletonList } from "../skeleton-list";

type AboutProps = {
  sections: JsonValue[] | null;
};

export function About({ sections }: AboutProps) {
  if (!sections) {
    return <SkeletonList />;
  }

  return (
    <div className="text-graysecondary flex flex-1 flex-col p-4 text-start sm:m-auto sm:w-2/3">
      {/* @ts-ignore */}
      {sections.map(({ title, content }, index: number) => (
        <CardList key={index} headerLabel={content} headerTitle={title} />
      ))}
    </div>
  );
}
