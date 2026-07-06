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
import { IconArrow, IconGit, IconCheck } from "./components/Icons";

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
      { threshold: 0.1 },
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

    // Fallback: ensure nothing stays hidden if observer misses (e.g., reload + no scroll)
    const fallback = window.setTimeout(() => {
      elements.forEach((el) => {
        if (el.classList.contains("opacity-0")) {
          el.classList.add("animate-fade-in-up");
          el.classList.remove("opacity-0");
          observer.unobserve(el);
        }
      });
    }, 800);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);
};

export default function Home() {
  const SUPPORT_EMAIL = "fortuneifealadetan01@gmail.com";
  const [copied, setCopied] = useState(false);
  const [selectedPath, setSelectedPath] = useState<
    "monolith" | "microservices" | null
  >(null);
  const [npmDownloadsLastMonth, setNpmDownloadsLastMonth] = useState<
    number | null
  >(null);
  const [npmDownloadsTotal, setNpmDownloadsTotal] = useState<
    number | null
  >(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [burgerSpinning, setBurgerSpinning] = useState(false);
  const [burgerSpinKey, setBurgerSpinKey] = useState(0);

  useScrollAnimation();

  // Prefer staying at top on reload, but do not fight the user if they scroll during load
  useEffect(() => {
    type ScrollRestorationType = "auto" | "manual";
    let restored: ScrollRestorationType | undefined;
    if ("scrollRestoration" in window.history) {
      restored = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
    }

    // Only auto-scroll if we are already near the top (user hasn’t started scrolling)
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

  useEffect(() => {
    let cancelled = false;

    const loadMonthlyDownloads = async () => {
      try {
        const res = await fetch(
          "https://api.npmjs.org/downloads/point/last-month/@ifecodes/backend-template",
          {
            cache: "no-store",
          },
        );
        if (!res.ok) return;
        const data = await res.json();
        const downloads = data?.downloads;
        if (typeof downloads !== "number" || !Number.isFinite(downloads))
          return;
        if (!cancelled) setNpmDownloadsLastMonth(downloads);
      } catch {
        // ignore (optional UI)
      }
    };

    const loadTotalDownloads = async () => {
      try {
        const res = await fetch(
          "https://api.npmjs.org/downloads/point/2026-01-10:2099-12-31/@ifecodes/backend-template",
          {
            cache: "no-store",
          },
        );
        if (!res.ok) return;
        const data = await res.json();
        const downloads = data?.downloads;
        if (typeof downloads !== "number" || !Number.isFinite(downloads))
          return;
        if (!cancelled) setNpmDownloadsTotal(downloads);
      } catch {
        // ignore (optional UI)
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

  const toggleMobileMenu = () => {
    setBurgerSpinning(true);
    setBurgerSpinKey((k) => k + 1); // force reflow so animation restarts every click
    window.setTimeout(() => setBurgerSpinning(false), 600);
    setMobileMenuOpen((v) => !v);
  };

  const goToSectionFromMenu = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  useEffect(() => {
    const sectionIds = [
      "features",
      "cli-workflow",
      "docs",
      "examples",
      "faq",
      "support",
    ];

    const handleScroll = () => {
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
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute top-1/3 -right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/60 rounded flex items-center justify-center font-bold text-primary text-sm">
              B
            </div>
            <span className="font-semibold text-lg hidden sm:inline">
              Backend Template
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className={`text-sm transition cursor-pointer ${activeSection === "features" ? "text-accent" : "text-muted-foreground hover:text-foreground active:text-accent"}`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("cli-workflow")}
              className={`text-sm transition cursor-pointer ${activeSection === "cli-workflow" ? "text-accent" : "text-muted-foreground hover:text-foreground active:text-accent"}`}
            >
              CLI Workflow
            </button>
            <button
              onClick={() => scrollToSection("docs")}
              className={`hidden sm:inline text-sm transition cursor-pointer ${activeSection === "docs" ? "text-accent" : "text-muted-foreground hover:text-foreground active:text-accent"}`}
            >
              Docs
            </button>
            <button
              onClick={() => scrollToSection("examples")}
              className={`hidden sm:inline text-sm transition cursor-pointer ${activeSection === "examples" ? "text-accent" : "text-muted-foreground hover:text-foreground active:text-accent"}`}
            >
              Examples
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className={`hidden md:inline text-sm transition cursor-pointer ${activeSection === "faq" ? "text-accent" : "text-muted-foreground hover:text-foreground active:text-accent"}`}
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className={`hidden md:inline text-sm transition cursor-pointer ${activeSection === "support" ? "text-accent" : "text-muted-foreground hover:text-foreground active:text-accent"}`}
            >
              Support
            </button>
            <a
              href="https://github.com/ALADETAN-IFE/backend-template"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition"
            >
              GitHub
            </a>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card/40 hover:bg-card transition active:scale-95 cursor-pointer"
          >
            <span
              key={burgerSpinKey}
              className={`inline-flex ${burgerSpinning ? "animate-spin-once" : ""} cursor-pointer`}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12" />
                  <path d="M18 6l-12 12" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              )}
            </span>
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`sm:hidden overflow-hidden border-t border-border/50 transition-all duration-300 ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div
            className={`px-4 py-4 transition-transform duration-300 ${mobileMenuOpen ? "translate-y-0" : "-translate-y-2"}`}
          >
            <div className="flex flex-col gap-2">
              <button
                onClick={() => goToSectionFromMenu("features")}
                className={`text-left px-3 py-2 rounded-lg bg-card/30 hover:bg-card/60 border border-border/50 hover:border-accent/30 transition cursor-pointer ${activeSection === "features" ? "text-accent" : "text-muted-foreground"}`}
              >
                Features
              </button>
              <button
                onClick={() => goToSectionFromMenu("cli-workflow")}
                className={`text-left px-3 py-2 rounded-lg bg-card/30 hover:bg-card/60 border border-border/50 hover:border-accent/30 transition cursor-pointer ${activeSection === "cli-workflow" ? "text-accent" : "text-muted-foreground"}`}
              >
                CLI Workflow
              </button>
              <button
                onClick={() => goToSectionFromMenu("docs")}
                className={`text-left px-3 py-2 rounded-lg bg-card/30 hover:bg-card/60 border border-border/50 hover:border-accent/30 transition cursor-pointer ${activeSection === "docs" ? "text-accent" : "text-muted-foreground"}`}
              >
                Docs
              </button>
              <button
                onClick={() => goToSectionFromMenu("examples")}
                className={`text-left px-3 py-2 rounded-lg bg-card/30 hover:bg-card/60 border border-border/50 hover:border-accent/30 transition cursor-pointer ${activeSection === "examples" ? "text-accent" : "text-muted-foreground"}`}
              >
                Examples
              </button>
              <button
                onClick={() => goToSectionFromMenu("faq")}
                className={`text-left px-3 py-2 rounded-lg bg-card/30 hover:bg-card/60 border border-border/50 hover:border-accent/30 transition cursor-pointer ${activeSection === "faq" ? "text-accent" : "text-muted-foreground"}`}
              >
                FAQ
              </button>
              <button
                onClick={() => goToSectionFromMenu("support")}
                className={`text-left px-3 py-2 rounded-lg bg-card/30 hover:bg-card/60 border border-border/50 hover:border-accent/30 transition cursor-pointer ${activeSection === "support" ? "text-accent" : "text-muted-foreground"}`}
              >
                Support
              </button>
              <a
                href="https://github.com/ALADETAN-IFE/backend-template"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-card/30 hover:bg-card/60 border border-border/50 hover:border-accent/30 transition inline-flex items-center justify-between"
              >
                <span>GitHub</span>
                <span className="text-muted-foreground">➔</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection
        scrollToSection={scrollToSection}
        copyCommand={copyCommand}
        copied={copied}
        npmDownloadsLastMonth={npmDownloadsLastMonth}
        npmDownloadsTotal={npmDownloadsTotal}
      />

      {/* Why Section */}
      <WhySection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Workflow Section */}
      <WorkflowSection />

      {/* Docs Section */}
      <DocsSection scrollToSection={scrollToSection} />

      {/* Examples Section */}
      <ExamplesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Support Section */}
      <SupportSection supportEmail={SUPPORT_EMAIL} />

      {/* Architecture Comparison */}
      <section
        id="getting-started"
        className="py-24 px-4 bg-card/30 border-t border-border/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-pretty">
            Choose Your Path
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <button
              onClick={() => setSelectedPath("monolith")}
              className="border border-border rounded-lg p-8 space-y-6 hover:border-accent/50 hover:bg-secondary/30 transition-all duration-300 animate-fade-in-up text-left cursor-pointer group"
              style={{ animationDelay: "0s", animationFillMode: "both" }}
            >
              <h3 className="text-2xl font-bold group-hover:text-accent transition">
                Monolith
              </h3>
              <p className="text-muted-foreground">
                Perfect for MVPs and small to medium projects
              </p>
              <ul className="space-y-3">
                {[
                  "Single codebase",
                  "Easier to debug",
                  "Lower DevOps complexity",
                  "Shared database",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                      <IconCheck />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 text-xs text-accent group-hover:text-cyan-300 transition">
                View CLI prompts for this path →
              </div>
            </button>

            <button
              onClick={() => setSelectedPath("microservices")}
              className="border border-accent/50 bg-accent/5 rounded-lg p-8 space-y-6 hover:border-accent hover:bg-accent/10 transition-all duration-300 animate-fade-in-up text-left cursor-pointer group"
              style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            >
              <h3 className="text-2xl font-bold group-hover:text-cyan-300 transition">
                Microservices
              </h3>
              <p className="text-muted-foreground">
                For scaling and independent deployments
              </p>
              <ul className="space-y-3">
                {[
                  "Independent scaling",
                  "Service isolation",
                  "Tech flexibility",
                  "Team autonomy",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                      <IconCheck />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 text-xs text-muted-foreground border-t border-accent/20">
                <p>Includes Docker & PM2 for deployment</p>
              </div>
              <div className="text-xs text-accent group-hover:text-cyan-300 transition">
                View CLI prompts for this path →
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

      {/* Tech Stack */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-pretty">
            Modern Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Node.js",
              "Express.js",
              "TypeScript",
              "JavaScript",
              "MongoDB",
              "JWT",
              "Docker (microservices)",
              "PM2 (microservices)",
              "Helmet",
              "CORS",
              "Rate Limiting",
              "Morgan",
            ].map((tech, idx) => (
              <div
                key={tech}
                className="flex items-center justify-center p-4 bg-card/50 rounded-lg border border-border hover:border-accent/50 transition-all duration-300 opacity-0 hover:shadow-md hover:shadow-accent/10"
                data-scroll
                style={{ animationDelay: `${0.05 * idx}s` }}
              >
                <span className="font-semibold text-sm text-center">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-pretty">
              Ready to Build?
            </h2>
            <p className="text-lg text-muted-foreground">
              Open source, free, and made for developers by developers.
            </p>
          </div>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <button
              onClick={() => copyCommand()}
              className="cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200 hover:shadow-lg hover:shadow-accent/50 active:scale-95"
            >
              {copied ? "Copied!" : "Copy Command"}
              <IconArrow />
            </button>
            <a
              href="https://github.com/ALADETAN-IFE/backend-template"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-muted transition-all duration-200 border border-border hover:border-accent active:scale-95"
            >
              Star on GitHub
              <IconGit />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-3">Backend Template</h3>
              <p className="text-sm text-muted-foreground">
                Generate production-ready Express APIs instantly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://github.com/ALADETAN-IFE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition"
                  >
                    GitHub Profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ALADETAN-IFE/backend-template"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition"
                  >
                    Repository
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">License</h3>
              <p className="text-sm text-muted-foreground">
                MIT License • Open Source
              </p>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>
              Made with care by{" "}
              <a
                href="https://ifecodes.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline transition"
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
