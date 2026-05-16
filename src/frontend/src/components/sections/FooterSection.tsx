import NeonButton from "@/components/ui/NeonButton";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  TrendingUp,
  Twitter,
} from "lucide-react";
import { motion } from "motion/react";

const navGroups = [
  {
    title: "Platform",
    links: ["Features", "Dashboard", "Pricing", "Changelog"],
  },
  {
    title: "Intelligence",
    links: [
      "Prediction Engine",
      "Sentiment AI",
      "Risk Analytics",
      "Graph Intelligence",
    ],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
];

const testimonials = [
  {
    quote:
      "NeuroTrade AI transformed how I approach every trade. The AI signals are uncannily accurate.",
    name: "Marcus Chen",
    role: "Quantitative Trader",
  },
  {
    quote:
      "The explainability features gave our risk team confidence to deploy the signals at scale.",
    name: "Priya Nair",
    role: "Head of Algo Strategies",
  },
  {
    quote:
      "Best-in-class sentiment fusion. We track 12,000 assets and it handles it effortlessly.",
    name: "James Whitfield",
    role: "Portfolio Manager",
  },
];

export default function FooterSection() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "neurotrade.ai";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer id="about" className="relative border-t border-white/5">
      {/* Testimonials */}
      <section
        data-ocid="testimonials.section"
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, oklch(0.06 0.01 250 / 0.3) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              <span className="text-foreground">Trusted by</span>{" "}
              <span className="text-gradient-blue-purple">Elite Traders</span>
            </h2>
            <p className="text-muted-foreground">
              Join 14,000+ professionals who trade smarter with AI.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`testimonials.item.${i + 1}`}
                className="glass-card p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span key={`star-${n}`} className="text-yellow-400 text-xs">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <div className="border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-2">Stay Ahead of the Market</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Weekly AI market intelligence delivered to your inbox.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@example.com"
              data-ocid="footer.newsletter_input"
              aria-label="Email for newsletter"
              className="flex-1 px-4 py-2.5 text-sm rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-smooth"
            />
            <NeonButton
              variant="primary"
              size="md"
              data-ocid="footer.newsletter_button"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </NeonButton>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-white/5 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <span className="font-bold text-gradient-blue-purple">
                  NeuroTrade AI
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                AI-powered financial intelligence for the next generation of
                traders.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Twitter, label: "Twitter", href: "#" },
                  { icon: Github, label: "GitHub", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Mail, label: "Email", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    data-ocid={`footer.${label.toLowerCase()}_link`}
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-smooth"
                  >
                    <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav groups */}
            {navGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link}>
                      <button
                        type="button"
                        data-ocid={`footer.${link.toLowerCase().replace(/\s+/g, "_")}_link`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/5 gap-3">
            <p className="text-xs text-muted-foreground">
              © {year}. Built with love using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-smooth"
              >
                caffeine.ai
              </a>
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                className="text-xs text-muted-foreground hover:text-foreground transition-smooth"
              >
                Privacy
              </button>
              <button
                type="button"
                className="text-xs text-muted-foreground hover:text-foreground transition-smooth"
              >
                Terms
              </button>
              <button
                type="button"
                className="text-xs text-muted-foreground hover:text-foreground transition-smooth"
              >
                Security
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
