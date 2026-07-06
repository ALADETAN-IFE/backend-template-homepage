import React from "react";
import Link from "next/link";

interface SupportSectionProps {
  supportEmail: string;
}

const SupportSection: React.FC<SupportSectionProps> = ({ supportEmail }) => {
  return (
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
              {supportEmail ? (
                <a
                  className="text-accent hover:underline"
                  href={`mailto:${supportEmail}`}
                >
                  {supportEmail}
                </a>
              ) : (
                "Add your support email in the code to enable this link."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
