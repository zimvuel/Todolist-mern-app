# Todolist MERN App

A full-stack Todo List application built with the MERN stack (MongoDB, Express, React, Node.js), featuring authentication, real-time updates, and a modern UI.

## Features

### Frontend
- **React 19 & Vite:** Fast, modern frontend development.
- **TypeScript:** Type-safe code for better maintainability.
- **TailwindCSS:** Utility-first CSS framework for rapid and responsive UI design.
- **State Management:** SWR for data fetching and caching.
- **Icons:** React Icons.
- **Production Ready:** Served via Nginx in Docker.

### Backend
- **Node.js & Express:** Robust server-side framework.
- **MongoDB & Mongoose:** NoSQL database for flexible data storage.
- **Authentication:** Secure user authentication using JWT and HttpOnly cookies.
- **Redis via Upstash:** Integration for caching/performance.
- **Security:** Bcrypt for password hashing, CORS configuration.

## Tech Stack

- **Frontend:** React, TypeScript, Vite, TailwindCSS, Axios, SWR
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Cookie-Parser
- **Database:** MongoDB
- **DevOps:** Docker, Docker Compose, Nginx

## Prerequisites

- Node.js 
- MongoDB 
- Docker

## Running Locally

### 1. Backend Setup

Navigate to the `server` directory:

```bash
cd server
npm install
npm run dev
```
The backend will start on `http://localhost:5001`.

### 2. Frontend Setup

Navigate to the `client` directory:

```bash
cd client
npm install
npm run dev
```
The frontend will start on `http://localhost:5173`.

## Running with Docker

This project includes Docker configuration for easy deployment.

1. Ensure Docker and Docker Compose are installed.
2. Run the following command in the root directory:

```bash
docker compose up --build
```

This will start:
- **Backend:** `http://localhost:5001`
- **Frontend:** `http://localhost:5173`
- **MongoDB:** `localhost:27017`
