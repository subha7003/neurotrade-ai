import GlassCard from "@/components/ui/GlassCard";
import {
  AlertTriangle,
  Brain,
  Eye,
  Layers,
  Network,
  RotateCcw,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: TrendingUp,
    title: "Real-Time Market Prediction",
    description:
      "Transformer-based models analyze thousands of signals per second for live price forecasting.",
    color: "text-primary",
    glow: "blue" as const,
  },
  {
    icon: Brain,
    title: "AI Sentiment Analysis",
    description:
      "Multi-modal NLP processes news, social feeds, and earnings calls to quantify market emotion.",
    color: "text-secondary",
    glow: "purple" as const,
  },
  {
    icon: Layers,
    title: "Multi-Source Data Fusion",
    description:
      "Combines price action, fundamental data, and alternative datasets into a unified intelligence layer.",
    color: "text-accent",
    glow: "cyan" as const,
  },
  {
    icon: Zap,
    title: "Smart Trading Signals",
    description:
      "Adaptive reinforcement learning generates high-confidence Buy, Sell, and Hold signals in milliseconds.",
    color: "text-primary",
    glow: "blue" as const,
  },
  {
    icon: Network,
    title: "Graph Market Intelligence",
    description:
      "Dynamic knowledge graphs map sector relationships, revealing hidden correlations and contagion risks.",
    color: "text-secondary",
    glow: "purple" as const,
  },
  {
    icon: Eye,
    title: "Explainable Predictions",
    description:
      "SHAP-based attribution and attention maps surface the exact factors driving every AI decision.",
    color: "text-accent",
    glow: "cyan" as const,
  },
  {
    icon: RotateCcw,
    title: "Adaptive Learning Engine",
    description:
      "Continuously self-corrects by incorporating new market regimes, ensuring predictions stay current.",
    color: "text-primary",
    glow: "blue" as const,
  },
  {
    icon: AlertTriangle,
    title: "Risk Analytics",
    description:
      "Portfolio-level VaR, drawdown simulation, and tail-risk assessment powered by Monte Carlo AI.",
    color: "text-secondary",
    glow: "purple" as const,
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      data-ocid="features.section"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Platform Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-foreground">Intelligence Built for</span>{" "}
            <span className="text-gradient-blue-purple">Modern Trading</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eight core AI modules working in concert to deliver an unfair
            informational advantage.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <GlassCard
                hover
                padding="p-6"
                data-ocid={`features.card.${i + 1}`}
                className="h-full group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-smooth group-hover:scale-110 group-hover:border-white/20">
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
