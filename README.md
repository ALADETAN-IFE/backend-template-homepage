# 🌐 Backend Template Homepage

This repository contains the source code for the official landing page and documentation website of the **Backend Template Generator** CLI tool. 

Built with Next.js (App Router), React 19, and Tailwind CSS v4, the website features a dark, developer-focused aesthetic with glassmorphic cards, smooth animations, and interactive CLI setup workflows.

---

## 🛠️ Tech Stack

- **Core**: [Next.js](https://nextjs.org/) (App Router) & [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Animations**: [tw-animate-css](https://www.npmjs.com/package/tw-animate-css) & Custom CSS keyframes
- **Icons**: Inline optimized SVGs
- **Analytics**: [@vercel/analytics](https://vercel.com/docs/analytics)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [pnpm](https://pnpm.io/) installed.

### Installation

Clone the repository and install the dependencies:

```bash
pnpm install
```

### Local Development

Run the Next.js development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Building for Production

Compile the production bundle:

```bash
pnpm run build
```

Start the production server:

```bash
pnpm run start
```

---

## 🗂️ Project Structure

```
backend-template-homepage/
├── app/
│   ├── components/       # Modular page sections
│   │   ├── DocsSection.tsx
│   │   ├── ExamplesSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Icons.tsx
│   │   ├── SupportSection.tsx
│   │   ├── WhySection.tsx
│   │   ├── WorkflowModal.tsx
│   │   └── WorkflowSection.tsx
│   ├── discussions/      # Discussion redirect/layout files
│   ├── globals.css       # Core design tokens and custom animations
│   ├── layout.tsx        # HTML wrapper & metadata declarations
│   └── page.tsx          # Main entry page coordinating state & sections
├── public/               # Public assets
├── package.json
└── tsconfig.json
```

---

## Author: 

[IfeCodes](https://ifecodes.xyz)
