# 🐾 Guía de Contribución - Perritos Refugio Frontend

¡Gracias por querer contribuir al proyecto! Aquí te explicamos cómo hacerlo.

## 🚀 Empezar

### Requisitos previos:
- Node.js 20+
- npm
- Git

### Configuración inicial:
```bash
# Clonar repositorio
git clone https://github.com/carlosalberto05/perritos-refugio-frontend.git
cd perritos-refugio-frontend

# Instalar dependencias
npm ci

# Configurar Husky (pre-commits)
npm run prepare

# Iniciar desarrollo
npm run dev
```

---

## 📋 Antes de hacer un PR

```bash
# 1. Actualiza tu rama local
git checkout develop
git pull origin develop

# 2. Crea rama de feature
git checkout -b feature/my-feature

# 3. Haz cambios y commits
git add .
git commit -m "feat(ui): add new dog card component"

# 4. Verifica que todo funciona
npm run lint
npm run test
npm run build

# 5. Push y crea PR
git push origin feature/my-feature
```

---

## 📝 Formato de Commits

Usamos Conventional Commits:

```
type(scope): subject
```

### Tipos válidos:
- **feat**: Nueva funcionalidad
- **fix**: Corrección de bug
- **refactor**: Cambios sin funcionalidad nueva
- **style**: Cambios de CSS/styling
- **docs**: Documentación
- **test**: Tests
- **chore**: Cambios en dependencias

### Ejemplos:
```bash
feat(components): add dog profile modal
fix(api): handle empty dog list response
style(cards): improve spacing and shadows
docs(README): update setup instructions
```

---

## ✅ Checklist de PR

- ✅ Tests pasando (`npm run test`)
- ✅ Linting sin errores (`npm run lint`)
- ✅ Build exitoso (`npm run build`)
- ✅ Commits con formato convencional
- ✅ Responsive en mobile y desktop
- ✅ Sin breaking changes

---

## 🤝 Revisión de Código

- **develop**: Requiere 1 aprobación
- **main**: Requiere 2 aprobaciones

---

## 🎨 Estándares de Código

- Usar TypeScript para type safety
- Componentes funcionales con hooks
- Tailwind para estilos
- Nombrar componentes en PascalCase
- Nombrar variables/funciones en camelCase

---

## 🐛 Reportar Bugs

1. Verifica que no exista issue similar
2. Abre issue con:
   - Descripción clara
   - Pasos para reproducir
   - Screenshots si es visual

¡Gracias! 🐾
