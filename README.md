# My Portfolio

This is my personal portfolio website built with React and Vite.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design
- Interactive project showcase
- Contact form with EmailJS integration
- Smooth animations and transitions
- Easy navigation with React Router

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio
npm install
```

## Usage

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server with hot module replacement (HMR).

To build the project for production, run:

```bash
npm run build
```

This will create a dist directory with the production build.

To preview the production build, run:

```bash
npm run preview
```

## Configuration

# EmailJS

To configure EmailJS for the contact form, follow these steps:

1. Sign up at EmailJS and create a new service.

2. Note down your SERVICE_ID, TEMPLATE_ID, and USER_ID.

3. Create a .env file in the root of your project and add your EmailJS credentials:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

4. Make sure to add .env to your .gitignore file to keep your credentials secure.

## Deployment

To deploy the project to GitHub Pages, follow these steps:

1. Ensure your package.json file includes the following scripts and homepage field:

```bash
{
  "homepage": "https://junhayashii.github.io/react-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Run the deployment script:

```bash
npm run deploy
```

This will build the project and deploy the dist directory to the gh-pages branch of your repository, making it accessible at https://junhayashii.github.io/react-portfolio.

## Technologies

- **HTML**: The standard markup language for creating web pages.
- **CSS**: A stylesheet language used for describing the presentation of a document written in HTML.
- **JavaScript**: A programming language commonly used to create interactive effects within web browsers.
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **EmailJS**: A service to send emails directly from your client-side JavaScript code.
- **React Router**: A standard library for routing in React.
- **GitHub Pages**: A service for hosting static websites directly from a GitHub repository.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, used to ensure code quality.
- **Font Awesome**: A popular icon set and toolkit used to add vector icons and social logos to your website.
