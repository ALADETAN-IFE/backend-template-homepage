"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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

const IconArrow = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

const IconCode = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const IconZap = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const IconShield = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

const IconGit = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const IconCheck = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const IconClose = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const WorkflowModal = ({
  path,
  onClose,
}: {
  path: "monolith" | "microservices";
  onClose: () => void;
}) => {
  const workflows = {
    monolith: {
      title: "Monolith Workflow",
      prompts: [
        {
          q: "Project name",
          a: 'Defaults to "my-backend" (from args if provided)',
        },
        { q: "Language", a: "TypeScript (default) or JavaScript templates" },
        {
          q: "Description / author / keywords",
          a: "Optional; written to package.json + README",
        },
        { q: "Features", a: "Multiselect: CORS, Rate Limit, Helmet, Morgan" },
        { q: "Authentication?", a: "Toggle JWT + MongoDB on/off" },
        {
          q: "Password hasher (if auth)",
          a: "bcrypt on Windows by default, argon2 elsewhere",
        },
      ],
      result:
        "Single Express app with only the middleware and auth you selected.",
    },
    microservices: {
      title: "Microservices Workflow",
      prompts: [
        { q: "Workspace name", a: "From args (mono/micro) or prompt if new" },
        { q: "Language", a: "TypeScript (default) or JavaScript templates" },
        { q: "Mode", a: "Docker (compose + Dockerfiles) or PM2 (no Docker)" },
        { q: "Features", a: "Multiselect: CORS, Rate Limit, Helmet, Morgan" },
        { q: "Authentication?", a: "Toggle JWT + MongoDB on/off" },
        {
          q: "Password hasher (if auth)",
          a: "bcrypt on Windows by default, argon2 elsewhere",
        },
        {
          q: "Adding a service in an existing workspace?",
          a: "CLI detects /services → ask for service name + per-service features + auth toggle + hasher",
        },
      ],
      result:
        "Gateway + health (+ auth if enabled) with Docker or PM2, plus shared utils. Add services later by rerunning the CLI.",
    },
  };

  const workflow = workflows[path];

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-card border border-accent/30 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto space-y-6 p-8 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">{workflow.title}</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-accent transition"
          >
            <IconClose />
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-muted-foreground">CLI prompts you’ll see:</p>
          <div className="space-y-3">
            {workflow.prompts.map((item, idx) => (
              <div
                key={idx}
                className="bg-secondary/50 border border-border rounded-lg p-4 space-y-2"
              >
                <div className="flex items-start gap-3">
                  <div className="text-sm font-mono text-accent min-w-fit">
                    →
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.q}</p>
                    <p className="font-mono text-accent text-sm mt-1">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 space-y-2">
          <p className="text-sm font-semibold">Result:</p>
          <p className="text-sm text-muted-foreground">{workflow.result}</p>
        </div>

        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  // const SUPPORT_EMAIL = "ifecodes01@gmail.com";
  const SUPPORT_EMAIL = "fortuneifealadetan01@gmail.com";
  const [copied, setCopied] = useState(false);
  const [selectedPath, setSelectedPath] = useState<
    "monolith" | "microservices" | null
  >(null);
  const [npmDownloadsLastMonth, setNpmDownloadsLastMonth] = useState<
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

    const loadDownloads = async () => {
      try {
        const res = await fetch(
          "https://api.npmjs.org/downloads/point/last-month/@ifecodes/backend-template",
          {
            cache: "no-store",
          },
        );
        if (!res.ok) return;
        const data: unknown = await res.json();
        const downloads = (data as { downloads?: string })?.downloads;
        if (typeof downloads !== "number" || !Number.isFinite(downloads))
          return;
        if (!cancelled) setNpmDownloadsLastMonth(downloads);
      } catch {
        // ignore (optional UI)
      }
    };

    loadDownloads();

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
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card/40 hover:bg-card transition active:scale-95"
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
                <span className="text-muted-foreground">↗</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-pretty">
              Production APIs <br />
              <span className="bg-gradient-to-r from-accent via-accent to-cyan-400 bg-clip-text text-transparent">
                in seconds
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Generate a fully scaffolded Node.js backend. Choose your language,
              architecture, and features. Deploy immediately.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <button
              onClick={() => scrollToSection("getting-started")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200 hover:shadow-lg hover:shadow-accent/50 active:scale-95"
            >
              Get Started
              <IconArrow />
            </button>
            <a
              href="https://github.com/ALADETAN-IFE/backend-template"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-muted transition-all duration-200 border border-border hover:border-accent active:scale-95"
            >
              View on GitHub
              <IconGit />
            </a>
          </div>

          {/* Code Snippet */}
          <div
            className="pt-12 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <div className="bg-card/50 backdrop-blur rounded-lg border border-border/50 p-6 hover:border-accent/50 transition-all duration-300">
              <button onClick={copyCommand} className="w-full text-left group">
                <p className="text-xs text-muted-foreground mb-3 group-hover:text-accent transition">
                  {copied ? "✓ Copied!" : "$ Click to copy"}
                </p>
                <pre className="text-sm md:text-base text-accent font-mono overflow-x-auto">
                  npx @ifecodes/backend-template@latest my-project
                </pre>
              </button>
            </div>

            <div className="mt-4 bg-card/30 backdrop-blur rounded-lg border border-border/50 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-left">NPX CLI</p>
                <p className="text-xs text-muted-foreground">
                  {npmDownloadsLastMonth === null ? (
                    "Last 30 days downloads: loading…"
                  ) : (
                    <>
                      Last 30 days downloads:{" "}
                      <span className="text-foreground font-semibold">
                        {new Intl.NumberFormat().format(npmDownloadsLastMonth)}
                      </span>
                    </>
                  )}
                </p>
              </div>
              <a
                href="https://www.npmjs.com/package/@ifecodes/backend-template"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-accent/50 hover:bg-muted transition-all duration-200"
              >
                View on npm
                <IconArrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-pretty">
            Why Backend Template?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "⚡",
                title: "Save Hours",
                desc: "Start with production code, not boilerplate. Focus on business logic.",
              },
              {
                icon: "✓",
                title: "Best Practices",
                desc: "Built by experienced developers. Error handling, logging, security included.",
              },
              {
                icon: "📈",
                title: "Scalable",
                desc: "Monolith or microservices. Grow from MVP to production without rebuilding.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="space-y-4 opacity-0"
                data-scroll
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 px-4 bg-card/30 border-t border-border/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-pretty">
            Built for Developers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: IconCode,
                title: "Language Choice",
                desc: "TypeScript (default) or JavaScript templates",
              },
              {
                icon: IconShield,
                title: "Authentication (optional)",
                desc: "JWT + MongoDB when enabled; off means no DB wiring",
              },
              {
                icon: IconZap,
                title: "Zero Config CLI",
                desc: "Args support mono/micro; prompts only what is needed",
              },
              {
                icon: IconGit,
                title: "Microservices Ready",
                desc: "Gateway + health; Docker or PM2",
              },
              {
                icon: IconCode,
                title: "Middleware Picks",
                desc: "CORS, Helmet, Rate Limit, Morgan",
              },
              {
                icon: IconGit,
                title: "Add Services Later",
                desc: "Re-run CLI; gateway/routes update automatically",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="space-y-4 p-6 rounded-lg border border-border hover:border-accent/50 bg-card/50 hover:bg-card transition-all duration-300 opacity-0"
                  data-scroll
                  style={{ animationDelay: `${0.08 * idx}s` }}
                >
                  <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center text-accent group-hover:text-accent">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLI Workflow Deep-Dive */}
      <section
        id="cli-workflow"
        className="py-24 px-4 bg-card/30 border-t border-border/50"
      >
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <p className="inline-flex items-center gap-2 text-lg uppercase tracking-[0.3em] text-accent animate-fade-in">
              How the Backend Template CLI Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-pretty">
              Guided, production-ready scaffolding
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The CLI asks only what it needs, generates just what you chose,
              and keeps docs in sync with your answers—no bloat, no mismatched
              commands.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
            <div className="space-y-6">
              <div className="bg-card/60 border border-border rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">1) Start the CLI</h3>
                  <span className="text-xs text-muted-foreground">
                    Zero-config
                  </span>
                </div>
                <div className="bg-secondary/60 border border-border rounded-lg p-4 font-mono text-sm text-accent">
                  <p>npx @ifecodes/backend-template my-project</p>
                  <p className="text-muted-foreground mt-2">
                    Optional shortcuts:
                  </p>
                  <p>npx @ifecodes/backend-template my-project mono</p>
                  <p>npx @ifecodes/backend-template my-project micro</p>
                </div>
              </div>

              <div className="bg-card/60 border border-border rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold">
                  2) Interactive workflow
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Project name",
                      desc: "From args or prompt; skipped when adding a service inside /services",
                    },
                    {
                      title: "Language",
                      desc: "TypeScript (default) or JavaScript templates",
                    },
                    {
                      title: "Metadata (optional)",
                      desc: "Description, author, keywords → package.json & README",
                    },
                    {
                      title: "Architecture",
                      desc: "Monolith or Microservice (or inferred from args like mono/micro)",
                    },
                    {
                      title: "Mode (micro only)",
                      desc: "Docker (compose + Dockerfiles) or PM2 (no Docker)",
                    },
                    {
                      title: "Features",
                      desc: "CORS, Rate Limit, Helmet, Morgan (multiselect)",
                    },
                    {
                      title: "Authentication",
                      desc: "Toggle JWT + MongoDB; hasher prompt follows (bcrypt/argon2)",
                    },
                    {
                      title: "Adding a service?",
                      desc: "If /services exists, prompts for service name + per-service features + auth + hasher",
                    },
                  ].map((item, idx) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-lg border border-border/70 bg-secondary/40 opacity-0"
                      data-scroll
                      style={{ animationDelay: `${0.06 * idx}s` }}
                    >
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card/60 border border-border rounded-xl p-6 space-y-6">
                <h3 className="text-xl font-semibold">
                  3) Architecture-specific behavior
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
                    <p className="font-semibold">Monolith</p>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li>• Single Express app with versioned modules</li>
                      <li>• Optional auth & middleware</li>
                      <li>• Ready-to-run project</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
                    <p className="font-semibold">Microservice</p>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li>• API Gateway + services + shared utils</li>
                      <li>• Choose Docker (compose) or PM2</li>
                      <li>
                        • Health service always included; optional auth service
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-border bg-secondary/40">
                    <p className="font-semibold">Authentication (optional)</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      No auth → no DB wiring, no JWT logic, cleaner output.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Auth on → JWT auth, MongoDB wiring, auth
                      routes/controllers.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Hasher choice: bcrypt (Windows-friendly) or argon2
                      (macOS/Linux recommended). Only one is installed.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-secondary/40">
                    <p className="font-semibold">Features (pick any)</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      CORS • Helmet • Rate Limiter • Morgan logging
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Only selected middleware and dependencies are added.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/60 border border-border rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold">4) Dynamic outputs</h3>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  <li>
                    • README is generated to match language, architecture, auth,
                    and deploy mode.
                  </li>
                  <li>
                    • JS projects contain no TS files or configs; TS projects
                    include `tsconfig` and typed files.
                  </li>
                  <li>
                    • Docker mode adds `docker-compose.yml` and per-service
                    Dockerfiles; PM2 mode adds `pm2.config.js`.
                  </li>
                  <li>
                    • Re-running in a microservice workspace switches to “add
                    service” mode and wires the gateway automatically.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-accent/15 via-cyan-400/10 to-transparent border border-accent/40 rounded-xl p-6 shadow-lg shadow-accent/10">
                <h3 className="text-lg font-semibold mb-3">Summary Matrix</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { k: "JavaScript", v: "Pure JS output, no TS configs" },
                    { k: "TypeScript", v: "Full typings + tooling" },
                    { k: "Monolith", v: "Single Express app" },
                    { k: "Microservice", v: "Gateway + services" },
                    { k: "Auth OFF", v: "No DB, no JWT" },
                    { k: "Auth ON", v: "JWT + MongoDB" },
                    { k: "bcrypt", v: "Windows-friendly hashing" },
                    { k: "argon2", v: "Stronger hashing" },
                    { k: "Docker", v: "Containerized services" },
                    { k: "PM2", v: "Process-managed deploy" },
                    { k: "No features", v: "Minimal API" },
                    { k: "Any features", v: "Only chosen middleware" },
                  ].map((row, idx) => (
                    <div
                      key={row.k}
                      className="bg-card/70 border border-border rounded-lg p-3 opacity-0"
                      data-scroll
                      style={{ animationDelay: `${0.04 * idx}s` }}
                    >
                      <p className="font-semibold">{row.k}</p>
                      <p className="text-muted-foreground text-xs mt-1 leading-snug">
                        {row.v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Docs */}
      <section id="docs" className="py-24 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-pretty">Docs</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Everything you need: install command, options, and usage examples.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="bg-card/60 border border-border rounded-xl p-6 space-y-3">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Quick anchors
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => scrollToSection("docs-install")}
                    className="px-3 py-1.5 rounded-lg bg-secondary border border-border hover:border-accent/50 hover:bg-muted transition text-sm"
                  >
                    Install
                  </button>
                  <button
                    onClick={() => scrollToSection("docs-options")}
                    className="px-3 py-1.5 rounded-lg bg-secondary border border-border hover:border-accent/50 hover:bg-muted transition text-sm"
                  >
                    Options
                  </button>
                  <button
                    onClick={() => scrollToSection("examples")}
                    className="px-3 py-1.5 rounded-lg bg-secondary border border-border hover:border-accent/50 hover:bg-muted transition text-sm"
                  >
                    Examples
                  </button>
                </div>
              </div>

              <div
                id="docs-install"
                className="bg-card/60 border border-border rounded-xl p-6 space-y-3"
              >
                <h3 className="text-xl font-semibold">Install</h3>
                <p className="text-sm text-muted-foreground">
                  Run it instantly with npx (recommended).
                </p>
                <div className="bg-secondary/60 border border-border rounded-lg p-4 font-mono text-sm text-accent overflow-x-auto">
                  npx @ifecodes/backend-template@latest my-project
                </div>
              </div>

              <div
                id="docs-options"
                className="bg-card/60 border border-border rounded-xl p-6 space-y-3"
              >
                <h3 className="text-xl font-semibold">Options</h3>
                <p className="text-sm text-muted-foreground">
                  Shortcuts for architecture (the CLI can also infer this from
                  prompts).
                </p>
                <div className="bg-secondary/60 border border-border rounded-lg p-4 font-mono text-sm text-accent overflow-x-auto space-y-1">
                  <p>npx @ifecodes/backend-template my-project mono</p>
                  <p>npx @ifecodes/backend-template my-project micro</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-accent/15 via-cyan-400/10 to-transparent border border-accent/40 rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold">Full docs</h3>
                <p className="text-sm text-muted-foreground">
                  Read the complete README with all prompts, generated
                  structure, and notes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.npmjs.com/package/@ifecodes/backend-template?activeTab=readme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200 active:scale-95"
                  >
                    Read README
                    <IconArrow />
                  </a>
                  <a
                    href="https://www.npmjs.com/package/@ifecodes/backend-template"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-muted transition-all duration-200 border border-border hover:border-accent active:scale-95"
                  >
                    npm package
                    <IconArrow />
                  </a>
                </div>
              </div>

              <div className="bg-card/60 border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold">Requirements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  <li>• Works on Windows, macOS, and Linux.</li>
                  <li>
                    • MongoDB is only required when Authentication is enabled.
                  </li>
                  <li>
                    • Docker is only required when you choose Docker mode for
                    microservices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section
        id="examples"
        className="py-24 px-4 bg-card/30 border-t border-border/50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-pretty">
              Examples
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Example layouts produced by the CLI when authentication is
              disabled (no auth).
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-card/60 border border-border rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  Microservice (no auth)
                </h3>
                <span className="text-xs text-muted-foreground">Workspace</span>
              </div>
              <div className="bg-secondary/60 border border-border rounded-lg p-4 font-mono text-xs text-accent overflow-x-auto whitespace-pre">
                {`my-workspace/
  services/
    gateway/
    health-service/
  shared/
    config/
    utils/
  package.json
  README.md
  .env.example`}
              </div>
              <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                <p>Notes:</p>
                <ul className="space-y-1">
                  <li>
                    • Docker mode adds{" "}
                    <span className="font-mono text-foreground">
                      docker-compose.yml
                    </span>{" "}
                    at the repo root.
                  </li>
                  <li>
                    • PM2 (nodocker) adds{" "}
                    <span className="font-mono text-foreground">
                      pm2.config.js
                    </span>{" "}
                    at the repo root.
                  </li>
                  <li>
                    • If auth is enabled,{" "}
                    <span className="font-mono text-foreground">
                      auth-service/
                    </span>{" "}
                    appears under{" "}
                    <span className="font-mono text-foreground">services/</span>
                    .
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card/60 border border-border rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">
                    Microservice (Docker mode)
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    docker-compose
                  </span>
                </div>
                <div className="bg-secondary/60 border border-border rounded-lg p-4 font-mono text-xs text-accent overflow-x-auto whitespace-pre">
                  {`my-workspace/
  services/
    gateway/
    health-service/
  shared/
    config/
    utils/
  docker-compose.yml
  package.json
  README.md
  .env.example`}
                </div>
              </div>

              <div className="bg-card/60 border border-border rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">
                    Microservice (PM2 mode)
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    nodocker
                  </span>
                </div>
                <div className="bg-secondary/60 border border-border rounded-lg p-4 font-mono text-xs text-accent overflow-x-auto whitespace-pre">
                  {`my-workspace/
  services/
    gateway/
    health-service/
  shared/
    config/
    utils/
  pm2.config.js
  package.json
  README.md
  .env.example`}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-card/60 border border-border rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Monolith (no auth)</h3>
              <span className="text-xs text-muted-foreground">Single repo</span>
            </div>
            <div className="bg-secondary/60 border border-border rounded-lg p-4 font-mono text-xs text-accent overflow-x-auto whitespace-pre">
              {`my-monolith-app/
  src/
    config/
    middlewares/
    modules/
      v1/
        health/
    utils/
    app.ts (or app.js)
    routes.ts (or routes.js)
    server.ts (or server.js)
  package.json
  README.md
  .env.example`}
            </div>
            <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
              <p>Notes:</p>
              <ul className="space-y-1">
                <li>
                  • If auth is enabled, the monolith includes{" "}
                  <span className="font-mono text-foreground">
                    src/modules/v1/auth/
                  </span>{" "}
                  and{" "}
                  <span className="font-mono text-foreground">src/models/</span>
                  .
                </li>
                <li>
                  • Tooling (ESLint, Prettier, Husky) is configured at the
                  repository root.
                </li>
                <li>
                  • The root{" "}
                  <span className="font-mono text-foreground">README.md</span>{" "}
                  is generated and updated when you add services in microservice
                  mode.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-pretty">FAQ</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Common questions about platform support, requirements, and how the
              generator behaves.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Does it work on Windows?",
                a: "Yes. The CLI is designed to work on Windows, macOS, and Linux. For password hashing, bcrypt is the most Windows-friendly default.",
              },
              {
                q: "What Node.js version do I need?",
                a: "Use a modern LTS Node.js version. If you run into any install/runtime issues, update Node first (LTS) before anything else.",
              },
              {
                q: "Do I need MongoDB?",
                a: "Only if you enable Authentication. If auth is OFF, the output stays clean: no DB wiring, no JWT logic, no auth service.",
              },
              {
                q: "Docker vs PM2 — when should I choose each?",
                a: "Docker mode generates compose + Dockerfiles for containerized services. PM2 mode skips Docker and sets up process-managed deployment. Choose based on your deployment environment.",
              },
              {
                q: "How does “add service” work in microservices?",
                a: "When the CLI detects an existing microservice workspace (a /services folder), it switches into add-service mode: it prompts for a new service name and optional features/auth, then updates gateway routing automatically.",
              },
              {
                q: "Can I generate JavaScript instead of TypeScript?",
                a: "Yes. You can pick TypeScript (default) or JavaScript. The output matches your selection (no TS config in JS projects).",
              },
              {
                q: "What middleware/features can I include?",
                a: "You can select middleware like CORS, Helmet, Rate Limiting, and Morgan. Only what you select gets added to dependencies and wired into the app.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group bg-card/60 border border-border rounded-xl p-5"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="font-semibold">{item.q}</span>
                  <span className="text-muted-foreground group-open:text-accent transition">
                    +
                  </span>
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section
        id="support"
        className="py-24 px-4 bg-card/30 border-t border-border/50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-pretty">
              Need help?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Get support, report bugs, or request features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://github.com/ALADETAN-IFE/backend-template/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-border bg-card/60 hover:border-accent/50 transition-all duration-300"
            >
              <p className="font-semibold">Open an Issue</p>
              <p className="text-sm text-muted-foreground mt-2">
                Bug reports and feature requests.
              </p>
            </a>
            <Link
              href="/discussions"
              className="p-6 rounded-xl border border-border bg-card/60 hover:border-accent/50 transition-all duration-300"
            >
              <p className="font-semibold">Start a Discussion</p>
              <p className="text-sm text-muted-foreground mt-2">
                Questions, ideas, and community help.
              </p>
            </Link>
            <div className="p-6 rounded-xl border border-border bg-card/60">
              <p className="font-semibold">Email</p>
              <p className="text-sm text-muted-foreground mt-2">
                {SUPPORT_EMAIL ? (
                  <a
                    className="text-accent hover:underline"
                    href={`mailto:${SUPPORT_EMAIL}`}
                  >
                    {SUPPORT_EMAIL}
                  </a>
                ) : (
                  "Add your support email in the code (SUPPORT_EMAIL) to enable this link."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

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
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
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
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200 hover:shadow-lg hover:shadow-accent/50 active:scale-95"
            >
              {copied ? "Copied!" : "Copy Command"}
              <IconArrow />
            </button>
            <a
              // href="https://github.com/ALADETAN-IFE/backend-template" 
              href="https://github.com/ALADETAN-IFE/backend-template-homepage"
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
                {/* <li>
                  <a
                    href="https://github.com/ALADETAN-IFE/backend-template"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition"
                  >
                    Repository
                  </a>
                </li> */}
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
                // href="https://github.com/ALADETAN-IFE"
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
