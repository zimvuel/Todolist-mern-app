# Todolist MERN App

## Highlights

- **Modern Stack:** Built with React 19, Vite, and TypeScript for a fast frontend.
- **Secure Authentication:** Features JWT authentication with HttpOnly cookies.
- **Performance Optimized:** Includes Redis integration for caching via Upstash.
- **Containerized:** Fully setup with Docker and Nginx for production readiness.
- **Styled with Tailwind:** Responsive and clean UI using TailwindCSS.

## Overview

A full-stack Todo List application built with the MERN stack (MongoDB, Express, React, Node.js), featuring authentication, real-time updates, and a modern UI. This project demonstrates a robust architecture suitable for scalable web applications.

### Authors

- [@zimvuel](https://github.com/zimvuel) - Main Developer

## Usage

_Run the entire stack with a single command using Docker._

```bash
docker compose up --build
```

The application will be available at:

- **Frontend:** `http://localhost:5173`
- **Backend:** `http://localhost:5001`
- **MongoDB:** `localhost:27017`

## Installation

To run the project locally without Docker, follow these steps:

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## Feedback and Contributing

We welcome feedback! Please open an issue if you encounter any bugs or have feature requests.

Contributions are welcome! Feel free to fork the repository and submit a pull request.
