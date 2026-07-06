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

        return (
          <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
            {/* ...existing navigation and background code... */}

            {/* Hero Section */}
            <HeroSection />

            {/* Why Section */}
            <WhySection />

            {/* Features Section */}
            <FeaturesSection />

            {/* Workflow Section */}
            <WorkflowSection />

            {/* Docs Section */}
            <DocsSection />

            {/* Examples Section */}
            <ExamplesSection />

            {/* FAQ Section */}
            <FAQSection />

            {/* Support Section */}
            <SupportSection />
          </div>
        );
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
              <div className="bg-linear-to-br from-accent/15 via-cyan-400/10 to-transparent border border-accent/40 rounded-xl p-6 space-y-4">
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
