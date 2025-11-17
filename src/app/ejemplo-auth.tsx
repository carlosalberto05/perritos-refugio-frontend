"use client";
import { useAuthStore } from "../store/useAuthStore";

interface User {
  id: string;
  email: string;
  name: string;
  rol: "admin" | "user";
}

type ExtractedAuthState = {
  user: User | null;
  isAuthenticated: boolean;
};

export default function EjemploAuth() {
  // Extraemos lo que necesitamos del store
  // Usamos `shallow` para evitar re-renderizados si otros valores cambian
  const { user, isAuthenticated } = useAuthStore<ExtractedAuthState>(
    (state) => ({
      user: state.user,
      isAuthenticated: state.isAuthenticated,
    })
  );

  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  const handleLogin = () => {
    login({
      id: "123",
      email: "usuario@ejemplo.com",
      name: "Juan Pérez",
      rol: "user" as const,
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Ejemplo de Zustand Auth</h1>

      <div className="mb-4">
        <p>
          <strong>Autenticado:</strong> {isAuthenticated ? "Sí" : "No"}
        </p>
        {user && (
          <div className="mt-2">
            <p>
              <strong>Usuario:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Rol:</strong> {user.rol}
            </p>
          </div>
        )}
      </div>

      <div className="space-x-4">
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
