import { SkeletonCard } from "@/app/(home)/components/skeleton";

export default function Loading() {
  return (
    <div className="m-auto w-full flex-1">
      <SkeletonCard />
    </div>
  );
}
