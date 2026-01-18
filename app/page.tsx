import { ArrowRight, Code2, Database, Gift, Zap, Shield, LogIn } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import GitBranch from 'lucide-react/dist/icons/GitBranch'

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold text-primary">
              B
            </div>
            <span className="font-semibold text-lg">Backend Template</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition">Docs</a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">Features</a>
            <a href="https://github.com/ALADETAN-IFE/backend-template" className="text-sm text-muted-foreground hover:text-foreground transition">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-pretty">
              Production-Ready <span className="text-accent">Express APIs</span> in Seconds
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scaffold your Node.js backend with TypeScript or JavaScript, choose monolith or microservices, add authentication, and deploy with Docker or PM2.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#getting-started" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://github.com/ALADETAN-IFE/backend-template" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-muted transition border border-border">
              View on GitHub
              <Gift className="w-4 h-4" />
            </a>
          </div>

          {/* Code Snippet */}
          <div className="mt-12 bg-card border border-border rounded-lg p-4 inline-block">
            <pre className="text-left text-sm font-mono text-accent">
              <span className="text-muted-foreground">$ </span>
              npx @ifecodes/backend-template my-project
            </pre>
          </div>
        </div>
      </section>

      {/* Why This Tool Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Backend Template?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Save Hours</h3>
              <p className="text-muted-foreground">
                Skip boilerplate setup. Go from zero to production-ready backend in minutes, not days.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Best Practices Built-In</h3>
              <p className="text-muted-foreground">
                Security, logging, error handling, and performance optimizations included by default.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <GitBranch className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Grow With You</h3>
              <p className="text-muted-foreground">
                Start monolith, scale to microservices. Flexible architecture for any size project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Powerful Features</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Everything you need for a modern backend, out of the box.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-lg">Language Choice</h3>
              </div>
              <p className="text-muted-foreground">TypeScript for type safety or JavaScript for simplicity. Pre-authored templates for both.</p>
            </div>

            <div className="border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <GitBranch className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-lg">Dual Architecture</h3>
              </div>
              <p className="text-muted-foreground">Monolith for simplicity or microservices with API Gateway for scalability.</p>
            </div>

            <div className="border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-lg">Authentication Ready</h3>
              </div>
              <p className="text-muted-foreground">JWT + MongoDB with bcrypt or argon2 password hashing. User management included.</p>
            </div>

            <div className="border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-lg">Security First</h3>
              </div>
              <p className="text-muted-foreground">CORS, Helmet headers, rate limiting, and request validation built-in.</p>
            </div>

            <div className="border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <LogIn className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-lg">Deployment Ready</h3>
              </div>
              <p className="text-muted-foreground">Docker containers for microservices or PM2 process management. Your choice.</p>
            </div>

            <div className="border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-lg">Developer Experience</h3>
              </div>
              <p className="text-muted-foreground">Hot reload, ESLint, TypeScript paths, and Husky git hooks for smooth workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="getting-started" className="py-20 px-4 bg-secondary/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-primary text-lg mx-auto">
                1
              </div>
              <h3 className="font-semibold text-xl">Run the CLI</h3>
              <p className="text-muted-foreground">
                <code className="bg-card px-2 py-1 rounded">npx @ifecodes/backend-template my-project</code>
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-primary text-lg mx-auto">
                2
              </div>
              <h3 className="font-semibold text-xl">Answer Prompts</h3>
              <p className="text-muted-foreground">
                Choose language, architecture, features, and deployment mode.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-primary text-lg mx-auto">
                3
              </div>
              <h3 className="font-semibold text-xl">Start Building</h3>
              <p className="text-muted-foreground">
                Run <code className="bg-card px-2 py-1 rounded">npm run dev</code> and begin development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Choose Your Architecture</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border rounded-lg p-8 space-y-6">
              <h3 className="text-2xl font-semibold">Monolith</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Single server architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Perfect for startups & MVPs</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Easy to deploy and maintain</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>All code in one repository</span>
                </li>
              </ul>
            </div>

            <div className="border border-accent/30 bg-accent/5 rounded-lg p-8 space-y-6">
              <h3 className="text-2xl font-semibold">Microservices</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Distributed service architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>API Gateway for routing</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Scale services independently</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Docker and PM2 support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Tech Stack</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6">Runtime & Framework</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Node.js</span>
                  <span className="text-muted-foreground">v18+</span>
                </div>
                <div className="flex justify-between">
                  <span>Express.js</span>
                  <span className="text-muted-foreground">Web framework</span>
                </div>
                <div className="flex justify-between">
                  <span>TypeScript</span>
                  <span className="text-muted-foreground">Or JavaScript</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6">Database & Auth</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>MongoDB</span>
                  <span className="text-muted-foreground">With Mongoose</span>
                </div>
                <div className="flex justify-between">
                  <span>JWT</span>
                  <span className="text-muted-foreground">Authentication</span>
                </div>
                <div className="flex justify-between">
                  <span>bcrypt / argon2</span>
                  <span className="text-muted-foreground">Password hashing</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6">Security & Logging</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Helmet</span>
                  <span className="text-muted-foreground">Security headers</span>
                </div>
                <div className="flex justify-between">
                  <span>Morgan</span>
                  <span className="text-muted-foreground">HTTP logging</span>
                </div>
                <div className="flex justify-between">
                  <span>Rate Limiting</span>
                  <span className="text-muted-foreground">Request throttling</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6">Deployment</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Docker</span>
                  <span className="text-muted-foreground">Containerization</span>
                </div>
                <div className="flex justify-between">
                  <span>PM2</span>
                  <span className="text-muted-foreground">Process manager</span>
                </div>
                <div className="flex justify-between">
                  <span>ESLint & Husky</span>
                  <span className="text-muted-foreground">Code quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Open Source & MIT Licensed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built by developers, for developers. Contribute, fork, and use freely in your projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/ALADETAN-IFE/backend-template"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Contribute on GitHub
              <Gift className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/10 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold text-primary text-sm">
                  B
                </div>
                <span className="font-semibold">Backend Template</span>
              </div>
              <p className="text-sm text-muted-foreground">Production-ready backend scaffolding for Node.js</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/ALADETAN-IFE/backend-template" className="text-muted-foreground hover:text-foreground transition">GitHub Repository</a></li>
                <li><a href="https://github.com/ALADETAN-IFE/backend-template" className="text-muted-foreground hover:text-foreground transition">Documentation</a></li>
                <li><a href="https://github.com/ALADETAN-IFE" className="text-muted-foreground hover:text-foreground transition">Author</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/ALADETAN-IFE" className="text-muted-foreground hover:text-foreground transition">GitHub</a></li>
                <li><a href="https://twitter.com/IfeCodes_" className="text-muted-foreground hover:text-foreground transition">Twitter</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition">MIT License</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2024 Backend Template. Built by <a href="https://github.com/ALADETAN-IFE" className="text-accent hover:underline">IfeCodes</a></p>
            <p>Made with ❤️ for the developer community</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
