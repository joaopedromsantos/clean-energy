# Clean Energy Lead Simulation Platform

A fullstack application built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Prisma ORM**, **NextAuth**, **Zod**, and **React Hook Form**.  
This project simulates energy bill savings, captures leads, and provides an admin dashboard for lead management.

---

## 🚀 Objective

Develop a fullstack platform for Clean Energy, a renewable energy company, to capture leads via a simulation tool. The platform collects user data, calculates potential savings, and stores leads for the commercial team to follow up.

---

## 🖥️ Features

- **Public Simulation Flow**
  - Collects energy bill value, city, state, and supply type (Monophase, Biphase, Triphase)
  - Collects lead data: name, email, phone, CPF
  - Displays estimated savings (25% discount) for 1, 3, and 5 years

- **Admin Panel**
  - Login page for administrators
  - Protected dashboard listing all captured leads (name, city, state, bill value)
  - Ability to delete leads
  - Logout and reload functionality

---

## 🗂️ Project Structure

```
src/
  app/
    globals.css
    layout.tsx
    not-found.tsx
    (simulation)/
      page.tsx
    admin/
      page.tsx
      login/
        page.tsx
    api/
      auth/
        [...nextauth]/
          route.ts
      leads/
        route.ts         # GET and POST for leads
        [id]/
          route.ts       # DELETE for a lead
  components/
  lib/
  schemas/
  services/
  types/
middleware.ts
prisma/
  migrations/
  schema.prisma
  seed.ts
public/
  images/
    logo.svg
.env             # You must create your own
.example.env
.docker-compose.yml
README.md
...
```

---

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Prisma ORM** (PostgreSQL)
- **NextAuth** (Credentials provider)
- **Zod** (Schema validation)
- **React Hook Form**
- **Docker** (for database)
- **Lucide React** (icons)
- **Axios** (HTTP requests)
- **bcryptjs** (password hashing)
- **jsonwebtoken** (JWT handling)

---

## ⚡ Getting Started

### 1. **Clone the repository**

```bash
git clone https://github.com/joaopedromsantos/clean-energy.git
cd clean-energy
```

### 2. **Install dependencies**

```bash
npm install
# or
yarn install
```

### 3. **Set up environment variables**

- Copy `.example.env` to `.env` and fill in the required values.

### 4. **Start PostgreSQL with Docker**

```bash
docker-compose up -d
```

### 5. **Run Prisma migrations and generate client**

```bash
npx prisma migrate dev
npx prisma generate
```

### 6. **Seed the database (creates the first admin user)**

```bash
npx prisma db seed
```

- Default admin credentials:
  - **Email:** `admin@admin.com`
  - **Password:** `admin`

### 7. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

---

## 🧑‍💻 Usage

- **Simulation Page:**  
  Accessible at `/` — fill in the form to simulate savings and submit your lead data.

- **Admin Login:**  
  Accessible at `/admin/login` — only admins can log in.

- **Admin Dashboard:**  
  Accessible at `/admin` — view, delete, and reload leads.  
  _**Protected route:**_ Only authenticated admins can access.

---

## 🔒 Authentication & Authorization

- Uses **NextAuth** with credentials provider.
- Only users with the `admin` role can access `/admin`.
- The admin panel is protected both by server logic and middleware.

---

## 🗃️ Database

- **Prisma ORM** with PostgreSQL.
- See and manage your data visually with Prisma Studio:

```bash
npx prisma studio
```


## 📝 Prisma Schema

```prisma
model Leads {
  id                String   @id @default(uuid())
  energyBillValue   Float
  city              String
  state             String
  supplyType        String
  fullName          String
  email             String  
  phone             String
  cpf               String   @unique
  createdAt         DateTime @default(now())
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  role      String   @default("user")
  createdAt DateTime @default(now())
}
```

---

## 📝 Useful Prisma Commands

- `npx prisma migrate dev` — Apply database migrations
- `npx prisma generate` — Generate Prisma client
- `npx prisma studio` — Open Prisma Studio (web UI for DB)
- `npx prisma db seed` — Seed the database with the default admin

---

## ⚠️ Important Notes

- **Environment Variables:**  
  You must create your own `.env` file based on `.example.env`.

- **Admin Access:**  
  The admin panel is only accessible with the seeded credentials.  
  Run the seed script before first use.

- **Docker:**  
  The project expects a PostgreSQL instance running via Docker Compose.

---

## 📁 Folder Structure & Architecture

folder structure follows Next.js 15 and modern best practices.
- **API routes** are in `src/app/api`.
- **Admin and simulation pages** are separated.
- **Components, services, schemas, and types** are modularized.
- **Prisma** and **seed** scripts are in the `prisma` folder.
- **Middleware** is used for route protection.


---

## 📄 License

MIT

---
