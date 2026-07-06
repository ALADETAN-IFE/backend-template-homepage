import React from "react";

interface DocsSectionProps {
  scrollToSection: (id: string) => void;
}

export default function DocsSection({ scrollToSection }: DocsSectionProps) {
  return (
    <section id="docs" className="py-24 px-4 border-t border-white/[0.04] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Docs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Everything you need to know to install, configure, and scale your backend workspace.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Quick Anchors */}
            <div className="glass rounded-2xl p-6 space-y-4 shadow-lg shadow-black/10">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Quick Anchors</p>
              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={() => scrollToSection("docs-install")}
                  className="px-4 py-2 rounded-xl glass hover:border-accent/30 text-xs font-semibold tracking-wide transition cursor-pointer"
                >
                  Install
                </button>
                <button
                  onClick={() => scrollToSection("docs-options")}
                  className="px-4 py-2 rounded-xl glass hover:border-accent/30 text-xs font-semibold tracking-wide transition cursor-pointer"
                >
                  Options
                </button>
                <button
                  onClick={() => scrollToSection("examples")}
                  className="px-4 py-2 rounded-xl glass hover:border-accent/30 text-xs font-semibold tracking-wide transition cursor-pointer"
                >
                  Examples
                </button>
              </div>
            </div>

            {/* Install */}
            <div id="docs-install" className="glass rounded-2xl p-6 md:p-8 space-y-4 shadow-lg shadow-black/15">
              <h3 className="text-xl font-bold tracking-tight">Install</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Initialize your codebase directly with <code className="text-accent bg-accent/5 px-1.5 py-0.5 rounded font-mono text-xs">npx</code>. No global installation required.
              </p>
              <div className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-sm text-accent overflow-x-auto">
                npx @ifecodes/backend-template@latest my-project
              </div>
            </div>

            {/* Options */}
            <div id="docs-options" className="glass rounded-2xl p-6 md:p-8 space-y-4 shadow-lg shadow-black/15">
              <h3 className="text-xl font-bold tracking-tight">CLI Shortcuts</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Skip prompts by predefining your architecture in the arguments:
              </p>
              <div className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-sm text-accent space-y-2 overflow-x-auto">
                <p className="text-foreground/30"># Predefine as monolith project</p>
                <p>npx @ifecodes/backend-template@latest my-project mono</p>
                <p className="text-foreground/30 mt-4"># Predefine as microservice project</p>
                <p>npx @ifecodes/backend-template@latest my-project micro</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Full Docs Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-accent/[0.08] via-blue-500/[0.04] to-transparent border border-accent/20 space-y-5 shadow-lg shadow-accent/5">
              <h3 className="text-xl font-bold tracking-tight">Full Documentation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Read the comprehensive documentation containing detailed descriptions of interactive prompts, generated project structure, database wiring guides, and environment setups.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://www.npmjs.com/package/@ifecodes/backend-template?activeTab=readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-accent text-[#09090b] font-semibold rounded-xl hover:bg-cyan-300 transition-all duration-200 active:scale-95 text-sm"
                >
                  Read README
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </a>
                <a
                  href="https://www.npmjs.com/package/@ifecodes/backend-template"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 glass font-semibold rounded-xl hover:border-accent/30 transition-all duration-200 active:scale-95 text-sm"
                >
                  npm Package
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </a>
              </div>
            </div>

            {/* Requirements */}
            <div className="glass rounded-2xl p-6 md:p-8 space-y-4 shadow-lg shadow-black/15">
              <h3 className="text-xl font-bold tracking-tight">Requirements</h3>
              <ul className="space-y-3.5 text-sm text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Supports all major environments: <strong>macOS, Linux, and Windows</strong>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5">•</span>
                  <span><strong>MongoDB</strong> is only required if you choose to enable the optional JWT Authentication layer.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5">•</span>
                  <span><strong>Docker</strong> is only required for local service orchestration in Microservice Docker mode.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
