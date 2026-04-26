# 🌟 Modern React Blog Platform

A high-end, responsive, and fully functional blog platform built with modern web technologies. This project focuses on a clean UI/UX design, scalable component architecture, and optimal performance.

[![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)
[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-success?style=for-the-badge&logo=github)](https://pages.github.com/)

## 🚀 Live Demo
**[Click here to view the live project](#)** *(Replace '#' with your actual GitHub Pages URL)*

---

## ✨ Features

* **🌓 Dark/Light Mode:** Seamless theme toggling for an enhanced user reading experience.
* **📄 Pagination:** Efficiently browse through articles with a built-in paginated component.
* **📱 Fully Responsive Design:** Mobile-first approach ensuring a flawless UI across all devices using Tailwind CSS.
* **🏗️ Scalable State Management:** Centralized application state handling using Redux Toolkit.
* **📰 Dynamic Routing & Views:** Dedicated pages for Home, Article Details, and a Newsletter subscription form.
* **✨ High-End UI:** Minimalist and clean visual components (Article Cards, Hero sections, etc.).

---

## 🛠️ Tech Stack

* **Core:** React, TypeScript
* **Build Tool:** Vite (for lightning-fast HMR and optimized builds)
* **Styling:** Tailwind CSS, PostCSS
* **State Management:** Redux Toolkit (`react-redux`, `@reduxjs/toolkit`)
* **Linting/Formatting:** ESLint

---

## 📂 Project Structure

A quick look at the top-level files and directories within the `src` folder:

```text
src/
├── Components/
│   ├── Cards/              # Article display cards
│   ├── Footer/             # Global footer component
│   ├── HeaderComponent/    # Navbar and Theme Toggle
│   ├── HomeComponent/      # Home sections (Title, Recent Posts, Pagination)
│   └── Pages/              # Main application views (ArticleDetails, NewsLetter)
├── Data/
│   └── articles.ts         # Mock data for rendering the UI
├── Redux/
│   ├── articleSlice.ts     # Redux slice for article state
│   ├── hooks.ts            # Typed Redux hooks (useAppDispatch, useAppSelector)
│   └── store.ts            # Global Redux store configuration
├── App.tsx                 # Root application component
├── main.tsx                # Application entry point
└── index.css               # Global styles and Tailwind directives
```
## 💻 Local Setup & Installation
To run this project locally, follow these steps:

1. **Clone the repository:**
 ```bash
 git clone [https://github.com/Eng-Afraa-Saleh/TheBlogs-Website.git](https://github.com/Eng-Afraa-Saleh/TheBlogs-Website.git)
cd TheBlogs-Website
 ```
2. **Install dependencies:**
 ```bash
npm install
```
3. **Start the development server:**
 ```bash
npm run dev
```
4. **Build for production:**
 ```bash
npm run build
```