# Personal Portfolio Website

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-green?logo=netlify)

## Live Demo
🔗 https://prarthikothari-portfolio.netlify.app

## Overview

This project is a **personal portfolio website** built using **React and Bootstrap**. It showcases my skills, projects, education, and achievements in a clean, responsive layout. 

The portfolio includes sections for **skills, projects, education, achievements, and contact information**, along with links to my professional profiles.

---

## Technologies Used

* **React.js** – Frontend framework for building reusable components
* **Bootstrap 5** – Responsive layout and UI styling
* **Bootstrap Icons** – Icons for social media and UI elements
* **JavaScript (ES6+)** – Application logic and dynamic rendering
* **HTML5 & CSS3** – Structure and styling
* **Netlify** – Deployment and hosting
* **Git & GitHub** – Version control and repository management

---

## Project Structure

```
portfolio/
│
├── public/
│   ├── images/
│   └── index.html
│
├── src/
│   ├── Components/
│   │   ├── Navbar.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Education.js
│   │   ├── Achievements.js
│   │   └── Contact.js
│   │
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
```

---

## Development Process

### 1. Project Setup

* The project was initialized using **Create React App**.

```bash
npx create-react-app portfolio
cd portfolio
npm start
```

* Bootstrap and Bootstrap Icons were installed to simplify responsive UI development.

* Bootstrap styles were imported into the React project.

---

### 2. Component-Based Architecture

The application was built using **React components** to improve code organization and reusability.

Main components:

* **Navbar** – Navigation menu with section links
* **Skills** – Displays skills with icons and styling
* **Projects** – Project cards dynamically rendered using mapping
* **Education** – Academic background
* **Achievements** – Certifications and awards
* **Contact** – Social media links and contact details

---

### 3. Dynamic Rendering

Instead of repeating HTML for each project or skill, arrays were created and rendered using **React's `map()` function**.

Example:

```javascript
{projects.map((project) => (
  <ProjectCard key={project.id} {...project} />
))}
```

This approach improves scalability and makes it easier to add new projects.

---

### 4. Responsive Design

Bootstrap’s grid system (`row`, `col-md-*`) was used to ensure the site is responsive across:

* Desktop
* Tablet
* Mobile devices

Cards, icons, and sections automatically adjust based on screen size.

---

## Deployment Process

The portfolio is deployed using **Netlify**.

### Step 1: Push Code to GitHub

```bash
git add .
git commit -m "Initialize project using Create React App"
git push origin master
```

### Step 2: Connect GitHub Repository to Netlify

1. Logged in to Netlify
2. Clicked **Add new site → Import from Git**
3. Selected the GitHub repository
4. Configured build settings:
```
Build command: npm run build
Publish directory: build
```

### Step 3: Automatic Deployment

Every time changes are pushed to GitHub, Netlify automatically rebuilds and deploys the site.

---

## Challenges Faced and Solutions

### 1. ESLint Errors During Deployment

**Problem:**
Netlify failed to build because **Create React App treats warnings as errors when `CI=true`**.

---

### 2. Repeated Code for Projects

**Problem:**
Multiple project cards required repeated markup.

**Solution:**
Used **React mapping with a projects data array**, improving maintainability.

---

### 3. Ensuring Responsive Design Across Devices

**Problem:**
Some sections initially appeared misaligned or crowded on smaller screens such as mobile devices.

**Solution:**
Bootstrap’s responsive grid system and utility classes were used to adjust layouts for different screen sizes. Columns were structured using classes such as **col-md-3, col-sm-6, and col-12** to ensure consistent responsiveness.

---

## Features

* Responsive portfolio design
* Dynamic project rendering using React
* Bootstrap UI components
* Social media integration
* Accessible HTML (alt tags, proper links)
* Continuous deployment with Netlify

---

## Future Improvements

* Add animations using **Framer Motion**
* Implement **dark/light theme toggle**
* Add a **contact form with email integration**
* Optimize images for faster loading
* Improve SEO and accessibility

---

## Author

**Prarthi Kothari**

* GitHub: https://github.com/PrarthiKothari
* LinkedIn: https://www.linkedin.com/in/prarthi-kothari28/

---

© 2026 Prarthi Kothari. All Rights Reserved.
