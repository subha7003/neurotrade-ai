import GlassCard from "@/components/ui/GlassCard";
import { Activity, BarChart2, TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const priceData = [
  { time: "Jan", nvda: 480, tsla: 220, aapl: 185 },
  { time: "Feb", nvda: 520, tsla: 195, aapl: 190 },
  { time: "Mar", nvda: 610, tsla: 210, aapl: 175 },
  { time: "Apr", nvda: 580, tsla: 230, aapl: 182 },
  { time: "May", nvda: 720, tsla: 245, aapl: 195 },
  { time: "Jun", nvda: 810, tsla: 260, aapl: 210 },
  { time: "Jul", nvda: 780, tsla: 240, aapl: 225 },
  { time: "Aug", nvda: 870, tsla: 255, aapl: 218 },
  { time: "Sep", nvda: 920, tsla: 270, aapl: 230 },
  { time: "Oct", nvda: 990, tsla: 285, aapl: 238 },
];

const signals = [
  { ticker: "NVDA", signal: "BUY", confidence: 94, change: "+2.4%", up: true },
  { ticker: "TSLA", signal: "HOLD", confidence: 71, change: "+0.3%", up: true },
  { ticker: "AAPL", signal: "BUY", confidence: 88, change: "+1.1%", up: true },
  {
    ticker: "MSFT",
    signal: "HOLD",
    confidence: 65,
    change: "-0.4%",
    up: false,
  },
  {
    ticker: "META",
    signal: "SELL",
    confidence: 82,
    change: "-1.8%",
    up: false,
  },
];

const signalColors: Record<string, string> = {
  BUY: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  HOLD: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  SELL: "text-red-400 bg-red-400/10 border-red-400/30",
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ color: string; name: string; value: number }>;
  label?: string;
}) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card p-3 text-xs border-white/10">
      <p className="text-muted-foreground mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name.toUpperCase()}: ${p.value}
        </p>
      ))}
    </div>
  );
};

export default function DashboardSection() {
  return (
    <section
      id="dashboard"
      data-ocid="dashboard.section"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, oklch(0.06 0.01 250 / 0.4) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Live Analytics Dashboard
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-cyan-blue">Institutional-Grade</span>{" "}
            <span className="text-foreground">Intelligence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Real-time signals, portfolio analytics, and AI-driven insights in
            one unified view.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Main chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <GlassCard
              glowColor="blue"
              padding="p-5"
              data-ocid="dashboard.chart_card"
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-semibold text-foreground">
                    Portfolio Performance
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    AI-tracked positions YTD
                  </p>
                </div>
                <div className="flex gap-3 text-xs">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    NVDA
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    TSLA
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    AAPL
                  </span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={priceData}>
                  <defs>
                    <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="oklch(0.6 0.25 250)"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="100%"
                        stopColor="oklch(0.6 0.25 250)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                    <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="oklch(0.65 0.24 310)"
                        stopOpacity={0.25}
                      />
                      <stop
                        offset="100%"
                        stopColor="oklch(0.65 0.24 310)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                    <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="oklch(0.65 0.21 200)"
                        stopOpacity={0.25}
                      />
                      <stop
                        offset="100%"
                        stopColor="oklch(0.65 0.21 200)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.05)"
                  />
                  <XAxis
                    dataKey="time"
                    tick={{ fill: "oklch(0.55 0.03 250)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "oklch(0.55 0.03 250)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="nvda"
                    stroke="oklch(0.6 0.25 250)"
                    strokeWidth={2}
                    fill="url(#blueGrad)"
                  />
                  <Area
                    type="monotone"
                    dataKey="tsla"
                    stroke="oklch(0.65 0.24 310)"
                    strokeWidth={2}
                    fill="url(#purpleGrad)"
                  />
                  <Area
                    type="monotone"
                    dataKey="aapl"
                    stroke="oklch(0.65 0.21 200)"
                    strokeWidth={2}
                    fill="url(#cyanGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>

          {/* Signals panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard
              glowColor="purple"
              padding="p-5"
              className="h-full"
              data-ocid="dashboard.signals_card"
            >
              <div className="flex items-center gap-2 mb-5">
                <Activity className="w-4 h-4 text-secondary" />
                <h3 className="font-semibold text-foreground">AI Signals</h3>
                <span className="ml-auto text-xs text-muted-foreground">
                  Live
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="flex flex-col gap-3">
                {signals.map((s, i) => (
                  <div
                    key={s.ticker}
                    data-ocid={`dashboard.signal.${i + 1}`}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/3 border border-white/5 hover:border-white/10 transition-smooth"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        {s.up ? (
                          <TrendingUp className="w-3.5 h-3.5 text-primary" />
                        ) : (
                          <TrendingDown className="w-3.5 h-3.5 text-red-400" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{s.ticker}</p>
                        <p
                          className={`text-xs ${s.up ? "text-emerald-400" : "text-red-400"}`}
                        >
                          {s.change}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded border ${signalColors[s.signal]}`}
                      >
                        {s.signal}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {s.confidence}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Confidence bar */}
              <div className="mt-5 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <BarChart2 className="w-3 h-3" /> Avg. Confidence
                  </span>
                  <span className="text-foreground font-semibold">80%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
