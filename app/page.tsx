"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import WhySection from "./components/WhySection";
import FeaturesSection from "./components/FeaturesSection";
import WorkflowSection from "./components/WorkflowSection";
import DocsSection from "./components/DocsSection";
import ExamplesSection from "./components/ExamplesSection";
import FAQSection from "./components/FAQSection";
import SupportSection from "./components/SupportSection";
import WorkflowModal from "./components/WorkflowModal";

/* ─── Scroll-triggered fade-in ─── */
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    const elements = Array.from(document.querySelectorAll("[data-scroll]"));

    elements.forEach((el) => {
      observer.observe(el);
      const rect = el.getBoundingClientRect();
      const alreadyVisible =
        rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
      if (alreadyVisible) {
        el.classList.add("animate-fade-in-up");
        el.classList.remove("opacity-0");
        observer.unobserve(el);
      }
    });

    const fallback = window.setTimeout(() => {
      elements.forEach((el) => {
        if (el.classList.contains("opacity-0")) {
          el.classList.add("animate-fade-in-up");
          el.classList.remove("opacity-0");
          observer.unobserve(el);
        }
      });
    }, 1200);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);
};

/* ─── Nav links ─── */
const NAV_ITEMS = [
  { id: "features", label: "Features" },
  { id: "cli-workflow", label: "Workflow" },
  { id: "docs", label: "Docs" },
  { id: "examples", label: "Examples" },
  { id: "faq", label: "FAQ" },
  { id: "support", label: "Support" },
] as const;

