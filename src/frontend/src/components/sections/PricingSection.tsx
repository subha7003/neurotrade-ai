import GlassCard from "@/components/ui/GlassCard";
import NeonButton from "@/components/ui/NeonButton";
import { Building2, Check, Star, Zap } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$49",
    period: "/month",
    description: "Perfect for individual traders starting their AI journey.",
    glow: "none" as const,
    cta: "Get Started",
    variant: "ghost" as const,
    features: [
      "5 AI-monitored assets",
      "Daily prediction reports",
      "Basic sentiment analysis",
      "Email signal alerts",
      "Mobile dashboard access",
    ],
  },
  {
    name: "Professional",
    icon: Star,
    price: "$149",
    period: "/month",
    description:
      "For serious traders who demand institutional-grade intelligence.",
    glow: "blue" as const,
    cta: "Start Free Trial",
    variant: "primary" as const,
    featured: true,
    features: [
      "Unlimited asset monitoring",
      "Real-time AI predictions",
      "Full sentiment + news fusion",
      "Smart trading signals",
      "Explainable AI insights",
      "Graph intelligence maps",
      "Risk analytics suite",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "pricing",
    description: "Tailored AI infrastructure for hedge funds and institutions.",
    glow: "purple" as const,
    cta: "Contact Sales",
    variant: "secondary" as const,
    features: [
      "Everything in Professional",
      "Dedicated model training",
      "Custom data integrations",
      "SLA guarantees",
      "On-premise deployment option",
      "White-label platform",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      data-ocid="pricing.section"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, oklch(0.06 0.01 310 / 0.3) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-foreground">Invest in Your</span>{" "}
            <span className="text-gradient-full">Edge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Start free for 14 days. No credit card required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={plan.featured ? "md:-mt-4" : ""}
            >
              <GlassCard
                glowColor={plan.glow}
                padding="p-7"
                data-ocid={`pricing.plan.${i + 1}`}
                className={plan.featured ? "border-primary/40" : ""}
              >
                {plan.featured && (
                  <div className="flex justify-center mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <plan.icon className="w-5 h-5 text-foreground/80" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{plan.name}</h3>
                  </div>
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>
                <NeonButton
                  variant={plan.variant}
                  size="md"
                  data-ocid={`pricing.cta.${i + 1}`}
                  className="w-full justify-center mb-7"
                >
                  {plan.cta}
                </NeonButton>
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
