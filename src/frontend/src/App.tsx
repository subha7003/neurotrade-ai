import { Skeleton } from "@/components/ui/skeleton";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const LandingPage = lazy(() => import("@/components/layout/LandingPage"));
const DashboardPage = lazy(() => import("@/pages/DashboardPage"));
const PredictionPage = lazy(() => import("@/pages/PredictionPage"));
const PortfolioPage = lazy(() => import("@/pages/PortfolioPage"));

const PageFallback = () => (
  <div className="min-h-screen pt-20 px-4 space-y-6">
    <Skeleton className="h-10 w-64" />
    <Skeleton className="h-80 w-full" />
  </div>
);

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <LandingPage />
    </Suspense>
  ),
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <DashboardPage />
    </Suspense>
  ),
});

const predictionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/predict",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <PredictionPage />
    </Suspense>
  ),
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <PortfolioPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  predictionRoute,
  portfolioRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
