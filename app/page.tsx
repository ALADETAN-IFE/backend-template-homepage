'use client'

import { useState } from 'react'

const IconArrow = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

const IconCode = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const IconDatabase = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
)

const IconZap = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const IconShield = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

const IconGit = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const IconCheck = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

export default function Home() {
  const [copied, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText('npx @ifecodes/backend-template my-project')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/60 rounded flex items-center justify-center font-bold text-primary text-sm">
              B
            </div>
            <span className="font-semibold text-lg hidden sm:inline">Backend Template</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection('features')} className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-muted-foreground hover:text-foreground transition">
              How It Works
            </button>
            <a
              href="https://github.com/ALADETAN-IFE/backend-template"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-pretty">
              Production APIs <br />
              <span className="bg-gradient-to-r from-accent via-accent to-cyan-400 bg-clip-text text-transparent">
                in seconds
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Generate a fully scaffolded Node.js backend. Choose your language, architecture, and features. Deploy immediately.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <button
              onClick={() => scrollToSection('getting-started')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200 hover:shadow-lg hover:shadow-accent/50 active:scale-95"
            >
              Get Started
              <IconArrow />
            </button>
            <a
              href="https://github.com/ALADETAN-IFE/backend-template"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-muted transition-all duration-200 border border-border hover:border-accent active:scale-95"
            >
              View on GitHub
              <IconGit />
            </a>
          </div>

          {/* Code Snippet */}
          <div className="pt-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="bg-card/50 backdrop-blur rounded-lg border border-border/50 p-6 hover:border-accent/50 transition-all duration-300">
              <button
                onClick={copyCommand}
                className="w-full text-left group"
              >
                <p className="text-xs text-muted-foreground mb-3 group-hover:text-accent transition">
                  {copied ? '✓ Copied!' : '$ Click to copy'}
                </p>
                <pre className="text-sm md:text-base text-accent font-mono overflow-x-auto">
                  npx @ifecodes/backend-template my-project
                </pre>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-pretty">Why Backend Template?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: '⚡', title: 'Save Hours', desc: 'Start with production code, not boilerplate. Focus on business logic.' },
              { icon: '✓', title: 'Best Practices', desc: 'Built by experienced developers. Error handling, logging, security included.' },
              { icon: '📈', title: 'Scalable', desc: 'Monolith or microservices. Grow from MVP to production without rebuilding.' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4 animate-fade-in-up" style={{ animationDelay: `${0.1 * idx}s`, animationFillMode: 'both' }}>
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-card/30 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-pretty">Built for Developers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: IconCode, title: 'Language Choice', desc: 'TypeScript or JavaScript' },
              { icon: IconDatabase, title: 'Database Ready', desc: 'PostgreSQL, MongoDB pre-configured' },
              { icon: IconShield, title: 'Authentication', desc: 'JWT & session-based auth included' },
              { icon: IconZap, title: 'Zero Config', desc: 'Interactive CLI for instant setup' },
              { icon: IconGit, title: 'Best Practices', desc: 'Logging, error handling, testing' },
              { icon: IconCode, title: 'Deployment Ready', desc: 'Docker for microservices' },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="space-y-4 p-6 rounded-lg border border-border hover:border-accent/50 bg-card/50 hover:bg-card transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.08 * idx}s`, animationFillMode: 'both' }}
                >
                  <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center text-accent group-hover:text-accent">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-pretty">3-Minute Setup</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Run CLI', desc: 'Execute one command in your terminal' },
              { step: '2', title: 'Answer Questions', desc: 'Choose language, architecture, features' },
              { step: '3', title: 'Start Coding', desc: 'Get a production-ready project instantly' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="space-y-4 text-center animate-fade-in-up"
                style={{ animationDelay: `${0.15 * idx}s`, animationFillMode: 'both' }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent to-cyan-400 text-primary rounded-full font-bold text-lg shadow-lg shadow-accent/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Comparison */}
      <section id="getting-started" className="py-24 px-4 bg-card/30 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-pretty">Choose Your Path</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="border border-border rounded-lg p-8 space-y-6 hover:border-border transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: '0s', animationFillMode: 'both' }}
            >
              <h3 className="text-2xl font-bold">Monolith</h3>
              <p className="text-muted-foreground">Perfect for MVPs and small to medium projects</p>
              <ul className="space-y-3">
                {['Single codebase', 'Easier to debug', 'Lower DevOps complexity', 'Shared database'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <IconCheck />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="border border-accent/50 bg-accent/5 rounded-lg p-8 space-y-6 hover:border-accent transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              <h3 className="text-2xl font-bold">Microservices</h3>
              <p className="text-muted-foreground">For scaling and independent deployments</p>
              <ul className="space-y-3">
                {['Independent scaling', 'Service isolation', 'Tech flexibility', 'Team autonomy'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <IconCheck />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-2 space-y-1 text-xs text-muted-foreground border-t border-accent/20 pt-4">
                <p>Includes Docker & PM2 for deployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-pretty">Modern Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Node.js',
              'Express.js',
              'TypeScript',
              'PostgreSQL',
              'MongoDB',
              'Jest',
              'Swagger',
              'JWT',
              'Redis',
              'Git Hooks',
              'Helmet',
              'CORS',
            ].map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center p-4 bg-card/50 rounded-lg border border-border hover:border-accent/50 transition-all duration-300 animate-fade-in-up hover:shadow-md hover:shadow-accent/10"
                style={{ animationDelay: `${Math.random() * 0.3}s`, animationFillMode: 'both' }}
              >
                <span className="font-semibold text-sm text-center">{tech}</span>
              </div>
            ))}
            <div
              className="flex items-center justify-center p-4 bg-accent/10 rounded-lg border border-accent/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              <span className="font-semibold text-sm text-accent">Docker (Microservices)</span>
            </div>
            <div
              className="flex items-center justify-center p-4 bg-accent/10 rounded-lg border border-accent/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: '0.35s', animationFillMode: 'both' }}
            >
              <span className="font-semibold text-sm text-accent">PM2 (Microservices)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-pretty">Ready to Build?</h2>
            <p className="text-lg text-muted-foreground">Open source, free, and made for developers by developers.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <button
              onClick={() => copyCommand()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200 hover:shadow-lg hover:shadow-accent/50 active:scale-95"
            >
              {copied ? 'Copied!' : 'Copy Command'}
              <IconArrow />
            </button>
            <a
              href="https://github.com/ALADETAN-IFE/backend-template"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-muted transition-all duration-200 border border-border hover:border-accent active:scale-95"
            >
              Star on GitHub
              <IconGit />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-3">Backend Template</h3>
              <p className="text-sm text-muted-foreground">Generate production-ready Express APIs instantly.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://github.com/ALADETAN-IFE" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                    GitHub Profile
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ALADETAN-IFE/backend-template" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                    Repository
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">License</h3>
              <p className="text-sm text-muted-foreground">MIT License • Open Source</p>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>
              Made with care by{' '}
              <a href="https://github.com/ALADETAN-IFE" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline transition">
                IfeCodes
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
