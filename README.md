# 🐾 Huellitas - Refugio de Perritos

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

> **Una plataforma moderna para conectar huellitas con nuevos hogares.**  
> Este proyecto facilita la adopción de perritos rescatados, conectando a refugios y rescatistas con adoptantes responsables a través de una experiencia de usuario fluida y amorosa.

---

## ✨ Características Principales

- **🎨 Diseño UI/UX Premium:** Interfaz moderna, limpia y *responsive*, construida con **Tailwind CSS**.
- **🔐 Autenticación Segura:** Sistema de registro y login con roles diferenciados (**Adoptante** y **Rescatista**).
- **⚡ Alto Rendimiento:** Optimización gracias a **Next.js App Router** y Server Components.
- **📱 Mobile First:** Experiencia perfecta en dispositivos móviles, tablets y escritorio.
- **🔄 Gestión de Estado Eficiente:** Uso de **Zustand** para estado global y **TanStack Query** para estado del servidor.

---

## �️ Stack Tecnológico

La aplicación está construida sobre bases sólidas para garantizar escalabilidad y mantenibilidad:

| Categoría | Tecnología | Descripción |
|-----------|------------|-------------|
| **Core** | ![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white) | Framework React de producción (App Router). |
| **Lenguaje** | ![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white) | Superset de JS para un código robusto y tipado. |
| **Estilos** | ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white) | Framework CSS *utility-first* para diseño ágil. |
| **Estado** | ![Zustand](https://img.shields.io/badge/-Zustand-orange) | Manejo de estado global minimalista y rápido. |
| **Data Fetching** | ![TanStack Query](https://img.shields.io/badge/-TanStack_Query-FF4154?logo=react-query&logoColor=white) | Gestión asíncrona de datos del servidor. |
| **Testing** | ![Vitest](https://img.shields.io/badge/-Vitest-6E9F18?logo=vitest&logoColor=white) | Pruebas unitarias rápidas y ligeras. |

---

## 🏗️ Arquitectura del Proyecto

Este proyecto sigue una arquitectura modular y escalable, implementando **Atomic Design** para los componentes y separando claramente las responsabilidades.

### 📂 Estructura de Directorios

```bash
src/
├── 📂 app/                 # Configuración de rutas (App Router)
│   ├── 📂 (auth)/          # Rutas de autenticación (Login, Register) - Layout dedicado
│   ├── 📂 (main)/          # Rutas principales de la app - Layout con Header/Footer
│   └── layout.tsx          # Root Layout (Providers, Fonts)
│
├── 📂 components/          # Atomic Design System
│   ├── 📂 atoms/           # Componentes indivisibles (Button, Input, Icon)
│   ├── 📂 molecules/       # Grupos de átomos (FormField, SearchBar)
│   └── 📂 organisms/       # Secciones complejas (Header, Footer, AdoptionForm)
│
├── 📂 store/               # Stores de Zustand (Global State)
│   └── useAuthStore.ts     # Lógica de sesión y autenticación
│
├── 📂 providers/           # Context Providers
│   └── QueryProvider.tsx   # Configuración de TanStack Query
│
└── 📂 lib/                 # Utilidades y configuraciones
```

### 🧩 Patrones de Diseño

1.  **Atomic Design:** Permite construir interfaces consistentes reutilizando componentes desde lo más básico (átomos) hasta lo más complejo (organismos).
2.  **Route Groups:** Uso de `(auth)` y `(main)` en Next.js para aplicar diferentes ***Layouts*** sin afectar la URL final.
    *   `Register/Login`: Sin Header/Footer para minimizar distracciones.
    *   `Home/Dashboard`: Layout completo con navegación.
3.  **Server & Client Components:** Separación estratégica para optimizar el SEO y la interactividad.

---

## 🚀 Comenzando

Sigue estos pasos para levantar el entorno de desarrollo localmente.

### Prerrequisitos
*   Node.js (v18 o superior)
*   npm o pnpm

### Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/perritos-refugio-frontend.git
    cd perritos-refugio-frontend
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env.local` en la raíz:
    ```bash
    NEXT_PUBLIC_API_URL="http://localhost:3001/api/v1"
    ```

4.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

¡Listo! Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🧪 Pruebas y Calidad

Aseguramos la calidad del código mediante **Vitest** y **React Testing Library**.

```bash
# Ejecutar pruebas unitarias
npm run test

# Ejecutar pruebas en modo watch
npm run test:watch

# Ver cobertura de código
npm run test:cov
```

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si quieres mejorar Huellitas:

1.  Haz un Fork del proyecto.
2.  Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`).
3.  Haz tus commits (`git commit -m 'Add some AmazingFeature'`).
4.  Haz Push (`git push origin feature/AmazingFeature`).
5.  Abre un Pull Request.

---

Hecho con ❤️ por **Carlos Alberto Lira** 🐾.
