🐾 Perritos Refugio Frontend 🏠

¡Bienvenido al frontend de Huellitas, la plataforma de adopción de perritos! Este proyecto está diseñado para ser una aplicación web moderna, totalmente receptiva (responsive) y de alto rendimiento.

🚀 Stack Tecnológico

Herramienta

Versión

Descripción

Framework

Next.js 16 (App Router)

Rendimiento, Server Components y routing moderno.

Lenguaje

TypeScript

Tipado estricto para calidad y mantenimiento del código.

Estilos

Tailwind CSS

Framework utilitario para un diseño rápido y adaptable.

Pruebas

Vitest + RTL

Módulo de pruebas unitarias y de integración para asegurar la calidad del código React.

Arquitectura

Atomic Design

Organización de componentes en Átomos, Moléculas, Organismos y Templates.

Gestor de Paquetes

npm

Manejo de dependencias del proyecto.

⚙️ Configuración y Desarrollo

Requisitos

Node.js (versión 18.x o superior)

Acceso al Backend (debe estar corriendo en http://localhost:3001)

📦 Primeros Pasos

Instalar dependencias:

npm install

Configurar Variables de Entorno:
Crea el archivo .env.local basado en el .env.example y añade la URL de la API:

NEXT_PUBLIC_BACKEND_API_URL="http://localhost:3001/api/v1"

Ejecutar en modo Desarrollo:

npm run dev

La aplicación estará disponible en http://localhost:3000.

🧪 Pruebas

Para ejecutar las pruebas unitarias y ver la cobertura de código:

# Ejecutar todas las pruebas una vez

npm run test

# Ejecutar pruebas en modo vigilancia (watch mode)

npm run test:watch

# Ejecutar y generar reporte de cobertura de código

npm run test:cov

🗺️ Estructura del Proyecto (src/)

El proyecto sigue el patrón Atomic Design dentro del App Router:

src/
├── app/ # Rutas, layout raíz, configuración de Next.js
├── components/ # Atomic Design
│ ├── atoms/ # Componentes más pequeños (Button, Icon)
│ ├── molecules/ # Agrupa Átomos (NavBar, InputGroup)
│ ├── organisms/ # Agrupa Moléculas (Formulario de Adopción, Header)
│ └── templates/ # Estructura de la página (DefaultLayout)
├── services/ # Lógica de llamadas al Backend (Axios, Fetch)
├── store/ # Gestión de Estado Global (Zustand)
└── types/ # Tipos de TypeScript (Dog, User, Adopcion)

# perritos-refugio-frontend

Proyecto para un refugio de perritos rescatados de la calle en México.
