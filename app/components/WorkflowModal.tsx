import React from "react";
import { IconClose } from "./Icons";

interface WorkflowModalProps {
  path: "monolith" | "microservices";
  onClose: () => void;
}

const WorkflowModal: React.FC<WorkflowModalProps> = ({ path, onClose }) => {
  const workflows = {
    monolith: {
      title: "Monolith Setup Flow",
      prompts: [
        {
          q: "Project name",
          a: 'Defines output folder. Defaults to "my-backend" (or CLI parameter).',
        },
        {
          q: "Language",
          a: "TypeScript (recommended) or ES6 JavaScript template scaffolding.",
        },
        {
          q: "Description / Author / Keywords",
          a: "Optional prompts to automatically inject metadata into package.json.",
        },
        {
          q: "Project Scope",
          a: "Team (creates .github actions workflows, PR templates, and CONTRIBUTING.md) or Individual.",
        },
        {
          q: "Features",
          a: "Multiselect: CORS configuration, Helmet security, Rate Limiting, and Morgan logging.",
        },
        {
          q: "Authentication",
          a: "Toggle JWT auth. Sets up User database models, login/register routes, and authentication filters.",
        },
        {
          q: "Password Hasher (if auth)",
          a: "bcrypt (auto-selected on Windows for reliability) or argon2 (recommended elsewhere).",
        },
        {
          q: "Request Validation",
          a: "Toggle Zod payload verification. Scaffolds schema files and checks body inputs at route level.",
        },
      ],
      result:
        "Single Node/Express repository. Generates clean app initialization, standard directory structure, and only selected features.",
    },
    microservices: {
      title: "Microservices Setup Flow",
      prompts: [
        {
          q: "Workspace name",
          a: "Scaffolds root monorepo. Inferred from CLI argument or interactive prompt.",
        },
        {
          q: "Language",
          a: "TypeScript (recommended) or ES6 JavaScript template scaffolding.",
        },
        {
          q: "Mode",
          a: "Docker (docker-compose configuration + Dockerfiles) or PM2 (pm2.config.js process definitions).",
        },
        {
          q: "Project Scope",
          a: "Team (creates .github actions workflows, PR templates, and CONTRIBUTING.md) or Individual.",
        },
        {
          q: "Features",
          a: "Global features: CORS configuration, Helmet security, Rate Limiting, and Morgan logging.",
        },
        {
          q: "Authentication",
          a: "JWT Auth. Adds user DB connection configs and scaffolds an isolated auth-service container/process.",
        },
        {
          q: "Password Hasher (if auth)",
          a: "bcrypt (auto-selected on Windows for reliability) or argon2 (recommended elsewhere).",
        },
        {
          q: "Request Validation",
          a: "Toggle Zod payload verification. Scaffolds schema files and checks body inputs at service routing level.",
        },
        {
          q: "Adding subsequent services?",
          a: "If the CLI is executed in a directory containing a /services folder, it runs in 'add-service' mode, prompts for service specifications, and updates API gateway proxies automatically.",
        },
      ],
      result:
        "Comprehensive distributed workspace. Generates API Gateway router, shared config/utils, and service modules ready to scale.",
    },
  };

  const workflow = workflows[path];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#09090b]/80 backdrop-blur-md animate-fade-in">
      {/* Modal Card container */}
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col glass-strong rounded-2xl shadow-2xl border border-white/10 animate-fade-in-up overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-white/[0.06]">
          <h2 className="text-xl font-bold tracking-tight text-foreground">{workflow.title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition cursor-pointer text-muted-foreground hover:text-foreground active:scale-95"
            aria-label="Close modal"
          >
            <IconClose />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-accent font-mono">Setup steps & CLI prompts:</p>
            <div className="space-y-3.5">
              {workflow.prompts.map((step, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center font-mono text-[10px] font-bold text-accent">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold tracking-tight text-foreground">{step.q}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4.5 border-t border-white/[0.06] bg-white/[0.01] text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground/80">Scaffold result: </span>
          {workflow.result}
        </div>
      </div>
    </div>
  );
};

export default WorkflowModal;
