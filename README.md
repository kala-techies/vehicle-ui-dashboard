# 🚗 Vehicle UI Dashboard

A **component-based dashboard UI** for vehicle systems — designed to help **UI developers** and **DevOps engineers** collaborate and gain hands-on experience building and deploying modern front-end applications with a complete CI/CD pipeline.

> ✅ Whether you're a **frontend beginner**, a **DevOps practitioner**, or an **infra automation enthusiast**, this project gives you a real-world playground to practice and contribute.

**🔗 GitHub Repo:** [https://github.com/kala-techies/vehicle-ui-dashboard](https://github.com/kala-techies/vehicle-ui-dashboard)

---

## 🧠 Project Purpose

- Enable UI developers to build, test, and ship components in a real-world setup
- Help DevOps engineers implement CI/CD pipelines with full security and deployment strategy
- Encourage collaboration across UI, DevOps, Infra, and Backend contributors
- Provide modular, production-style architecture with room for growth

---

## 📸 Demo

> Storybook and screenshots will be available soon.

---

## 🧰 Tech Stack

| Layer                | Technology Used                      |
|----------------------|---------------------------------------|
| UI Framework         | React + Nx Monorepo                   |
| Styling              | TailwindCSS                           |
| Component Library    | Storybook                             |
| Unit Testing         | Jest                                  |
| CI/CD                | GitHub Actions                        |
| Static Analysis      | SonarQube, ESLint                     |
| Dependency Scanning  | Snyk / BlackDuck                      |
| Infra-as-Code        | Bicep, Terraform, Pulumi              |
| Deployment Targets   | Azure (can be extended to others)     |

---

## 🧑‍💻 Local Setup Instructions

### ✅ Prerequisites

Install these tools **before cloning** the project:

| Tool               | Version            | Installation Link                                      |
|--------------------|--------------------|---------------------------------------------------------|
| Node.js            | 18.x LTS           | https://nodejs.org/en/download/                        |
| npm                | 9.x or higher      | Comes with Node.js                                     |
| Git                | Latest             | https://git-scm.com/downloads                          |
| Nx CLI             | ^17.x              | `npm install -g nx`                                    |
| Azure CLI          | (Optional)         | https://learn.microsoft.com/en-us/cli/azure/install-azure-cli |
| Pulumi / Terraform | (Optional)         | https://www.pulumi.com / https://developer.hashicorp.com/terraform/downloads |

---

### 🔧 Clone & Start the App

```bash
# 1. Clone the repo
git clone https://github.com/kala-techies/vehicle-ui-dashboard.git
cd vehicle-ui-dashboard

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
````

By default, the app runs at: [http://localhost:4200](http://localhost:4200)

---

## 🔍 Useful Scripts

| Command            | Purpose                                |
| ------------------ | -------------------------------------- |
| `npm start`        | Run development server                 |
| `npm run build`    | Build the production app               |
| `npm run lint`     | Lint the code using ESLint             |
| `npm test`         | Run unit tests with Jest               |
| `npx nx storybook` | Launch Storybook UI component explorer |

---

## ⚙️ CI/CD Workflow (GitHub Actions)

> A complete pipeline for frontend apps with security and deployment layers.

**Pipeline Stages:**

1. Checkout Code
2. Install Dependencies
3. Build Frontend
4. Linting
5. Unit Tests
6. Nx Affected Check (optional)
7. Static Code Analysis (SonarQube)
8. Dependency & License Scan (Snyk / BlackDuck)
9. Build & Deploy Storybook
10. Build Infrastructure Code (Bicep / Terraform / Pulumi)
11. Deploy Infrastructure
12. Deploy to Dev Environment
13. Deploy to Preview / Integration
14. Create Version Tag
15. Deploy to Production
16. End-to-End Tests (optional)

> 🔐 All CI stages follow **security-first** principles and use scanning tools to flag vulnerabilities early.

---

## 🏗️ Infra-as-Code Contributions

This project welcomes **infra-as-code contributions** using any of the following:

* ✅ Azure Bicep (starter templates available)
* ✅ Terraform modules (WIP)
* ✅ Pulumi (WIP)

You can help us build cross-platform provisioning setups!

---

## 🖥️ Backend Developers Welcome!

If you'd like to:

* Build backend mock services
* Integrate with real APIs
* Set up GraphQL or REST APIs

You’re encouraged to join and contribute your services to this frontend platform.

---

## 🙌 How to Contribute

We love contributions!

You can contribute in one or more areas:

* 👩‍🎨 UI Components / Features
* 🚀 CI/CD Improvements
* 🔐 Security Enhancements
* ☁️ Infra Automation (Pulumi, Terraform, Bicep)
* 🧪 Tests (unit/e2e)
* 🛠️ Backend APIs

> 📚 Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE\_OF\_CONDUCT.md](./CODE_OF_CONDUCT.md) before contributing.

---

## 💬 Community

Got questions or ideas?

Start a [GitHub Discussion](https://github.com/kala-techies/vehicle-ui-dashboard/discussions) or open an issue.

---

## 📃 License

This project is licensed under the [MIT License](./LICENSE)

---

Let’s build and scale this vehicle dashboard — together!
From **UI development** to **CI/CD** to **cloud provisioning**, there’s room for all tech tracks here. 🌟

