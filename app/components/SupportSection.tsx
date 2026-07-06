import React from "react";
import Link from "next/link";

interface SupportSectionProps {
  supportEmail: string;
}

export default function SupportSection({ supportEmail }: SupportSectionProps) {
  return (
    <section id="support" className="py-24 px-4 bg-card/10 border-t border-white/[0.04] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Need help?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            Have questions, issues, or want to contribute? Connect with us below.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://github.com/ALADETAN-IFE/backend-template/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-6 rounded-2xl border border-white/5 hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-300 block space-y-3 group shadow-lg shadow-black/10"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <h3 className="font-bold text-base tracking-tight group-hover:text-accent transition-colors">Open an Issue</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Report runtime bugs, scaffold issues, or request new CLI generator options directly on our repository.
            </p>
          </a>

          <Link
            href="/discussions"
            className="glass p-6 rounded-2xl border border-white/5 hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-300 block space-y-3 group shadow-lg shadow-black/10"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3 className="font-bold text-base tracking-tight group-hover:text-accent transition-colors">Start a Discussion</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Ask coding questions, propose template patterns, share ideas, and engage with the developer community.
            </p>
          </Link>

          <div className="glass p-6 rounded-2xl border border-white/5 space-y-3 shadow-lg shadow-black/10">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <h3 className="font-bold text-base tracking-tight">Direct Support</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              For security concerns, sponsorship queries, or direct developer support, contact us via email:
            </p>
            <p className="text-xs font-semibold">
              <a href={`mailto:${supportEmail}`} className="text-accent hover:underline">
                {supportEmail}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
