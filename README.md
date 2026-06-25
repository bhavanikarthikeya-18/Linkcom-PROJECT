# Linkcom - URL Shortener

A full-stack URL shortening web application built with Spring Boot and React.

## Features
- URL Shortening — Generate unique 8-character short codes
- Click Tracking — Every redirect is tracked and counted
- Analytics Dashboard — Visual bar chart showing clicks per day
- JWT Authentication — Secure register/login
- Redirect Engine — 302 redirect from short code to original URL

## Tech Stack
- Backend: Java 21, Spring Boot, Spring Security, JWT, MySQL
- Frontend: React 18, Vite, Tailwind CSS, Chart.js, Axios

## Setup

### Backend
1. Create MySQL database: CREATE DATABASE urlshortenerdb;
2. Copy .env.example to .env and fill in your DB credentials and JWT secret
3. Run: mvn spring-boot:run

### Frontend
1. Copy .env.example to .env
2. Run: npm install then npm run dev

## Pages
- / — Landing page
- /register — Create account
- /login — Sign in
- /dashboard — Manage and analyze your URLs

