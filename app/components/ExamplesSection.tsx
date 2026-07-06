import React from "react";

const ExamplesSection = () => {
  return (
    <section
      id="examples"
      className="py-24 px-4 bg-card/30 border-t border-border/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-pretty">
            Examples
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Example layouts produced by the CLI when authentication is
            disabled (no auth).
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-card/60 border border-border rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                Microservice (no auth)
              </h3>
              <span className="text-xs text-muted-foreground">Workspace</span>
            </div>
            <div className="bg-secondary/60 border border-border rounded-lg p-4 font-mono text-xs text-accent overflow-x-auto whitespace-pre">
              {`my-workspace/
  services/
    gateway/
    health-service/
  shared/
    config/
    utils/
  package.json
  README.md
  .env.example`}
            </div>
            <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
              <p>Notes:</p>
              <ul className="space-y-1">
                <li>
                  • Docker mode adds{" "}
                  <span className="font-mono text-foreground">
                    docker-compose.yml
                  </span>{" "}
                  at the repo root.
                </li>
                <li>
                  • PM2 (nodocker) adds{" "}
                  <span className="font-mono text-foreground">
                    pm2.config.js
                  </span>{" "}
                  at the repo root.
                </li>
                <li>
                  • If auth is enabled,{" "}
                  <span className="font-mono text-foreground">
                    auth-service/
                  </span>{" "}
                  appears under{" "}
                  <span className="font-mono text-foreground">services/</span>
                  .
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card/60 border border-border rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  Microservice (Docker mode)
                </h3>
                <span className="text-xs text-muted-foreground">
                  docker-compose
                </span>
              </div>
              <div className="bg-secondary/60 border border-border rounded-lg p-4 font-mono text-xs text-accent overflow-x-auto whitespace-pre">
                {`my-workspace/
  services/
    gateway/
    health-service/
  shared/
    config/
    utils/
  docker-compose.yml
  package.json
  README.md
  .env.example`}
              </div>
            </div>

            <div className="bg-card/60 border border-border rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  Microservice (PM2 mode)
                </h3>
                <span className="text-xs text-muted-foreground">
                  nodocker
                </span>
              </div>
              <div className="bg-secondary/60 border border-border rounded-lg p-4 font-mono text-xs text-accent overflow-x-auto whitespace-pre">
                {`my-workspace/
  services/
    gateway/
    health-service/
  shared/
    config/
    utils/
  pm2.config.js
  package.json
  README.md
  .env.example`}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-card/60 border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Monolith (no auth)</h3>
            <span className="text-xs text-muted-foreground">Single repo</span>
          </div>
          <div className="bg-secondary/60 border border-border rounded-lg p-4 font-mono text-xs text-accent overflow-x-auto whitespace-pre">
            {`my-monolith-app/
  src/
    config/
    middlewares/
    modules/
      v1/
        health/
    utils/
    app.ts (or app.js)
    routes.ts (or routes.js)
    server.ts (or server.js)
  package.json
  README.md
  .env.example`}
          </div>
          <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
            <p>Notes:</p>
            <ul className="space-y-1">
              <li>
                • If auth is enabled, the monolith includes{" "}
                <span className="font-mono text-foreground">
                  src/modules/v1/auth/
                </span>{" "}
                and{" "}
                <span className="font-mono text-foreground">src/models/</span>
                .
              </li>
              <li>
                • Tooling (ESLint, Prettier, Husky) is configured at the
                repository root.
              </li>
              <li>
                • The root{" "}
                <span className="font-mono text-foreground">README.md</span>{" "}
                is generated and updated when you add services in microservice
                mode.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
