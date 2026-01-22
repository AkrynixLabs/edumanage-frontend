# EduManage Frontend

EduManage Frontend is the **web client** for the EduManage platform.  
It is built with **Next.js** and provides the user interface for schools, administrators, teachers, students, and parents to interact with the EduManage Core API.

This application is responsible for **presentation, client-side state, and user experience**, while all **security, permissions, and data integrity** are enforced by the backend.

---

## 🎯 Purpose

The frontend exists to:

- Authenticate users via the EduManage Core API
- Provide role-based user interfaces
- Consume backend APIs securely
- Manage client-side session state
- Deliver a clean, responsive user experience

> **Important:**  
> The frontend does **not** enforce business rules or permissions.  
> The backend is the single source of truth.

---

## 🧱 Architecture Overview

```

Next.js UI
↓
Auth Context & Hooks
↓
API Service Layer (JWT attached)
↓
EduManage Core API

```

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **State Management:** React Context + Hooks
- **Styling:** (Tailwind / CSS Modules – configurable)
- **Auth Strategy:** JWT (issued by backend)

---

## 🛠️ Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Fetch / Axios (API calls)
- JWT (client-side session awareness)

---

## 📁 Project Structure

```

src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                 # Entry / redirect
│   ├── login/
│   │   └── page.tsx             # Login page
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── unauthorized/
│       └── page.tsx
│
├── components/
│   ├── ui/                      # Reusable UI components
│   ├── layout/                  # Navbar, sidebar
│   └── auth/                    # Auth-related UI
│
├── context/
│   └── AuthContext.tsx          # Global auth state
│
├── hooks/
│   ├── useAuth.ts
│   └── useApi.ts
│
├── services/
│   ├── api.ts                   # API wrapper
│   └── auth.service.ts
│
├── types/
│   ├── auth.ts
│   ├── user.ts
│   └── api.ts
│
└── lib/
└── token.ts                 # Token utilities

````

This structure is designed to **scale without refactoring**.

---

## 🔐 Authentication Model

### Backend Responsibility
- Validate credentials
- Issue JWT
- Enforce roles and permissions

### Frontend Responsibility
- Collect login credentials
- Store JWT securely (MVP: localStorage)
- Attach JWT to API requests
- Render UI based on role (UX only)

> **Security rule:**  
> Frontend role checks are for UX.  
> Backend role checks are authoritative.

---

## 🔁 Auth Flow (Frontend Perspective)

1. User enters email & password
2. Frontend calls `POST /auth/login`
3. Backend returns JWT + user info
4. Frontend stores token
5. AuthContext updates global state
6. User is redirected to dashboard

---

## 🌍 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api/v1
````

⚠️ Do not commit `.env.local`
Use `.env.example` for documentation.

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

---

### 2️⃣ Run the development server

```bash
npm run dev
```

App will be available at:

```
http://localhost:3000
```

---

## 🧪 Development Guidelines

* No business logic in components
* All API calls go through the service layer
* Use context/hooks for shared state
* Keep pages thin and declarative
* Prefer composition over prop drilling

---

## 🔒 Security Notes

* JWTs are not encrypted — treat them carefully
* Do not log tokens
* Do not trust frontend role checks
* Handle `401` globally and log users out

---

## 🗺️ Roadmap (Frontend)

* Auth foundation (login, logout, guards)
* Role-based dashboards
* User management UI
* Class & quiz UI
* Parent views
* Improved session handling (HttpOnly cookies)

---

## 🤝 Contributing

* Follow established project structure
* Keep components small and reusable
* Coordinate API changes with backend team

---

## 📄 License

This project is proprietary and owned by **Akrynix**.
Unauthorized use or distribution is prohibited.

---

© Akrynix. All rights reserved.