# AGENTS.md - Development Guidelines for Huellitas Frontend

This file contains essential information for agentic coding agents working on the Huellitas (perritos-refugio-frontend) project.

## Project Overview

**Huellitas** is a modern Next.js application for connecting rescued dogs with adoptive families. Built with TypeScript, follows Atomic Design principles, and uses comprehensive testing.

### Tech Stack

- **Framework**: Next.js 16.0.1 with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS v4.1.17
- **State Management**: Zustand for global state, TanStack Query for server state
- **Testing**: Vitest + React Testing Library
- **UI Components**: Custom components with Radix UI primitives

---

## Development Commands

### Core Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

### Testing Commands

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:cov

# Run single test file
npm run test src/components/atoms/Button.test.tsx
```

---

## Code Style Guidelines

### File Structure & Architecture

**Atomic Design Pattern:**

```
src/components/
├── atoms/        # Indivisible components (Button, Input, Icon)
├── molecules/    # Groups of atoms (FormField, SearchBar)
└── organisms/    # Complex sections (Header, Footer, Cards)
```

**App Router Structure:**

```
src/app/
├── (auth)/       # Authentication routes (login, register)
├── (main)/       # Main application routes
└── layout.tsx    # Root layout with providers
```

### Import Organization

**Order:**

1. React/Next.js imports
2. Third-party libraries
3. Internal imports (use @/\* alias)
4. Type imports
5. Relative imports (last resort)

**Example:**

```typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/atoms/Button';
import { useAuthStore } from '@/store/useAuthStore';
import type { User } from '@/types/user';
```

### TypeScript Guidelines

**Strict Mode**: Always enabled. Use proper typing:

```typescript
// Good - Interface for component props
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Good - Type for store state
type AuthStore = AuthState & AuthActions;
```

### Component Guidelines

**Functional Components**: Always use function declarations:

```typescript
// Good
export default function Button({ children, variant }: ButtonProps) {
  return <button>{children}</button>;
}

// Avoid
const Button = ({ children, variant }: ButtonProps) => {
  return <button>{children}</button>;
};
```

**Props Destructuring**: Always destructure props:

```typescript
// Good
export default function Header({ user, onNavigate }: HeaderProps) {
  // component logic
}

// Avoid
export default function Header(props) {
  const { user, onNavigate } = props;
  // component logic
}
```

**Default Props**: Use default parameters:

```typescript
const Button = ({ size = 'md', disabled = false, className }: ButtonProps) => {
  // component logic
};
```

### Styling Guidelines

**Tailwind CSS**: Use utility-first approach with cn() helper:

```typescript
import { cn } from '@/lib/utils';

const buttonClasses = cn(
  'base-classes',
  variantClasses[variant],
  sizeClasses[size],
  disabled && 'opacity-50 cursor-not-allowed',
  className
);
```

**Responsive Design**: Mobile-first approach:

```typescript
className = 'px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4';
```

### State Management

**Zustand Stores**: Follow State/Actions pattern:

```typescript
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthActions {
  login: (user: User) => void;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>((set) => ({
  // state
  user: null,
  isAuthenticated: false,
  isLoading: false,

  // actions
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
```

### Error Handling

**Components**: Use error boundaries and proper error states:

```typescript
const [error, setError] = useState<string | null>(null);

const handleSubmit = async () => {
  try {
    setError(null);
    await submitForm(data);
  } catch (err) {
    setError(err instanceof Error ? err.message : 'An error occurred');
  }
};
```

**API Calls**: Always handle errors in async functions:

```typescript
const fetchDogs = async () => {
  setLoading(true);
  try {
    const response = await api.get('/dogs');
    setDogs(response.data);
  } catch (error) {
    console.error('Failed to fetch dogs:', error);
    setError('Failed to load dogs');
  } finally {
    setLoading(false);
  }
};
```

### Testing Guidelines

**Test Structure**: Use describe blocks for organization:

```typescript
import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  test("renders with correct text", () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  test("calls onClick handler", () => {
    const handleClick = vi.fn();
    render(<Button variant="primary" onClick={handleClick}>Click</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

**Mocking**: Use vitest.setup.ts for common mocks (next/image, next/navigation).

### Naming Conventions

**Files**: PascalCase for components, camelCase for utilities:

```
Button.tsx          # Component
Button.test.tsx     # Test file
useAuthStore.ts     # Hook/store
utils.ts           # Utilities
```

**Components**: PascalCase
**Functions/Variables**: camelCase
**Constants**: UPPER_SNAKE_CASE

### Accessibility Guidelines

**Semantic HTML**: Use appropriate elements with ARIA labels:

```typescript
<button
  aria-expanded={isOpen}
  aria-controls="mobile-menu"
  aria-label="Toggle mobile menu"
>
```

---

## Development Workflow

1. **Before Coding**: Run `npm run lint` to ensure code quality
2. **During Development**: Use `npm run test:watch` for immediate feedback
3. **Before Commit**: Run `npm run test` and `npm run lint`
4. **Coverage Check**: Run `npm run test:cov` to maintain coverage standards

---

## Common Patterns

### Custom Hooks

```typescript
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    // initialization logic
  });

  return [value, setValue] as const;
}
```

### API Integration

```typescript
const { data, isLoading, error } = useQuery({
  queryKey: ['dogs'],
  queryFn: () => api.get('/dogs').then((res) => res.data),
});
```

---

## Environment Variables

Create `.env.local` for local development:

```
NEXT_PUBLIC_API_URL="http://localhost:3001/api/v1"
```

Always use `NEXT_PUBLIC_` prefix for client-side variables.

---

This document serves as the primary reference for all development activities. Prioritize consistency with existing patterns and maintain the high quality standards established in this codebase.
