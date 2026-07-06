import React from "react";
import { IconArrow } from "./Icons";

interface DocsSectionProps {
  scrollToSection: (id: string) => void;
}

const DocsSection: React.FC<DocsSectionProps> = ({ scrollToSection }) => {
  return (
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
                  className="px-3 py-1.5 rounded-lg bg-secondary border border-border hover:border-accent/50 hover:bg-muted transition text-sm cursor-pointer"
                >
                  Install
                </button>
                <button
                  onClick={() => scrollToSection("docs-options")}
                  className="px-3 py-1.5 rounded-lg bg-secondary border border-border hover:border-accent/50 hover:bg-muted transition text-sm cursor-pointer"
                >
                  Options
                </button>
                <button
                  onClick={() => scrollToSection("examples")}
                  className="px-3 py-1.5 rounded-lg bg-secondary border border-border hover:border-accent/50 hover:bg-muted transition text-sm cursor-pointer"
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
  );
};

export default DocsSection;
