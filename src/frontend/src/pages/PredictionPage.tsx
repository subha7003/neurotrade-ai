import Header from "@/components/layout/Header";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, lazy } from "react";

const PredictionContent = lazy(
  () => import("@/components/prediction/PredictionContent"),
);

export default function PredictionPage() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="min-h-screen pt-20 px-4 space-y-6">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-16 w-full max-w-xl" />
            <Skeleton className="h-96" />
          </div>
        }
      >
        <PredictionContent />
      </Suspense>
    </>
  );
}
