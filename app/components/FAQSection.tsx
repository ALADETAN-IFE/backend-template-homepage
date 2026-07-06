import React from "react";

const faqs = [
  {
    q: "How does this generator differ from other Express generators?",
    a: "Unlike minimal CLI generators that copy static boilerplates, Backend Template runs an interactive, parameter-aware compilation flow. It customizes the codebase on-the-fly, installing only selected dependencies, generating language-appropriate structures, configuring specific hashes, and dynamically documenting everything in the generated project README.",
  },
  {
    q: "What Node.js version do I need?",
    a: "We recommend using a modern LTS Node.js version (e.g. Node 18 or 20+). Upgrading Node first resolves almost all package-installation or runtime compiler compatibility issues.",
  },
  {
    q: "Do I need MongoDB installed?",
    a: "Only if you opt to enable JWT Authentication during CLI setup. If authentication is toggled off, no database scripts, database configuration, or dependency packages are added to keep the template lean.",
  },
  {
    q: "Does the generator support request payload validation?",
    a: "Yes. You can opt to include request validation via Zod schemas. If enabled, Zod schema definitions and request-validation middlewares are generated next to feature modules and automatically mapped into Express route handlers.",
  },
  {
    q: "Docker vs PM2 — when should I choose each?",
    a: "Choose Docker mode if your deployment environment is containerized. It scaffolds a root docker-compose configuration alongside service Dockerfiles for multi-service coordination. Choose PM2 mode for standard process managers (e.g., bare VM) to set up PM2 ecosystems without containers.",
  },
  {
    q: "How does “add service” work in microservices mode?",
    a: "When you run the template command within an existing microservice directory (which contains a /services directory), the CLI skips metadata configuration. Instead, it enters 'add-service' mode, prompts for service-specific options, creates the service directory, and automatically rewires the API Gateway proxy routing mapping.",
  },
  {
    q: "Does the generator set up API documentation?",
    a: "Yes. Every generated project automatically integrates Swagger UI to document your API endpoints. Once you start the server, you can view and test your endpoints interactively by visiting /api-docs in your browser.",
  },
  {
    q: "Can I generate JavaScript code instead of TypeScript?",
    a: "Yes. Although TypeScript is selected by default, you can toggle language choices to generate clean JavaScript templates. The output will exclude all TS compiler files and typings.",
  },
  {
    q: "What middleware/features can I configure during setup?",
    a: "You can multiselect common middleware libraries: CORS (Cross-Origin Resource Sharing), Helmet (HTTP security headers), Rate Limiter (API rate limits), and Morgan (request logging). Skipped options are fully omitted from code and configuration.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 px-4 border-t border-white/[0.04] relative">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">FAQ</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            Answers to common questions regarding CLI options, setups, and architecture choices.
          </p>
        </div>

        {/* FAQ Accordion list */}
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              className="group glass rounded-2xl p-5 border border-white/5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 font-semibold text-sm sm:text-base cursor-pointer list-none select-none tracking-tight">
                <span>{item.q}</span>
                <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-white/5 group-open:bg-accent/10 flex items-center justify-center transition-colors">
                  <svg
                    className="w-3.5 h-3.5 text-muted-foreground group-open:text-accent transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </summary>
              <div className="mt-3.5 pt-3.5 border-t border-white/[0.04] text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
