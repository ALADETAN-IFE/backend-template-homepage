import React from "react";

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-pretty">FAQ</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Common questions about platform support, requirements, and how the
            generator behaves.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "Does it work on Windows?",
              a: "Yes. The CLI is designed to work on Windows, macOS, and Linux. For password hashing, bcrypt is the most Windows-friendly default.",
            },
            {
              q: "What Node.js version do I need?",
              a: "Use a modern LTS Node.js version. If you run into any install/runtime issues, update Node first (LTS) before anything else.",
            },
            {
              q: "Do I need MongoDB?",
              a: "Only if you enable Authentication. If auth is OFF, the output stays clean: no DB wiring, no JWT logic, no auth service.",
            },
            {
              q: "Does the generator include request validation?",
              a: "Yes. You can opt to include request validation using Zod schemas. If enabled, Zod schema files and request validation middlewares are automatically scaffolded and wired into the generated API endpoints (e.g., auth, health).",
            },
            {
              q: "Docker vs PM2 — when should I choose each?",
              a: "Docker mode generates compose + Dockerfiles for containerized services. PM2 mode skips Docker and sets up process-managed deployment. Choose based on your deployment environment.",
            },
            {
              q: "How does “add service” work in microservices?",
              a: "When the CLI detects an existing microservice workspace (a /services folder), it switches into add-service mode: it prompts for a new service name and optional features/auth, then updates gateway routing automatically.",
            },
            {
              q: "Can I generate JavaScript instead of TypeScript?",
              a: "Yes. You can pick TypeScript (default) or JavaScript. The output matches your selection (no TS config in JS projects).",
            },
            {
              q: "What middleware/features can I include?",
              a: "You can select middleware like CORS, Helmet, Rate Limiting, and Morgan. Only what you select gets added to dependencies and wired into the app.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group bg-card/60 border border-border rounded-xl p-5"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 select-none">
                <span className="font-semibold">{item.q}</span>
                <span className="text-muted-foreground group-open:text-accent transition">
                  +
                </span>
              </summary>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