export default function Home() {
  const SUPPORT_EMAIL = "fortuneifealadetan01@gmail.com";
  const [copied, setCopied] = useState(false);
  const [selectedPath, setSelectedPath] = useState<
    "monolith" | "microservices" | null
  >(null);
  const [npmDownloadsLastMonth, setNpmDownloadsLastMonth] = useState<
    number | null
  >(null);
  const [npmDownloadsTotal, setNpmDownloadsTotal] = useState<number | null>(
    null,
  );
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useScrollAnimation();

  /* Scroll restoration */
  useEffect(() => {
    type ScrollRestorationType = "auto" | "manual";
    let restored: ScrollRestorationType | undefined;
    if ("scrollRestoration" in window.history) {
      restored = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
    }
    const raf = window.requestAnimationFrame(() => {
      if (window.scrollY <= 8) {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });
    return () => {
      window.cancelAnimationFrame(raf);
      if (restored !== undefined) {
        window.history.scrollRestoration = restored;
      }
    };
  }, []);

  /* NPM download stats */
  useEffect(() => {
    let cancelled = false;

    const loadMonthlyDownloads = async () => {
      try {
        const res = await fetch(
          "https://api.npmjs.org/downloads/point/last-month/@ifecodes/backend-template",
          { cache: "no-store" },
        );
        if (!res.ok) return;
        const data = await res.json();
        const downloads = data?.downloads;
        if (typeof downloads !== "number" || !Number.isFinite(downloads))
          return;
        if (!cancelled) setNpmDownloadsLastMonth(downloads);
      } catch {
        /* optional UI */
      }
    };

    const loadTotalDownloads = async () => {
      try {
        const res = await fetch(
          "https://api.npmjs.org/downloads/point/2026-01-10:2099-12-31/@ifecodes/backend-template",
          { cache: "no-store" },
        );
        if (!res.ok) return;
        const data = await res.json();
        const downloads = data?.downloads;
        if (typeof downloads !== "number" || !Number.isFinite(downloads))
          return;
        if (!cancelled) setNpmDownloadsTotal(downloads);
      } catch {
        /* optional UI */
      }
    };

    loadMonthlyDownloads();
    loadTotalDownloads();

    return () => {
      cancelled = true;
    };
  }, []);

  const copyCommand = () => {
    navigator.clipboard.writeText(
      "npx @ifecodes/backend-template@latest my-project",
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToSectionFromMenu = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  /* Active section tracking */
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((i) => i.id);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const viewportMarker = window.innerHeight * 0.25;
        if (rect.top <= viewportMarker && rect.bottom >= viewportMarker) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* ─── Ambient glow blobs ─── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/[0.07] blur-[120px] animate-float" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-purple-500/[0.05] blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[120px] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* ─── Navigation ─── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-purple-500 rounded-lg flex items-center justify-center font-bold text-[#09090b] text-sm shadow-lg shadow-accent/20">
              B
            </div>
            <span className="font-semibold text-lg hidden sm:inline tracking-tight">
              Backend Template
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="w-px h-5 bg-white/10 mx-2" />
            <a
              href="https://github.com/ALADETAN-IFE/backend-template"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] transition active:scale-95 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12" />
                <path d="M18 6l-12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden border-t border-white/[0.04] transition-all duration-300 ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-3 bg-background/90 backdrop-blur-xl">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goToSectionFromMenu(item.id)}
                  className={`text-left px-4 py-2.5 rounded-lg transition cursor-pointer ${
                    activeSection === item.id
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-white/[0.06] my-1" />
              <a
                href="https://github.com/ALADETAN-IFE/backend-template"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition"
              >
                <span>GitHub</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── Sections ─── */}
      <HeroSection
        scrollToSection={scrollToSection}
        copyCommand={copyCommand}
        copied={copied}
        npmDownloadsLastMonth={npmDownloadsLastMonth}
        npmDownloadsTotal={npmDownloadsTotal}
      />

      <WhySection />

      <FeaturesSection />

      <WorkflowSection />

      <DocsSection scrollToSection={scrollToSection} />

      <ExamplesSection />

      <FAQSection />

      <SupportSection supportEmail={SUPPORT_EMAIL} />

      {/* ─── Architecture Comparison ─── */}
      <section
        id="getting-started"
        className="py-24 px-4 border-t border-white/[0.04]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            Choose Your Path
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Monolith */}
            <button
              onClick={() => setSelectedPath("monolith")}
              className="glass text-left p-8 rounded-2xl space-y-6 hover:border-accent/30 transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <div>
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                  Monolith
                </h3>
                <p className="text-muted-foreground mt-2">
                  Perfect for MVPs and small to medium projects
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Single codebase",
                  "Easier to debug",
                  "Lower DevOps complexity",
                  "Shared database",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-xs text-accent group-hover:text-cyan-300 transition flex items-center gap-1">
                View CLI prompts for this path
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </div>
            </button>

            {/* Microservices */}
            <button
              onClick={() => setSelectedPath("microservices")}
              className="text-left p-8 rounded-2xl space-y-6 transition-all duration-300 group cursor-pointer hover:-translate-y-1 bg-gradient-to-br from-accent/[0.08] to-purple-500/[0.04] border border-accent/20 hover:border-accent/40 backdrop-blur-sm"
            >
              <div>
                <h3 className="text-2xl font-bold group-hover:text-cyan-300 transition-colors">
                  Microservices
                </h3>
                <p className="text-muted-foreground mt-2">
                  For scaling and independent deployments
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Independent scaling",
                  "Service isolation",
                  "Tech flexibility",
                  "Team autonomy",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-accent/10">
                <p className="text-xs text-muted-foreground">
                  Includes Docker & PM2 for deployment
                </p>
              </div>
              <div className="text-xs text-accent group-hover:text-cyan-300 transition flex items-center gap-1">
                View CLI prompts for this path
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {selectedPath && (
        <WorkflowModal
          path={selectedPath}
          onClose={() => setSelectedPath(null)}
        />
      )}

      {/* ─── Tech Stack ─── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            Modern Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "Node.js",
              "Express.js",
              "TypeScript",
              "JavaScript",
              "MongoDB",
              "JWT",
              "Zod",
              "Docker",
              "PM2",
              "Helmet",
              "CORS",
              "Rate Limiting",
              "Morgan",
              "Swagger UI",
            ].map((tech, idx) => (
              <div
                key={tech}
                className="glass flex items-center justify-center p-4 rounded-xl hover:border-accent/30 transition-all duration-300 opacity-0 hover:-translate-y-0.5"
                data-scroll
                style={{ animationDelay: `${0.04 * idx}s` }}
              >
                <span className="font-medium text-sm text-center">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-24 px-4 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Build?
            </h2>
            <p className="text-lg text-muted-foreground">
              Open source, free, and made for developers by developers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => copyCommand()}
              className="cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-[#09090b] font-semibold rounded-xl hover:bg-cyan-300 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]"
            >
              {copied ? "Copied!" : "Copy Command"}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </button>
            <a
              href="https://github.com/ALADETAN-IFE/backend-template"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 glass font-semibold rounded-xl hover:border-accent/30 transition-all duration-200 active:scale-[0.98]"
            >
              Star on GitHub
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/[0.04] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 bg-gradient-to-br from-accent to-purple-500 rounded-lg flex items-center justify-center font-bold text-[#09090b] text-xs">
                  B
                </div>
                <h3 className="font-semibold">Backend Template</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Generate production-ready Express APIs instantly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/ALADETAN-IFE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition"
                  >
                    GitHub Profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ALADETAN-IFE/backend-template"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition"
                  >
                    Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/@ifecodes/backend-template"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition"
                  >
                    npm Package
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                License
              </h3>
              <p className="text-sm text-muted-foreground">
                MIT License · Open Source
              </p>
            </div>
          </div>
          <div className="border-t border-white/[0.04] pt-8 text-center text-sm text-muted-foreground">
            <p>
              Made with care by{" "}
              <a
                href="https://ifecodes.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-cyan-300 transition"
              >
                IfeCodes
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
