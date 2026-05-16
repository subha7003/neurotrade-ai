import Header from "@/components/layout/Header";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, lazy } from "react";

const PortfolioContent = lazy(
  () => import("@/components/portfolio/PortfolioContent"),
);

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="min-h-screen pt-20 px-4 space-y-6">
            <Skeleton className="h-10 w-48" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Skeleton key="port-sk-1" className="h-28" />
              <Skeleton key="port-sk-2" className="h-28" />
              <Skeleton key="port-sk-3" className="h-28" />
              <Skeleton key="port-sk-4" className="h-28" />
            </div>
            <Skeleton className="h-80" />
          </div>
        }
      >
        <PortfolioContent />
      </Suspense>
    </>
  );
}
