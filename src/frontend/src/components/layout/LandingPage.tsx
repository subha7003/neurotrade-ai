import ParticleBackground from "@/components/ui/ParticleBackground";
import { Suspense, lazy } from "react";
import Header from "./Header";

const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const FeaturesSection = lazy(
  () => import("@/components/sections/FeaturesSection"),
);
const DashboardSection = lazy(
  () => import("@/components/sections/DashboardSection"),
);
const ExplainableAISection = lazy(
  () => import("@/components/sections/ExplainableAISection"),
);
const PricingSection = lazy(
  () => import("@/components/sections/PricingSection"),
);
const FooterSection = lazy(() => import("@/components/sections/FooterSection"));

function SectionFallback() {
  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-primary/40 border-t-primary animate-spin" />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Ambient gradient orbs */}
      <div
        aria-hidden="true"
        className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.25 250 / 0.08) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="fixed top-[10%] right-[-15%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.24 310 / 0.07) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="fixed bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.21 200 / 0.06) 0%, transparent 65%)",
        }}
      />

      <ParticleBackground />
      <Header />

      <main id="main-content">
        <Suspense fallback={<SectionFallback />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <DashboardSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ExplainableAISection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <PricingSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FooterSection />
        </Suspense>
      </main>
    </div>
  );
}
