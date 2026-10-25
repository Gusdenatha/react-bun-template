# React Bun Template

Starter template frontend berbasis React, TypeScript, Bun, dan Vite yang dirancang agar mudah digunakan kembali untuk berbagai proyek.

## Teknologi

- React
- TypeScript
- Bun
- Vite
- React Router
- TanStack Query

## Persyaratan

- Bun sudah terpasang
- Git (untuk version control)

## Instalasi

```bash
bun install
```

## Menjalankan Development Server

```bash
bun run dev
```

## Build Production

```bash
bun run build
```

## Struktur Folder

```text
src/
├── app/        # App dan provider global
├── assets/     # Aset frontend
├── features/   # Fitur berdasarkan domain
├── routes/     # Konfigurasi routing
├── shared/     # Komponen dan utilitas bersama
└── main.tsx    # Entry point
```

## Environment Variables

Salin `.env.example` menjadi `.env`, lalu sesuaikan konfigurasi sesuai kebutuhan proyek.

Jangan menyimpan secret atau kredensial privat di variabel berawalan `VITE_`, karena variabel tersebut dapat terekspos ke browser.