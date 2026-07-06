import React from "react";
import { IconClose } from "./Icons";

interface WorkflowModalProps {
  path: "monolith" | "microservices";
  onClose: () => void;
}

const WorkflowModal: React.FC<WorkflowModalProps> = ({ path, onClose }) => {
  const workflows = {
    monolith: {
      title: "Monolith Workflow",
      prompts: [
        {
          q: "Project name",
          a: 'Defaults to "my-backend" (from args if provided)',
        },
        { q: "Language", a: "TypeScript (default) or JavaScript templates" },
        {
          q: "Description / author / keywords",
          a: "Optional; written to package.json + README",
        },
        { q: "Features", a: "Multiselect: CORS, Rate Limit, Helmet, Morgan" },
        { q: "Authentication?", a: "Toggle JWT + MongoDB on/off" },
        {
          q: "Password hasher (if auth)",
          a: "bcrypt on Windows by default, argon2 elsewhere",
        },
      ],
      result:
        "Single Express app with only the middleware and auth you selected.",
    },
    microservices: {
      title: "Microservices Workflow",
      prompts: [
        { q: "Workspace name", a: "From args (mono/micro) or prompt if new" },
        { q: "Language", a: "TypeScript (default) or JavaScript templates" },
        { q: "Mode", a: "Docker (compose + Dockerfiles) or PM2 (no Docker)" },
        { q: "Features", a: "Multiselect: CORS, Rate Limit, Helmet, Morgan" },
        { q: "Authentication?", a: "Toggle JWT + MongoDB on/off" },
        {
          q: "Password hasher (if auth)",
          a: "bcrypt on Windows by default, argon2 elsewhere",
        },
        {
          q: "Adding a service in an existing workspace?",
          a: "CLI detects /services ➔ ask for service name + per-service features + auth toggle + hasher",
        },
      ],
      result:
        "Gateway + health (+ auth if enabled) with Docker or PM2, plus shared utils. Add services later by rerunning the CLI.",
    },
  };

  const workflow = workflows[path];

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-card border border-accent/30 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto space-y-6 p-8 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">{workflow.title}</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-accent transition cursor-pointer"
          >
            <IconClose />
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-muted-foreground">CLI prompts you’ll see:</p>
          <div className="space-y-3">
            {workflow.prompts.map((item, idx) => (
              <div
                key={idx}
                className="bg-secondary/50 border border-border rounded-lg p-4 space-y-2"
              >
                <div className="flex items-start gap-3">
                  <div className="text-sm font-mono text-accent min-w-fit">
                    ➔
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.q}</p>
                    <p className="font-mono text-accent text-sm mt-1">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 space-y-2">
          <p className="text-sm font-semibold">Result:</p>
          <p className="text-sm text-muted-foreground">{workflow.result}</p>
        </div>

        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200 cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WorkflowModal;
