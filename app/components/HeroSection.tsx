import React from "react";
import { IconArrow, IconGit } from "./Icons";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
  copyCommand: () => void;
  copied: boolean;
  npmDownloadsLastMonth: number | null;
  npmDownloadsTotal: number | null;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToSection,
  copyCommand,
  copied,
  npmDownloadsLastMonth,
  npmDownloadsTotal,
}) => {
  return (
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
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200 hover:shadow-lg hover:shadow-accent/50 active:scale-95 cursor-pointer"
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
            <button onClick={copyCommand} className="w-full text-left group cursor-pointer">
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
              <p className="text-xs text-muted-foreground text-left">
                {npmDownloadsLastMonth === null ? (
                  "Last 30 days downloads: loading..."
                ) : (
                  <>
                    Last 30 days downloads:{" "}
                    <span className="text-foreground font-semibold">
                      {new Intl.NumberFormat().format(npmDownloadsLastMonth)}
                    </span>
                  </>
                )}
              </p>
              <p className="text-xs text-muted-foreground mt-2 text-left">
                {npmDownloadsTotal === null ? (
                  "Total downloads: loading..."
                ) : (
                  <>
                    Total downloads:{" "}
                    <span className="text-foreground font-semibold">
                      {new Intl.NumberFormat().format(npmDownloadsTotal)}
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
  );
};

export default HeroSection;
