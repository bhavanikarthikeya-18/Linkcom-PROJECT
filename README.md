# Linkcom - URL Shortener

A full-stack URL shortening web application built with **Spring Boot** and **React**.

## 🚀 Features
- **URL Shortening** — Generate unique 8-character short codes for any URL
- **Click Tracking** — Every redirect is tracked and counted
- **Analytics Dashboard** — Visual bar chart showing clicks per day
- **JWT Authentication** — Secure register/login with JSON Web Tokens
- **Redirect Engine** — 302 redirect from short code to original URL

## 🛠️ Tech Stack

**Backend**
- Java 21 + Spring Boot 4.1
- Spring Security 7 + JWT
- Spring Data JPA + Hibernate
- MySQL 8

**Frontend**
- React 18 + Vite
- Tailwind CSS
- React Query
- Chart.js
- MUI (Material UI)
- Axios

## ⚙️ How It Works
1. User registers and logs in to get a JWT token
2. Paste any long URL → system generates a random 8-character code
3. Short code + original URL stored in MySQL database
4. Anyone visiting the short link gets a HTTP 302 redirect
5. Every click is recorded and visualized on the analytics dashboard

## 🏃 Running Locally

### Prerequisites
- Java 21+
- Maven
- MySQL 8
- Node.js 18+

### Backend Setup

1. Clone the repo
2. Create MySQL database:
```sql
CREATE DATABASE urlshortenerdb;
```

3. Copy the env example file:
```bash
cp .env.example .env
```

4. Fill in your values in `.env`:
```
DB_USERNAME=your_mysql_username
DB_PASSWORD=your_mysql_password
JWT_SECRET=your_jwt_secret_key
```

5. Copy application.properties:
```bash
cp src/main/resources/application.properties.example src/main/resources/application.properties
```

6. Run the backend:
```bash
mvn spring-boot:run
```
Backend runs on → `http://localhost:8080`

---

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd url-shortener-sb-frontend
```

2. Copy env example:
```bash
cp .env.example .env
```

3. Install dependencies and run:
```bash
npm install
npm run dev
```
Frontend runs on → `http://localhost:5173`

## 📸 Pages
- `/` — Landing page
- `/register` — Create an account
- `/login` — Sign in
- `/dashboard` — Manage and analyze your short URLs
- `/about` — About Linkcom

## 🔒 Environment Variables

### Backend `.env`
| Variable | Description |
|---|---|
| `DB_HOST` | MySQL host (default: localhost) |
| `DB_PORT` | MySQL port (default: 3306) |
| `DB_NAME` | Database name |
| `DB_USERNAME` | MySQL username |
| `DB_PASSWORD` | MySQL password |
| `JWT_SECRET` | Secret key for JWT signing |
| `JWT_EXPIRATION` | Token expiry in ms (default: 86400000) |

### Frontend `.env`
| Variable | Description |
|---|---|
| `VITE_BACKEND_URL` | Backend URL |
| `VITE_REACT_FRONT_END_URL` | Frontend URL |
