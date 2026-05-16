import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "@tanstack/react-router";
import {
  Brain,
  Briefcase,
  ChevronRight,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const landingLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

const appLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Predict", href: "/predict", icon: Brain },
  { label: "Portfolio", href: "/portfolio", icon: Briefcase },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const { isAuthenticated, login, logout } = useAuth();

  const isLanding =
    typeof window !== "undefined" && window.location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLandingScroll = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleAppNav = (href: string) => {
    setMobileOpen(false);
    router.navigate({ to: href });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/80 border-b border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            data-ocid="header.logo.link"
            onClick={() => router.navigate({ to: "/" })}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center glow-blue transition-smooth group-hover:scale-105">
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-gradient-blue-purple">NeuroTrade</span>
              <span className="text-foreground/80"> AI</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {isLanding
              ? landingLinks.map((link) => (
                  <button
                    key={link.href}
                    type="button"
                    data-ocid={`header.${link.label.toLowerCase()}.link`}
                    onClick={() => handleLandingScroll(link.href)}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-smooth rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                  </button>
                ))
              : appLinks.map((link) => (
                  <button
                    key={link.href}
                    type="button"
                    data-ocid={`header.${link.label.toLowerCase()}.link`}
                    onClick={() => handleAppNav(link.href)}
                    className="flex items-center gap-1.5 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-smooth rounded-lg hover:bg-white/5"
                  >
                    <link.icon className="w-3.5 h-3.5" />
                    {link.label}
                  </button>
                ))}
          </nav>

          {/* CTA / Auth */}
          <div className="hidden md:flex items-center gap-3">
            {isLanding && (
              <button
                type="button"
                data-ocid="header.get_started_button"
                onClick={() => handleLandingScroll("#pricing")}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg bg-primary/20 border border-primary/40 text-primary hover:bg-primary/30 glow-blue transition-smooth"
              >
                <Zap className="w-3.5 h-3.5" />
                Get Started
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
            {!isLanding && (
              <button
                type="button"
                data-ocid="header.go_dashboard_button"
                onClick={() => handleAppNav("/dashboard")}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg bg-primary/20 border border-primary/40 text-primary hover:bg-primary/30 glow-blue transition-smooth"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                Dashboard
              </button>
            )}
            {isAuthenticated ? (
              <button
                type="button"
                data-ocid="header.logout_button"
                onClick={() => logout()}
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-smooth"
              >
                <LogOut className="w-3.5 h-3.5" />
                Logout
              </button>
            ) : (
              <button
                type="button"
                data-ocid="header.login_button"
                onClick={() => login()}
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 border border-white/10 hover:border-white/20 transition-smooth"
              >
                <LogIn className="w-3.5 h-3.5" />
                Login
              </button>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            data-ocid="header.mobile_menu_button"
            aria-label="Open navigation menu"
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-smooth"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              data-ocid="header.mobile_drawer"
              className="fixed top-0 right-0 bottom-0 z-50 w-72 glass-card rounded-none border-l border-white/10 flex flex-col p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-bold text-gradient-blue-purple">
                  NeuroTrade AI
                </span>
                <button
                  type="button"
                  data-ocid="header.mobile_close_button"
                  aria-label="Close navigation menu"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-smooth"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {isLanding
                  ? landingLinks.map((link) => (
                      <button
                        key={link.href}
                        type="button"
                        data-ocid={`header.mobile.${link.label.toLowerCase()}.link`}
                        onClick={() => handleLandingScroll(link.href)}
                        className="text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-smooth"
                      >
                        {link.label}
                      </button>
                    ))
                  : appLinks.map((link) => (
                      <button
                        key={link.href}
                        type="button"
                        data-ocid={`header.mobile.${link.label.toLowerCase()}.link`}
                        onClick={() => handleAppNav(link.href)}
                        className="flex items-center gap-2 text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-smooth"
                      >
                        <link.icon className="w-4 h-4" />
                        {link.label}
                      </button>
                    ))}
              </nav>
              <div className="mt-auto pt-6 flex flex-col gap-2">
                {isAuthenticated ? (
                  <button
                    type="button"
                    data-ocid="header.mobile.logout_button"
                    onClick={() => {
                      logout();
                      setMobileOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-lg border border-white/10 text-muted-foreground hover:bg-white/5 transition-smooth"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                ) : (
                  <button
                    type="button"
                    data-ocid="header.mobile.login_button"
                    onClick={() => {
                      login();
                      setMobileOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-lg bg-primary/20 border border-primary/40 text-primary hover:bg-primary/30 glow-blue transition-smooth"
                  >
                    <LogIn className="w-4 h-4" />
                    Login with Internet Identity
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
