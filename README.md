# 🚗 Car Rental Web Application

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Emotion](https://img.shields.io/badge/Styling-Emotion%20CSS-d26ac2)](https://emotion.sh/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=github-pages&logoColor=white)](https://iberikofer.github.io/react-car-rental/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> A modern, responsive web application for browsing, filtering, and booking rental cars in Ukraine. Built with React 18, Emotion styled-components, and MockAPI.

🔗 **Live Demo:** [https://iberikofer.github.io/react-car-rental/](https://iberikofer.github.io/react-car-rental/)

---

## ✨ Features

- **🏠 Interactive Landing Page:** Clean hero section with animated call-to-actions and modern glassmorphism design.
- **🚘 Car Catalog:**
  - Paginated display of vehicles (8 cards per page with "Load More" functionality).
  - High-resolution car photos, pricing, mileage, and key specifications.
  - Smooth card hover elevations and image zoom animations.
- **❤️ Favorites Management:**
  - Add or remove vehicles from favorites with animated heart buttons.
  - Persistent storage using browser `localStorage`.
  - Dedicated Favorites page with split-view vehicle details.
- **🔍 Detailed Vehicle Modal:**
  - Full car specifications (engine size, fuel consumption, features, accessories).
  - Formatted rental conditions and requirements badges.
  - Direct call-to-action button to reserve vehicle.
- **🚀 Seamless SPA Routing:**
  - Client-side routing with `react-router-dom` v6.
  - Configured SPA redirection for flawless page reloads on GitHub Pages.
- **🎨 Modern Design & Micro-animations:**
  - Smooth hover interactions, modal pop-ins, and curated color palettes.
  - Optimized typography with Google Font *Manrope*.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://reactjs.org/) |
| **Routing** | [React Router DOM v6](https://reactrouter.com/) |
| **Styling** | [Emotion Styled & CSS](https://emotion.sh/) |
| **HTTP Client** | [Axios](https://axios-http.com/) |
| **UI Components & Icons** | [React Loader Spinner](https://mhnpd.github.io/react-loader-spinner/) |
| **CI / CD & Hosting** | [GitHub Actions](https://github.com/features/actions), [GitHub Pages](https://pages.github.com/) |

---

## 📦 Getting Started

### Prerequisites

Ensure you have **Node.js** (version 18 or 20 recommended) and **npm** installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iberikofer/react-car-rental.git
   cd react-car-rental
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the local development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000/react-car-rental](http://localhost:3000/react-car-rental) to view the application in your browser.

---

## 🔧 Available Scripts

In the project directory, you can run:

- `npm start` — Runs the app in development mode.
- `npm run build` — Builds the optimized production bundle in the `build/` folder.
- `npm run lint:js` — Runs ESLint to check for code quality and syntax errors.
- `npm test` — Launches the test runner in interactive watch mode.

---

## 🚀 Deployment (GitHub Pages)

The project includes an automated GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that builds and deploys the application to the `gh-pages` branch on every push to `main`.

### Repository Setup:
1. Go to repository **Settings** > **Pages**.
2. Under **Build and deployment**:
   - **Source:** *Deploy from a branch*
   - **Branch:** `gh-pages` / `/ (root)`
3. Save the settings. Your application will be live at:
   `https://iberikofer.github.io/react-car-rental/`

---

## 📂 Project Structure

```
react-car-rental/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── 404.html                # GitHub Pages SPA redirect fallback
│   ├── index.html              # Main HTML entry with SPA script & fonts
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── component/          # Reusable UI components (Cards, Modal, Header, etc.)
│   │   ├── pages/              # Route views (Home, Cars catalog, Favourite, NotFound)
│   │   ├── App.jsx             # Main Router & Route definitions
│   │   └── App.css             # Base CSS
│   ├── index.css               # Global typography, colors, and scrollbars
│   └── index.js                # React root mount with BrowserRouter
├── package.json
└── README.md
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
