import React from "react";
import { IconCode, IconShield, IconZap, IconGit } from "./Icons";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-24 px-4 bg-card/30 border-t border-border/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-pretty">
          Built for Developers
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: IconCode,
              title: "Language Choice",
              desc: "TypeScript (default) or JavaScript templates",
            },
            {
              icon: IconShield,
              title: "Authentication (optional)",
              desc: "JWT + MongoDB when enabled; off means no DB wiring",
            },
            {
              icon: IconZap,
              title: "Zero Config CLI",
              desc: "Args support mono/micro; prompts only what is needed",
            },
            {
              icon: IconGit,
              title: "Microservices Ready",
              desc: "Gateway + health; Docker or PM2",
            },
            {
              icon: IconCode,
              title: "Middleware Picks",
              desc: "CORS, Helmet, Rate Limit, Morgan",
            },
            {
              icon: IconGit,
              title: "Add Services Later",
              desc: "Re-run CLI; gateway/routes update automatically",
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="space-y-4 p-6 rounded-lg border border-border hover:border-accent/50 bg-card/50 hover:bg-card transition-all duration-300 opacity-0"
                data-scroll
                style={{ animationDelay: `${0.08 * idx}s` }}
              >
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center text-accent">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
