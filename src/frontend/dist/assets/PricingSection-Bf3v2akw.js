import { j as jsxRuntimeExports } from "./index-DZ-iRrHU.js";
import { G as GlassCard } from "./GlassCard-DyUzIlVr.js";
import { N as NeonButton } from "./NeonButton-DgfY8YkA.js";
import { c as createLucideIcon, m as motion, Z as Zap } from "./Header-eVOqwmYY.js";
import { S as Star } from "./star-QLtOo_xu.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode);
const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$49",
    period: "/month",
    description: "Perfect for individual traders starting their AI journey.",
    glow: "none",
    cta: "Get Started",
    variant: "ghost",
    features: [
      "5 AI-monitored assets",
      "Daily prediction reports",
      "Basic sentiment analysis",
      "Email signal alerts",
      "Mobile dashboard access"
    ]
  },
  {
    name: "Professional",
    icon: Star,
    price: "$149",
    period: "/month",
    description: "For serious traders who demand institutional-grade intelligence.",
    glow: "blue",
    cta: "Start Free Trial",
    variant: "primary",
    featured: true,
    features: [
      "Unlimited asset monitoring",
      "Real-time AI predictions",
      "Full sentiment + news fusion",
      "Smart trading signals",
      "Explainable AI insights",
      "Graph intelligence maps",
      "Risk analytics suite",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "pricing",
    description: "Tailored AI infrastructure for hedge funds and institutions.",
    glow: "purple",
    cta: "Contact Sales",
    variant: "secondary",
    features: [
      "Everything in Professional",
      "Dedicated model training",
      "Custom data integrations",
      "SLA guarantees",
      "On-premise deployment option",
      "White-label platform"
    ]
  }
];
function PricingSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "pricing",
      "data-ocid": "pricing.section",
      className: "relative py-24 px-4 sm:px-6 lg:px-8",
      style: {
        background: "linear-gradient(180deg, transparent 0%, oklch(0.06 0.01 310 / 0.3) 50%, transparent 100%)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "text-center mb-14",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-3", children: "Pricing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl font-bold mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Invest in Your" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-full", children: "Edge" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Start free for 14 days. No credit card required." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 items-start", children: plans.map((plan, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.1 },
            className: plan.featured ? "md:-mt-4" : "",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              GlassCard,
              {
                glowColor: plan.glow,
                padding: "p-7",
                "data-ocid": `pricing.plan.${i + 1}`,
                className: plan.featured ? "border-primary/40" : "",
                children: [
                  plan.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary uppercase tracking-wider", children: "Most Popular" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(plan.icon, { className: "w-5 h-5 text-foreground/80" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: plan.name }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold text-foreground", children: plan.price }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: plan.period })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: plan.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    NeonButton,
                    {
                      variant: plan.variant,
                      size: "md",
                      "data-ocid": `pricing.cta.${i + 1}`,
                      className: "w-full justify-center mb-7",
                      children: plan.cta
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2.5", children: plan.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-2.5 text-sm",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-accent flex-shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: feature })
                      ]
                    },
                    feature
                  )) })
                ]
              }
            )
          },
          plan.name
        )) })
      ] })
    }
  );
}
export {
  PricingSection as default
};
