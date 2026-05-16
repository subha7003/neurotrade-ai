import GlassCard from "@/components/ui/GlassCard";
import { BarChart2, Info, Lightbulb } from "lucide-react";
import { motion } from "motion/react";

const features = [
  { label: "Volume Surge", value: 0.87, color: "from-primary to-primary/40" },
  {
    label: "Sentiment Score",
    value: 0.73,
    color: "from-secondary to-secondary/40",
  },
  { label: "Price Momentum", value: 0.65, color: "from-accent to-accent/40" },
  { label: "RSI Divergence", value: 0.54, color: "from-primary to-primary/40" },
  {
    label: "News Velocity",
    value: 0.48,
    color: "from-secondary to-secondary/40",
  },
  { label: "Sector Rotation", value: 0.38, color: "from-accent to-accent/40" },
];

const attentionCells = Array.from({ length: 64 }, (_, i) => {
  const row = Math.floor(i / 8);
  const col = i % 8;
  const intensity = Math.max(
    0,
    1 - (Math.abs(row - 3) + Math.abs(col - 4)) * 0.15,
  );
  return { id: `cell-r${row}-c${col}`, intensity };
});

export default function ExplainableAISection() {
  return (
    <section
      id="explainability"
      data-ocid="explainability.section"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-secondary uppercase tracking-widest mb-3">
            Explainable AI
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-foreground">Understand</span>{" "}
            <span className="text-gradient-blue-purple">Every Decision</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full transparency into the AI's reasoning — SHAP feature importance
            and attention heatmaps reveal exactly why a prediction was made.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SHAP importance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard
              glowColor="purple"
              padding="p-6"
              data-ocid="explainability.shap_card"
            >
              <div className="flex items-center gap-2 mb-5">
                <BarChart2 className="w-4 h-4 text-secondary" />
                <h3 className="font-semibold">Feature Importance (SHAP)</h3>
                <span className="ml-auto text-xs px-2 py-0.5 rounded bg-secondary/10 border border-secondary/30 text-secondary">
                  NVDA — BUY
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {features.map((f, i) => (
                  <div
                    key={f.label}
                    data-ocid={`explainability.feature.${i + 1}`}
                  >
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground">{f.label}</span>
                      <span className="font-mono text-foreground">
                        {(f.value * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${f.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${f.value * 100}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Attention heatmap + Why panel */}
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard
                glowColor="cyan"
                padding="p-6"
                data-ocid="explainability.heatmap_card"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-4 h-4 text-accent" />
                  <h3 className="font-semibold">Attention Heatmap</h3>
                  <span className="ml-auto text-xs text-muted-foreground">
                    Transformer layer 6
                  </span>
                </div>
                <div
                  className="grid gap-0.5"
                  style={{ gridTemplateColumns: "repeat(8, 1fr)" }}
                >
                  {attentionCells.map((cell, i) => (
                    <motion.div
                      key={cell.id}
                      className="aspect-square rounded-sm"
                      style={{
                        background: `oklch(${0.4 + cell.intensity * 0.25} ${cell.intensity * 0.25} 250 / ${cell.intensity})`,
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.005 }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                  <span>Low attention</span>
                  <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-white/5 to-primary" />
                  <span>High attention</span>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <GlassCard
                glowColor="blue"
                padding="p-5"
                data-ocid="explainability.why_panel"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Why this prediction?
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Strong volume surge (+87%) combined with bullish sentiment
                      from 3,400 analyzed articles drove the BUY signal. Price
                      momentum and RSI divergence from the 20-day baseline
                      confirmed the breakout pattern.
                    </p>
                    <div className="flex gap-2 mt-3">
                      <span className="text-xs px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary">
                        Volume +87%
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent">
                        Sentiment 73%
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20 text-secondary">
                        RSI Cross
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
