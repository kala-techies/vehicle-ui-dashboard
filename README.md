# 🚗 Vehicle UI Dashboard

A **component-driven** React + Nx monorepo that simulates a modern vehicle dashboard UI.  
Designed to give **frontend beginners** and **DevOps/Infra engineers** hands-on experience building, testing, and deploying a real-world front-end application with a full CI/CD pipeline.

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
npm start
```

Open your browser at `http://localhost:4200`.

---

## 🔍 Available Scripts

| Command            | Description                           |
| ------------------ | ------------------------------------- |
| `npm start`        | Run the app in development mode       |
| `npm run build`    | Build the app for production          |
| `npm run lint`     | Lint code with ESLint                 |
| `npm test`         | Run Jest unit tests                   |
| `npx nx storybook` | Launch Storybook (component explorer) |

---

## ⚙️ CI/CD Workflow

This project’s GitHub Actions pipeline has **18 stages**, including:

1. **Checkout Code**
2. **Install Dependencies**
3. **Build Frontend**
4. **Lint Code**
5. **Run Unit Tests**
6. **Nx Affected** (optional)
7. **Static Analysis** with SonarQube
8. **Dependency & License Scan** (Snyk / BlackDuck)
9. **Build Storybook**
10. **Deploy Storybook**
11. **Build Infrastructure** (Bicep / Terraform / Pulumi)
12. **Deploy Infra to Azure**
13. **Deploy to Development**
14. **Deploy to Preview/Integration**
15. **Create Version Tag**
16. **Deploy to Integration Environment**
17. **Run E2E Tests** (optional)
18. **Deploy to Production**

Each stage enforces a security-first approach and fails fast on any vulnerability.

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
