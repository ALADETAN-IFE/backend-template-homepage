# 🚀 Backend Template Generator

A powerful CLI tool to generate production-ready Node.js backend applications with Express.js. Supports both **TypeScript** and **JavaScript**, with monolith and microservice architectures, and optional features like authentication, CORS, rate limiting, and more.

---

## ✨ Features

- 🎯 **TypeScript & JavaScript Support** - Choose your preferred language
- 🏗️ **Dual Architecture** - Monolith or Microservice
- 🐳 **Docker Ready** - Containerized microservices
- ⚡ **PM2 Support** - Process management for production
- 🔐 **JWT Authentication** - Built-in auth with MongoDB
- 🛡️ **Security First** - CORS, Helmet, Rate Limiting
- 📝 **Professional Logging** - Morgan + Winston
- 🎨 **Colored CLI** - Beautiful Vite-like terminal output
- ✅ **Environment Validation** - Fails fast on missing config
- 📈 **Observability** - Request IDs and HTTP access logs
- � workflows **CI/CD Workflows** - GitHub Actions starter workflow for team projects
- 📋 **Project Metadata** - Description, author, and keywords support
- 📖 **Contributing Guide** - Auto-generated CONTRIBUTING.md for team projects
- 🔀 **PR Templates** - Pre-formatted pull request templates for team projects

---

## 🤝 Team & Individual Projects

The template distinguishes between **team projects** and **individual projects** during setup:

### Team Projects

Team projects automatically receive:

- ✅ **GitHub Actions Workflow** (`.github/workflows/ci-cd.yml`) - CI/CD automation for building, linting, and testing
- ✅ **Pull Request Template** (`.github/pull_request_template.md`) - Standardized PR format for contributions
- ✅ **Contributing Guide** (`CONTRIBUTING.md`) - Guidelines for team collaboration, code style, commit conventions, and development setup

### Individual Projects

Individual projects skip these collaboration files, keeping the scaffold lean and focused on the application itself.

You can specify your project type during CLI setup, and these files will be generated accordingly.

---

## 📦 Installation & Usage

### Quick Start

```bash
npx @ifecodes/backend-template my-project
```

Or install globally:

```bash
npm install -g @ifecodes/backend-template
ifecodes-template my-project
```

### With Arguments

```bash
# Create a monolith
npx @ifecodes/backend-template my-api mono

# Create a microservice
npx @ifecodes/backend-template my-project micro
```

---

## 🧠 Interactive Setup

When you run the CLI, you'll be prompted to choose:

1. **Language**
   - TypeScript (default)
   - JavaScript
2. **Project Metadata**
   - Description, Author, Keywords
3. **Project Type**
   - Monolith API or Microservice
4. **Project Scope**
   - Team or Individual
5. **Deployment Mode** (Microservices only)
   - Docker or PM2
6. **Optional Features**
   - CORS, Helmet, Rate Limiting, Morgan
7. **Authentication**
   - JWT Auth with MongoDB, bcrypt or argon2

---

## 📂 Project Structure

### Monolith

```
my-backend/
├── src/
│   ├── config/         # Configuration files
│   ├── middlewares/    # Custom middlewares
│   ├── modules/        # Feature modules
│   │   └── v1/         # API version 1
│   │       ├── auth/   # Auth module (if enabled)
│   │       └── health/ # Health check
│   ├── models/         # Database models (if auth)
│   ├── utils/          # Utility functions
│   ├── app.ts          # Express app setup
│   ├── routes.ts       # Route definitions
│   └── server.ts       # Server entry point
├── .github/            # GitHub configuration (team projects only)
│   ├── workflows/      # CI/CD workflows
│   │   └── ci-cd.yml   # GitHub Actions workflow
│   └── pull_request_template.md # PR template
├── .husky/             # Git hooks
├── .env                # Environment variables
├── CONTRIBUTING.md     # Contribution guidelines (team projects only)
├── package.json
└── tsconfig.json
```

### Microservice

```
my-project/
├── shared/              # Shared utilities across services
│   ├── config/         # Environment configs (db.ts only if auth enabled)
│   └── utils/          # Logger, error handlers
├── services/
│   ├── gateway/        # API Gateway (port 4000)
│   ├── health-service/ # Health checks (port 4001)
│   └── auth-service/   # Authentication (port 4002, if enabled)
├── .github/            # GitHub configuration (team projects only)
│   ├── workflows/      # CI/CD workflows
│   │   └── ci-cd.yml   # GitHub Actions workflow
│   └── pull_request_template.md # PR template
├── docker-compose.yml  # Docker setup (if selected)
├── pm2.config.js       # PM2 setup (if selected)
├── .env                # Root environment variables
├── .gitignore          # Git ignore (includes .env and node_modules)
├── CONTRIBUTING.md     # Contribution guidelines (team projects only)
├── tsconfig.json       # Root TypeScript config with project references
├── .husky/             # Git hooks
└── package.json        # Root package.json
```

**Note:** Each microservice does NOT have its own `.env` file. Environment variables are managed at the root level through `docker-compose.yml` or `pm2.config.js`.

---

## ▶️ Running the Application

### Monolith

```bash
cd my-backend
# Development
npm run dev
# Production
npm run build
npm start
```

### Microservice (Docker)

```bash
cd my-project
# Start all services
docker-compose up
# Start in detached mode
docker-compose up -d
# View logs
docker-compose logs -f
# Stop all services
docker-compose down
```

### Microservice (PM2)

```bash
cd my-project
# Start all services
pm2 start pm2.config.js
# View logs
pm2 logs
# Monitor services
pm2 monit
# Stop all services
pm2 stop all
```

---

## 🛠 Tech Stack

- **Runtime**: Node.js (v18+)
- **Language**: TypeScript or JavaScript
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose, if auth enabled)
- **Authentication**: JWT + bcrypt/argon2
- **Security**: Helmet, CORS, Rate Limiting
- **Logging**: Morgan, Custom Logger
- **Git Hooks**: Husky
- **Deployment**: Docker or PM2

---

## 📎 Links

- [GitHub Repository](https://github.com/ALADETAN-IFE/backend-template)
- [NPM Package](https://www.npmjs.com/package/@ifecodes/backend-template)
