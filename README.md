# 🚗 Vehicle UI Dashboard

A **component-driven** React + Nx monorepo that simulates a modern vehicle dashboard UI.
Designed to give **frontend beginners** and **DevOps/Infra engineers** hands-on experience building, testing, and deploying a real-world front-end application with a full CI/CD pipeline.

[![Deploy to GitHub Pages](https://github.com/kala-techies/vehicle-ui-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/kala-techies/vehicle-ui-dashboard/actions/workflows/ci.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-2ea44f)](https://kala-techies.github.io/vehicle-ui-dashboard/)

🔗 **Live Demo:** https://kala-techies.github.io/vehicle-ui-dashboard/  
🔗 **Repository:** https://github.com/kala-techies/vehicle-ui-dashboard  
📧 **Contact:** [connectwithkala18@gmail.com](mailto:connectwithkala18@gmail.com)

---

## 🧠 Project Purpose

- **UI Developers**: Build and test reusable dashboard components (speedometer, fuel gauge, climate control, etc.)  
- **DevOps Engineers**: Implement and secure a multi-stage GitHub Actions CI/CD pipeline  
- **Infra Engineers**: Provision cloud resources via Azure Bicep, Terraform, or Pulumi  
- **Backend Developers**: (Optional) Add or mock APIs for telemetry data  

---

## 🧰 Tech Stack

| Layer                | Technologies & Tools                     |
|----------------------|-------------------------------------------|
| **UI Framework**     | React, TypeScript, Nx Monorepo            |
| **Styling**          | TailwindCSS                               |
| **Components**       | Storybook                                 |
| **Unit Testing**     | Jest                                      |
| **CI/CD**            | GitHub Actions                            |
| **Static Analysis**  | ESLint, Prettier, SonarQube               |
| **Dependency Scan**  | Snyk, BlackDuck                           |
| **Infra as Code**    | Azure Bicep, Terraform, Pulumi            |
| **Deployment Target**| Azure App Service (or Static Web Apps)    |

---

## 🚀 Local Setup

### 1. Prerequisites

| Tool              | Version       | Install Link                                                       |
|-------------------|---------------|---------------------------------------------------------------------|
| **Node.js**       | 18.x LTS      | https://nodejs.org/en/download/                                     |
| **npm**           | 9.x or above  | Comes bundled with Node.js                                         |
| **Git**           | Latest        | https://git-scm.com/downloads                                       |
| **Nx CLI**        | ^17.x         | `npm install -g nx`                                                 |
| **Azure CLI**     | Optional      | https://aka.ms/InstallAzureCli                                      |
| **Pulumi / Terraform** | Optional | https://pulumi.com / https://developer.hashicorp.com/terraform/downloads |

(Optional) Add a `.nvmrc` file in your repo root with `18.17.1` so that `nvm use` pins the correct Node version.

### 2. Clone & Install

```bash
# Clone your fork
git clone https://github.com/kala-techies/vehicle-ui-dashboard.git
cd vehicle-ui-dashboard

# Install dependencies
npm install
````

### 3. Run Locally

```bash
# Start the development server
npm run dev
```

Open your browser at `http://localhost:3000/vehicle-ui-dashboard/`.

---

## 🔍 Available Scripts

| Command            | Description                           |
| ------------------ | ------------------------------------- |
| `npm run dev`      | Run the app in development mode       |
| `npm run build`    | Build the app for production          |
| `npm run preview`  | Preview the production build locally  |
| `npm run lint`     | Lint code with ESLint                 |
| `npm test`         | Run Jest unit tests                   |
| `npm run storybook`| Launch Storybook (component explorer) |

---

## ⚙️ CI/CD Workflow

This project uses **GitHub Actions** for automated deployment to **GitHub Pages** with the following stages:

### Build & Deploy Pipeline

1. **📥 Checkout Code** - Get the latest code from the repository
2. **🔧 Setup Node.js** - Install Node.js 18 with npm caching
3. **📦 Install Dependencies** - Install all npm packages
4. **🧹 Code Linting** - Run ESLint to check code quality
5. **🏗️ Build Application** - Compile TypeScript and build for production
6. **📄 Add .nojekyll** - Ensure GitHub Pages serves all assets correctly
7. **📤 Upload Artifacts** - Prepare build files for deployment
8. **🚀 Deploy to GitHub Pages** - Automatically deploy to production

### Deployment URL
Once deployed, your application will be available at:
```
https://[your-username].github.io/vehicle-ui-dashboard/
```

### Local Development
```bash
# Start development server
npm run dev
# Opens at http://localhost:3000/vehicle-ui-dashboard/
```

### Production Build
```bash
# Build for production
npm run build
# Preview production build
npm run preview
```

---

## 🏗️ Infrastructure as Code

Contributions welcome for any of these IaC tools:

* **Azure Bicep** (see `infra/bicep/`)
* **Terraform** modules (coming soon)
* **Pulumi** stacks (coming soon)

Feel free to add or improve provisioning scripts!

---

## 🌐 Backend Integration (Optional)

To simulate or implement real telemetry:

* **Node.js** + **Express** mock server
* **REST** or **GraphQL** APIs
* Deploy alongside the front-end or as a separate GitHub Actions job

---

## 🙌 Contributing

We welcome contributions in all areas:

* 🎨 UI Components / Storybook
* 🚀 CI/CD Workflows / GitHub Actions
* 🔐 Security Scanning (Snyk, SonarQube)
* ☁️ IaC (Azure Bicep, Terraform, Pulumi)
* 🧪 Testing (unit & E2E)
* 🌐 Backend (mock or real APIs)

Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE\_OF\_CONDUCT.md](./CODE_OF_CONDUCT.md) before starting.

---

## 💬 Community & Support

Have questions or ideas?
Start a [Discussion](https://github.com/kala-techies/vehicle-ui-dashboard/discussions) or open an Issue.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

> Let’s build this Vehicle Dashboard together — from **UI** to **DevOps** to **Cloud**! 🚘💡
