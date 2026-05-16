import GlassCard from "@/components/ui/GlassCard";
import NeonButton from "@/components/ui/NeonButton";
import { ArrowRight, Play, Shield, TrendingUp, Zap } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    label: "Prediction Accuracy",
    value: "94.7%",
    icon: TrendingUp,
    color: "text-primary",
  },
  {
    label: "AI Models Active",
    value: "12",
    icon: Zap,
    color: "text-secondary",
  },
  {
    label: "Assets Monitored",
    value: "50K+",
    icon: Shield,
    color: "text-accent",
  },
];

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Hero image background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(/assets/generated/hero-dashboard.dim_1200x700.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-neon-blue glow-blue mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-xs font-semibold text-primary tracking-wider uppercase">
            Live AI Intelligence Platform
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-foreground">AI-Powered</span>{" "}
          <br className="hidden sm:block" />
          <span className="text-gradient-full">Real-Time Financial</span>{" "}
          <br className="hidden sm:block" />
          <span className="text-foreground">Intelligence.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Unlock predictive insights, analyze market sentiment, and trade with
          the edge of advanced machine learning. Experience the future of
          finance — powered by multi-modal deep learning and transformer-based
          forecasting.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <NeonButton
            variant="primary"
            size="lg"
            data-ocid="hero.start_predicting_button"
            onClick={() => scrollTo("#dashboard")}
          >
            <Zap className="w-5 h-5" />
            Start Predicting
            <ArrowRight className="w-5 h-5" />
          </NeonButton>
          <NeonButton
            variant="ghost"
            size="lg"
            data-ocid="hero.view_dashboard_button"
            onClick={() => scrollTo("#dashboard")}
          >
            <Play className="w-4 h-4" />
            View Dashboard
          </NeonButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <GlassCard
                hover
                padding="p-4"
                className="text-center"
                data-ocid={`hero.stat.${i + 1}`}
              >
                <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-1.5`} />
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent animate-float" />
      </motion.div>
    </section>
  );
}
