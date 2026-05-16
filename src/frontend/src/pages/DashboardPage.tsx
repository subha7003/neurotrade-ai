import Header from "@/components/layout/Header";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, lazy } from "react";

const DashboardContent = lazy(
  () => import("@/components/dashboard/DashboardContent"),
);

export default function DashboardPage() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="min-h-screen pt-20 px-4 space-y-6">
            <Skeleton className="h-10 w-64" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Skeleton key="dash-sk-pnl" className="h-28" />,
              <Skeleton key="dash-sk-accuracy" className="h-28" />,
              <Skeleton key="dash-sk-signals" className="h-28" />,
              <Skeleton key="dash-sk-alerts" className="h-28" />,
            </div>
            <Skeleton className="h-80" />
          </div>
        }
      >
        <DashboardContent />
      </Suspense>
    </>
  );
}
