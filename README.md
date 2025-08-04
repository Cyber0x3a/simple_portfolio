
# Simple Portfolio

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-brightgreen.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A simple portfolio with a professional design, color theming, and easy customization. Built with React and Tailwind CSS.

> Showcase your work with a modern and customizable portfolio template.

## ✨ Table of Contents

- [✨ Features](#-features)
- [🚀 Installation](#-installation)
- [🛠️ Usage](#️-usage)
- [🎨 Customization](#-customization)
- [📦 Dependencies](#-dependencies)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

## ✨ Features

- **Professional Design**: Clean and modern design to showcase your work effectively.
- **Color Theming**: Easily customizable color schemes to match your personal brand.
- **Easy Customization**: Simple configuration and component structure for quick modifications.
- **Responsive Layout**: Optimized for various screen sizes and devices.
- **React Components**: Built with reusable React components for maintainability.
- **Tailwind CSS**: Utilizes Tailwind CSS for styling and theming.

## 🚀 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Cyber0x3a/simple_portfolio.git
   cd simple_portfolio
   ```

2. **Install dependencies:**

   Using Yarn:
   ```bash
   yarn install
   ```

   Using npm:
   ```bash
   npm install
   ```

## 🛠️ Usage

1. **Start the development server:**

   Using Yarn:
   ```bash
   yarn start
   ```

   Using npm:
   ```bash
   npm start
   ```

2. **Open your browser and navigate to `http://localhost:3000` to view the portfolio.**

## 🎨 Customization

### Color Theming

You can customize the color theme by modifying the Tailwind CSS configuration file (`tailwind.config.js`).

1.  **Open `tailwind.config.js` in your code editor.**
2.  **Modify the `theme.extend.colors` section to add or override color variables.**

    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            primary: '#007BFF',
            secondary: '#6C757D',
            accent: '#FFC107',
          },
        },
      },
      plugins: [],
    }
    ```

3.  **Update your React components to use these new color variables.**

### Component Customization

You can modify the React components in the `src/components` directory to customize the content and layout of your portfolio.

1.  **Navigate to the `src/components` directory.**
2.  **Edit the desired component files (e.g., `src/components/About.js`, `src/components/Projects.js`).**
3.  **Modify the JSX and CSS to fit your needs.**

## 📦 Dependencies

The project uses the following main dependencies:

| Package                       | Version | Description                                                                                                |
| :---------------------------- | :------ | :--------------------------------------------------------------------------------------------------------- |
| `react`                       | ^19.1.1 | A JavaScript library for building user interfaces.                                                        |
| `react-dom`                   | ^19.1.1 | Provides DOM-specific methods that are useful for managing apps in the browser.                           |
| `tailwindcss`                 | ^3.4.1  | A utility-first CSS framework for rapidly building custom designs.                                       |
| `axios`                       | ^1.11.0 | Promise based HTTP client for the browser and node.js                                                    |
| `clsx`                        | ^2.1.1  | A tiny (228B) utility for constructing `className` strings conditionally and efficiently.                  |
| `date-fns`                    | ^4.1.0  | Modern JavaScript date utility library.                                                                   |
| `lucide-react`                | ^0.536.0 | Beautifully simple, pixel-perfect icons.                                                                 |
| `react-router-dom`            | ^7.7.1  | DOM bindings for React Router.                                                                            |
| `zod`                         | ^4.0.14  | TypeScript-first schema declaration and validation with static type inference.                              |
| `@radix-ui/react-*`           | ^1.x.x  | Set of unstyled React components for building high-quality user interfaces.                               |
| `class-variance-authority`    | ^0.7.1  | Utility for writing composable class names with conditional variations.                                   |
| `tailwind-merge`              | ^3.3.1  | Utility to efficiently merge Tailwind CSS classes in JavaScript without style conflicts.                  |
| `tailwindcss-animate`         | ^1.0.7  | Plugin for Tailwind CSS that provides CSS animations.                                                     |

For a complete list of dependencies, refer to the `package.json` file.

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1.  **Fork the repository.**
2.  **Create a new branch for your feature or bug fix.**
3.  **Make your changes and commit them with descriptive commit messages.**
4.  **Push your changes to your fork.**
5.  **Submit a pull request to the main repository.**

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
