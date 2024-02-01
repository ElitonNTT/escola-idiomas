import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonList() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-3 py-5">
      <div className=" space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  );
}
