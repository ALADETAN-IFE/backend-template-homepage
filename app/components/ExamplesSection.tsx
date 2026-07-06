import React from "react";

export default function ExamplesSection() {
  return (
    <section id="examples" className="py-24 px-4 border-t border-white/[0.04] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Examples</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Compare generated workspace structures. Only the configurations you select are generated.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Microservices (No Auth) */}
          <div className="glass rounded-2xl p-6 md:p-8 space-y-5 shadow-lg shadow-black/15">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <h3 className="text-lg font-bold tracking-tight">Microservices (No Auth)</h3>
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent px-2 py-0.5 rounded-full bg-accent/10">Workspace</span>
            </div>
            <pre className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-xs text-accent overflow-x-auto leading-relaxed">
{`my-workspace/
├── services/
│   ├── gateway/         # Reverse proxy / Router (Port 4000)
│   └── health-service/  # Endpoint status checks (Port 4001)
├── shared/
│   ├── config/          # Common env variable mappings
│   └── utils/           # Shared logger & error middleware
├── package.json         # Workspace scripts
├── README.md
└── .env.example`}
            </pre>
            <div className="text-xs text-muted-foreground space-y-2.5 leading-relaxed pt-2">
              <p className="font-semibold text-foreground/80">Architecture Notes:</p>
              <ul className="space-y-1.5 list-disc pl-4">
                <li>Docker mode appends <code className="text-foreground font-mono bg-white/5 px-1 py-0.5 rounded text-[10px]">docker-compose.yml</code> and service Dockerfiles.</li>
                <li>PM2 mode configures a top-level <code className="text-foreground font-mono bg-white/5 px-1 py-0.5 rounded text-[10px]">pm2.config.js</code> file instead of containers.</li>
                <li>If Auth is enabled, a dedicated <code className="text-foreground font-mono bg-white/5 px-1 py-0.5 rounded text-[10px]">auth-service/</code> (Port 4002) is scaffolded.</li>
              </ul>
            </div>
          </div>

          {/* Docker vs PM2 configs */}
          <div className="space-y-6">
            {/* Docker configuration preview */}
            <div className="glass rounded-2xl p-6 md:p-8 space-y-4 shadow-lg shadow-black/15">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <h3 className="text-base font-bold tracking-tight">Microservice Docker Mode</h3>
                <span className="text-[9px] font-bold uppercase tracking-wider text-purple-400 px-2 py-0.5 rounded-full bg-purple-500/10">Containers</span>
              </div>
              <pre className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-xs text-accent overflow-x-auto leading-relaxed">
{`my-workspace/
├── services/
│   ├── gateway/
│   │   └── Dockerfile
│   └── health-service/
│       └── Dockerfile
├── docker-compose.yml   # Multi-service run config
├── package.json
└── README.md`}
              </pre>
            </div>

            {/* PM2 Configuration preview */}
            <div className="glass rounded-2xl p-6 md:p-8 space-y-4 shadow-lg shadow-black/15">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <h3 className="text-base font-bold tracking-tight">Microservice PM2 Mode</h3>
                <span className="text-[9px] font-bold uppercase tracking-wider text-accent px-2 py-0.5 rounded-full bg-accent/10">Process Managed</span>
              </div>
              <pre className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-xs text-accent overflow-x-auto leading-relaxed">
{`my-workspace/
├── services/
│   ├── gateway/
│   └── health-service/
├── pm2.config.js        # Core PM2 run configurations
├── package.json
└── README.md`}
              </pre>
            </div>
          </div>
        </div>

        {/* Monolith layout details */}
        <div className="glass rounded-2xl p-6 md:p-8 space-y-5 shadow-lg shadow-black/15">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h3 className="text-lg font-bold tracking-tight">Monolith Layout (No Auth)</h3>
            <span className="text-[10px] font-bold uppercase tracking-wider text-accent px-2 py-0.5 rounded-full bg-accent/10">Single Repo</span>
          </div>
          <pre className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-xs text-accent overflow-x-auto leading-relaxed">
{`my-monolith-app/
├── src/
│   ├── config/          # Configurations and key validation
│   ├── middlewares/    # Custom Express filters (CORS, Rate Limiting, etc.)
│   ├── modules/
│   │   └── v1/
│   │       └── health/  # API endpoints for health status checking
│   ├── utils/           # Global logger wrapper
│   ├── app.ts           # Central Express app declarations
│   ├── routes.ts        # Central Routing mapping file
│   └── server.ts        # Listening port initialization
├── package.json
└── README.md`}
          </pre>
          <div className="text-xs text-muted-foreground space-y-2.5 leading-relaxed pt-2">
            <p className="font-semibold text-foreground/80">Architecture Notes:</p>
            <ul className="space-y-1.5 list-disc pl-4">
              <li>Enabling authentication adds <code className="text-foreground font-mono bg-white/5 px-1 py-0.5 rounded text-[10px]">src/models/</code> and <code className="text-foreground font-mono bg-white/5 px-1 py-0.5 rounded text-[10px]">src/modules/v1/auth/</code> folder structures.</li>
              <li>Development dependencies like Prettier, ESLint, and Husky are loaded in the repository root.</li>
              <li>Zod request schemas are integrated directly next to the module endpoints under <code className="text-foreground font-mono bg-white/5 px-1 py-0.5 rounded text-[10px]">modules/v1/[feature]/schemas/</code>.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
