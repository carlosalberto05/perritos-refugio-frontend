// Esto añade las extensiones de Jest DOM a Vitest, permitiendo aserciones
// como expect(element).toBeInTheDocument()
import "@testing-library/jest-dom";

// Si usas React Query (que lo harás), aquí irán los mocks.
// Por ahora, lo dejamos simple.
// import { beforeAll, afterEach, afterAll } from 'vitest';

// Puedes añadir limpieza global aquí si fuera necesario:
/*
afterEach(() => {
    // Por ejemplo: cleanup(); de React Testing Library (aunque a veces se hace automáticamente)
});
*/
