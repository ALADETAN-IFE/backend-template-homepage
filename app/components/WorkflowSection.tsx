// WorkflowSection.tsx
import React from "react";


const WorkflowSection = () => {
  return (
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
                    title: "Project Scope",
                    desc: "Team or Individual. Team projects generate CI/CD, PR template, and contributing guide. Individual projects skip these files.",
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
            <div className="bg-linear-to-br from-accent/15 via-cyan-400/10 to-transparent border border-accent/40 rounded-xl p-6 shadow-lg shadow-accent/10">
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
  );
};

export default WorkflowSection;
