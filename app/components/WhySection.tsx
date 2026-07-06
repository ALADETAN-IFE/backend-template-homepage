import React from "react";

const values = [
  {
    icon: "⚡",
    title: "Save Hours",
    desc: "Start with production code, not boilerplate. Focus on business logic.",
  },
  {
    icon: "✓",
    title: "Best Practices",
    desc: "Built by experienced developers. Error handling, logging, security included.",
  },
  {
    icon: "📈",
    title: "Scalable",
    desc: "Monolith or microservices. Grow from MVP to production without rebuilding.",
  },
];

export default function WhySection() {
  return (
    <section className="py-24 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
          Why Backend Template?
        </h2>
        <p className="text-muted text-center mb-16 max-w-2xl mx-auto text-lg">
          Everything you need to ship faster, built the right way from the start.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <div
              key={i}
              data-scroll
              className="glass opacity-0 rounded-2xl p-8 border border-border/50 hover:border-accent/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-3xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
