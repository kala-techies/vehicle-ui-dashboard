# 🤝 Contributing to Vehicle UI Dashboard

Welcome! 👋  
Thank you for your interest in contributing to the **Vehicle UI Dashboard** project.

This is a **real-world, open-source learning project** for both **Frontend developers** and **DevOps engineers**. It simulates a full vehicle dashboard UI and includes an end-to-end CI/CD pipeline using GitHub Actions, security integrations, and Infrastructure-as-Code deployments.

🔗 **Repository URL**: [https://github.com/kala-techies/vehicle-ui-dashboard](https://github.com/kala-techies/vehicle-ui-dashboard)

---

## 🎯 Who Can Contribute?

This project welcomes contributions from:

### 🖥️ Frontend Developers
- Build or enhance UI components (React + Nx)
- Add or improve Storybook stories
- Improve styling and responsiveness (TailwindCSS)
- Fix bugs or refactor for maintainability
- Write unit and component tests

### 🛠️ DevOps Engineers
- Extend or optimize CI/CD workflows (GitHub Actions)
- Add/Improve stages for testing, security, or deployment
- Work on Infra as Code using:
  - Azure Bicep
  - **Terraform**
  - **Pulumi**
  - ARM templates or other IAC tools
- Secure pipelines with Snyk, SonarQube, BlackDuck

### 🌐 Backend Developers (Optional Scope)
If you want to implement or mock backend functionality (e.g., API calls, vehicle telemetry data), we welcome:
- Node.js, Express, or mock API services
- Integration with frontend via REST/GraphQL
- Deployment as part of the pipeline or in a separate service

---

## 🔧 How to Contribute

### 1. Fork the Repository

Click the `Fork` button in the top-right and clone your fork:

```bash
git clone https://github.com/your-username/vehicle-ui-dashboard.git
cd vehicle-ui-dashboard
````

### 2. Create a Feature Branch

```bash
git checkout -b feature/my-contribution
```

### 3. Make Your Changes

* Follow project structure
* Run linters, tests, and build before pushing

### 4. Run Pre-Checks

```bash
npm run lint      # Code formatting
npm run test      # Run tests
npm run build     # Ensure build is successful
```

### 5. Commit and Push

```bash
git add .
git commit -m "feat: added new speedometer component"
git push origin feature/my-contribution
```

### 6. Open a Pull Request

* Go to your fork on GitHub
* Click "Compare & pull request"
* Add a clear title and detailed description

---

## ✅ Contribution Checklist

* [ ] Code is well-formatted and linted
* [ ] PR explains the change with context
* [ ] Tests added or updated
* [ ] Related CI/CD jobs updated (if needed)
* [ ] Passes all GitHub Actions checks

---

## 📁 Folder Overview

```bash
apps/
  vehicle-dashboard/         # Main UI app
libs/
  ui-components/             # Reusable components
  utils/                     # Shared functions/helpers
infra/
  bicep/                     # Azure infra templates
.github/workflows/           # CI/CD pipeline
mock-backend/                # (Optional) local/mock server
.storybook/                  # Storybook config
```

---

## 💡 Ideas to Contribute

* 📦 New dashboard components (AC controls, GPS, etc.)
* 🛠️ Add GitHub Actions stage (e.g., Cypress E2E)
* 🔐 Improve security via GitHub Actions (Snyk/BlackDuck)
* ☁️ Add Terraform/Pulumi infra as code setup
* 🌐 Backend API to simulate vehicle data (Node.js/Express)
* 📘 Improve documentation or add developer guide
* 🧪 Add E2E testing (Cypress/Playwright)

---

## 📢 Need Help?

* Open an [Issue](https://github.com/kala-techies/vehicle-ui-dashboard/issues)
* Or start a [Discussion](https://github.com/kala-techies/vehicle-ui-dashboard/discussions)

---

We’re excited to build this project with you.
Let’s make vehicle dashboards the next great playground for UI + DevOps learning. 🚀
— *The Vehicle UI Dashboard Maintainers*
