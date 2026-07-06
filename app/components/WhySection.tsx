import React from "react";

const WhySection = () => {
  return (
    <section className="py-24 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-pretty">
          Why Backend Template?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
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
          ].map((item, idx) => (
            <div
              key={idx}
              className="space-y-4 opacity-0"
              data-scroll
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
