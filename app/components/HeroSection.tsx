import React from "react";
import { IconArrow } from "./Icons";

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
    <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_70%)] pointer-events-none" />
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 backdrop-blur text-xs font-semibold text-accent animate-fade-in tracking-wide shadow-[0_0_15px_rgba(0,217,255,0.05)]">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Open Source CLI Tool
        </div>

        {/* Heading */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] text-pretty">
            Production APIs <br />
            <span className="gradient-text">in seconds</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Generate a fully scaffolded, production-ready Node.js backend. Choose your language, architecture, and features. Ship immediately.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <button
            onClick={() => scrollToSection("getting-started")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-[#09090b] font-semibold rounded-xl hover:bg-cyan-300 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 active:scale-95 cursor-pointer"
          >
            Get Started
            <IconArrow />
          </button>
          <a
            href="https://github.com/ALADETAN-IFE/backend-template"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 glass font-semibold rounded-xl hover:border-accent/30 transition-all duration-200 active:scale-95"
          >
            View on GitHub
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Code Snippet Box */}
        <div className="pt-8 max-w-2xl mx-auto space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="glass rounded-2xl p-5 hover:border-accent/30 transition-all duration-300 group shadow-lg shadow-black/20">
            <button onClick={copyCommand} className="w-full text-left group cursor-pointer">
              <div className="flex justify-between items-center mb-2.5 text-xs text-muted-foreground">
                <span className="font-mono">CLI INSTALL</span>
                <span className="text-accent group-hover:text-cyan-300 transition-colors">
                  {copied ? "✓ Copied!" : "$ Click to copy"}
                </span>
              </div>
              <div className="font-mono text-sm sm:text-base text-accent bg-black/40 border border-white/5 rounded-lg p-3 overflow-x-auto select-all">
                npx @ifecodes/backend-template@latest my-project
              </div>
            </button>
          </div>

          {/* Stats Bar */}
          <div className="glass rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-black/25">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center text-center sm:text-left">
              <div className="space-y-0.5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Downloads (30d)</p>
                <p className="text-lg font-bold">
                  {npmDownloadsLastMonth === null ? (
                    <span className="text-muted-foreground text-sm font-normal">Loading...</span>
                  ) : (
                    new Intl.NumberFormat().format(npmDownloadsLastMonth)
                  )}
                </p>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10" />
              <div className="space-y-0.5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Total Downloads</p>
                <p className="text-lg font-bold">
                  {npmDownloadsTotal === null ? (
                    <span className="text-muted-foreground text-sm font-normal">Loading...</span>
                  ) : (
                    new Intl.NumberFormat().format(npmDownloadsTotal)
                  )}
                </p>
              </div>
            </div>
            <a
              href="https://www.npmjs.com/package/@ifecodes/backend-template"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl glass hover:border-accent/30 text-xs font-semibold tracking-wide transition-all"
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
