import React from "react";

const prompts = [
  {
    title: "Project name",
    desc: "From command args or dynamic prompt; skipped when adding a service inside /services.",
  },
  {
    title: "Language",
    desc: "TypeScript (default) or JavaScript code templates.",
  },
  {
    title: "Metadata (optional)",
    desc: "Description, author, keywords → auto-configured in package.json & README.",
  },
  {
    title: "Project Scope",
    desc: "Team or Individual. Team projects generate CI/CD workflows, PR templates, and CONTRIBUTING.md. Individual keeps it minimal.",
  },
  {
    title: "Architecture",
    desc: "Monolith or Microservice (can be pre-selected via mono/micro args).",
  },
  {
    title: "Mode (micro only)",
    desc: "Docker (compose + Dockerfiles) or PM2 (process-managed deployments).",
  },
  {
    title: "Features",
    desc: "CORS, Rate Limiting, Helmet, Morgan (multiselect with zero dependencies if skipped).",
  },
  {
    title: "Authentication",
    desc: "Toggle JWT + MongoDB; secure password hashing setup follows.",
  },
  {
    title: "Request validation",
    desc: "Toggle request validation with Zod schemas to validate input payloads dynamically.",
  },
  {
    title: "Adding a service?",
    desc: "If a /services folder exists, automatically runs in add-service mode to extend the gateway config.",
  },
];

const matrixItems = [
  { k: "JavaScript", v: "Pure JS output, no TS compilation layer" },
  { k: "TypeScript", v: "Full type safety, types, and compiler configs" },
  { k: "Monolith", v: "Standard single Express application" },
  { k: "Microservice", v: "API Gateway + distributed services" },
  { k: "Auth OFF", v: "No database wiring, clean scaffolding" },
  { k: "Auth ON", v: "JWT validation, MongoDB connection setup" },
  { k: "bcrypt", v: "Windows-friendly password hashing" },
  { k: "argon2", v: "High-performance hashing for Unix/macOS" },
  { k: "Docker", v: "Container orchestration via docker-compose" },
  { k: "PM2", v: "Multi-process PM2 config setups" },
  { k: "Zod ON", v: "Automatic request schemas & validate middlewares" },
  { k: "Zod OFF", v: "Traditional manual route handler validation" },
];

export default function WorkflowSection() {
  return (
    <section id="cli-workflow" className="py-24 px-4 border-t border-white/[0.04] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
            How it Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Guided, production-ready scaffolding
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            The CLI asks only what it needs, generates just what you chose, and keeps docs in sync with your options. No bloat, no unused dependencies.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Steps */}
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1 */}
            <div className="glass rounded-2xl p-6 md:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold tracking-tight">1) Start the CLI</h3>
                <span className="text-xs text-accent px-2 py-0.5 rounded-full bg-accent/10 font-mono">Zero-config</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Run the initializer without installing it globally. Optionally pass architecture overrides.
              </p>
              <div className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-sm text-accent space-y-2 overflow-x-auto">
                <p className="text-foreground/40"># Run interactive setup</p>
                <p>npx @ifecodes/backend-template@latest my-project</p>
                <p className="text-foreground/40 mt-4"># Or pre-select architecture</p>
                <p>npx @ifecodes/backend-template@latest my-project mono</p>
                <p>npx @ifecodes/backend-template@latest my-project micro</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="glass rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold tracking-tight">2) Interactive Setup</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prompts.map((item, idx) => (
                  <div
                    key={item.title}
                    data-scroll
                    className="p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 opacity-0"
                    style={{ animationDelay: `${0.04 * idx}s` }}
                  >
                    <p className="font-semibold text-sm tracking-tight">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div className="glass rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold tracking-tight">3) Architecture Specifics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-accent/10 bg-accent/[0.02] space-y-2">
                  <p className="font-bold text-sm text-accent tracking-tight">Monolith Layout</p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    <li>• Single Express instance with modular versioning</li>
                    <li>• Clean controllers, middlewares, routes structure</li>
                    <li>• Zero dependency overhead for skipped features</li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl border border-accent/10 bg-accent/[0.02] space-y-2">
                  <p className="font-bold text-sm text-accent tracking-tight">Microservices Layout</p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    <li>• API Gateway + Health service included automatically</li>
                    <li>• Docker containers or PM2 process definitions</li>
                    <li>• Shared configuration and common utils modules</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="glass rounded-2xl p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-bold tracking-tight">4) Smart Outputs</h3>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5">•</span>
                  <span><strong>README.md</strong> is updated on-the-fly to document the specific selections you made.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5">•</span>
                  <span><strong>Workspace configs</strong> detect existing monorepos and dynamically wire routes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5">•</span>
                  <span><strong>Environment variables</strong> are verified at launch to prevent server startups without keys.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sticky Sidebar Matrix */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/[0.08] via-purple-500/[0.04] to-transparent border border-accent/20 space-y-4 shadow-lg shadow-accent/5">
              <h3 className="text-base font-bold tracking-wider uppercase text-accent/90">Summary Matrix</h3>
              <p className="text-xs text-muted-foreground">
                All features map to optimized, isolated code paths without global pollution.
              </p>
              <div className="grid grid-cols-1 gap-2.5 pt-2">
                {matrixItems.map((row, idx) => (
                  <div
                    key={row.k}
                    data-scroll
                    className="glass p-3.5 rounded-xl hover:border-accent/30 transition-all duration-300 opacity-0"
                    style={{ animationDelay: `${0.03 * idx}s` }}
                  >
                    <p className="font-semibold text-xs tracking-tight">{row.k}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{row.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
