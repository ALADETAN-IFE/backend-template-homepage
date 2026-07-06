import React from "react";

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ZapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const GitIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M6 21V9a9 9 0 009 9" />
  </svg>
);

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const LayersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const BookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const TerminalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const features = [
  {
    Icon: CodeIcon,
    title: "Language Choice",
    desc: "TypeScript (default) or JavaScript templates",
  },
  {
    Icon: ShieldIcon,
    title: "Authentication",
    desc: "JWT + MongoDB when enabled; off means zero DB wiring",
  },
  {
    Icon: ZapIcon,
    title: "Zero Config CLI",
    desc: "Args support mono/micro; prompts only what is needed",
  },
  {
    Icon: GitIcon,
    title: "Microservices Ready",
    desc: "Gateway + health service; Docker or PM2 deployment",
  },
  {
    Icon: CheckIcon,
    title: "Request Validation",
    desc: "Optional Zod schemas to validate and secure input payloads",
  },
  {
    Icon: LayersIcon,
    title: "Add Services Later",
    desc: "Re-run CLI; gateway and routes update automatically",
  },
  {
    Icon: BookIcon,
    title: "Interactive API Docs",
    desc: "Auto-generated interactive Swagger UI (/api-docs) out of the box",
  },
  {
    Icon: TerminalIcon,
    title: "Team Workflows",
    desc: "Auto-generates GitHub actions, PR templates, and CONTRIBUTING.md",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
          Built for Developers
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg">
          Every feature is designed to remove friction and let you focus on what matters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              data-scroll
              className="glass opacity-0 rounded-2xl p-8 border border-border/50 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-5">
                <feature.Icon />
              </div>
              <h3 className="text-lg font-semibold mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
