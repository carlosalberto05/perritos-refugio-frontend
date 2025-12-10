---
description: Plan de refactorización de arquitectura frontend
---

# Plan de Refactorización - Huellitas Frontend

## 🎯 Objetivo
Optimizar la arquitectura del proyecto siguiendo Atomic Design estrictamente, eliminando redundancias y mejorando la organización del código SIN alterar el diseño visual final.

## 📊 Análisis Actual

### Stack Tecnológico
- **Framework**: Next.js 16 + React 19
- **Styling**: Tailwind CSS v4
- **State**: Zustand + React Query
- **UI Primitives**: Radix UI (@radix-ui/react-dialog)
- **Icons**: Lucide React + React Icons
- **Testing**: Vitest + Testing Library

### Estructura de Componentes
```
src/components/
├── atoms/          ✅ Button, Input, Image (bien ubicados)
├── molecules/      ⚠️  VACÍA (preparada para futuro)
├── organisms/      ⚠️  Contiene Dialog, Modal, Header, Footer, cards
└── templates/      ⚠️  VACÍA (preparada para futuro)
```

## 🔴 Problemas Identificados

### 1. **Duplicación: Dialog vs Modal**
- `Dialog.tsx`: Wrapper de Radix UI (profesional, accesible, animado)
- `Modal.tsx`: Implementación custom (no se usa en ningún lado)
- **Solución**: Eliminar Modal.tsx, mantener solo Dialog.tsx

### 2. **utils.ts mal ubicado**
- Está en `/organisms/utils.ts` pero es utilidad global
- **Solución**: Mover a `/lib/utils.ts`

### 3. **BaseCard no usa helper cn**
- Tiene lógica manual de concatenación de clases
- **Solución**: Refactorizar para usar `cn` helper

### 4. **No hay centralización de utils**
- Falta `/lib` folder para utilidades compartidas
- **Solución**: Crear `/src/lib/utils.ts`

## ✅ Plan de Ejecución (Paso a Paso)

### Paso 1: Crear estructura `/lib` centralizada
```bash
mkdir -p src/lib
```

### Paso 2: Mover y mejorar utils
- Mover `src/components/organisms/utils.ts` → `src/lib/utils.ts`
- Mejorar el helper `cn` para manejar más casos

### Paso 3: Actualizar imports en Dialog.tsx
- Cambiar `import { cn } from "./utils"` → `import { cn } from "@/lib/utils"`

### Paso 4: Refactorizar BaseCard
- Usar `cn` helper en lugar de lógica manual

### Paso 5: Eliminar Modal.tsx (no se usa)
- Verificar que NO se esté usando en ningún lado
- Eliminar Modal.tsx y Modal.test.tsx

### Paso 6: Mover Dialog a estructura correcta
**Análisis**: Dialog es un componente de Radix UI, ¿debería estar en organisms?
- ✅ SÍ: Es un organismo porque compone varios primitivos
- Pero podría organizarse mejor dentro de `/organisms/dialogs/` si hay múltiples tipos

**Decisión**: Mantener en `/organisms/` por ahora (es correcto según Atomic Design)

### Paso 7: Organizar Cards
- Las cards están bien ubicadas en `/organisms/cards/`
- Solo necesitan usar `cn` helper

### Paso 8: Crear alias de importación
- Verificar que `@/` esté configurado en tsconfig.json
- Facilita imports limpios

## 🎨 Atomic Design - Validación

### ✅ Átomos (Correctos)
- Button
- Input  
- Image

### ⚠️ Moléculas (Vacío - OK)
- Preparado para componentes como SearchBar, FormField, etc.

### ✅ Organismos (Correctos)
- Header
- Footer
- Dialog
- Cards (DogCard, MetricCard, SuccessStoryCard, BaseCard)

### ⚠️ Templates (Vacío - OK)
- Preparado para layouts de páginas

## 📝 Checklist de Refactorización

- [ ] Crear `/src/lib/utils.ts`
- [ ] Mover helper `cn` a `/src/lib/utils.ts`
- [ ] Actualizar import en Dialog.tsx
- [ ] Refactorizar BaseCard para usar `cn`
- [ ] Verificar que Modal.tsx NO se use
- [ ] Eliminar Modal.tsx y Modal.test.tsx
- [ ] Eliminar `/organisms/utils.ts`
- [ ] Verificar que todo compile sin errores
- [ ] Ejecutar tests
- [ ] Verificar diseño visual en localhost

## ⚠️ Precauciones

1. **NO cambiar estilos visuales**
2. **NO modificar lógica de negocio**
3. **Solo reorganizar código**
4. **Mantener tests funcionando**
5. **Verificar que compile sin errores TypeScript**

## 🚀 Comandos de Verificación

```bash
# Verificar compilación
npm run build

# Ejecutar tests
npm run test

# Iniciar dev server
npm run dev
```
