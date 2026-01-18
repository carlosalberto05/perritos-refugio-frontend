"use client";

import { useState } from "react";
import { useAuthStore, UserRole } from "@/store/useAuthStore";
import Input from "@/components/atoms/Input";
import {
  Mail,
  Lock,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { isLoading, setLoading, login } = useAuthStore();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Iniciando sesión con:", formData);
      // Simulamos una respuesta exitosa
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Creamos un usuario ficticio basado en el email para pruebas
      const mockUser = {
        id: "1",
        name: "Huellitas Rescate",
        email: formData.email,
        rol: (formData.email.includes("admin") ? "admin" : (formData.email.includes("user") ? "adoptante" : "rescatista")) as UserRole,
      };

      login(mockUser);
      
      if (mockUser.rol === "rescatista") {
        router.push("/rescatista/perritos");
      } else {
        router.push("/");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header Branding - Idéntico al Registro */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse-slow">
            🐾
          </div>
          <span className="text-2xl font-bold text-brand-blue-600">
            Huellitas
          </span>
        </div>
        <p className="text-gray-600 font-medium">Inicia sesión para continuar</p>
      </div>

      <div className="glass-card w-full max-w-md p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Correo electrónico"
            type="email"
            placeholder="correo@ejemplo.com"
            startIcon={<Mail size={18} />}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            fullWidth
          />

          <Input
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            startIcon={<Lock size={18} />}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            fullWidth
          />

          {/* Botón Principal - Estilo idéntico al botón de registro */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 mt-4 gradient-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Iniciando...
              </>
            ) : (
              "Iniciar Sesión"
            )}
          </button>
        </form>

        {/* Separador y Link a Registro */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm mb-4">
            ¿No tienes cuenta?
          </p>
          <Link
            href="/register"
            className="block w-full py-2.5 border border-gray-200 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors text-sm"
          >
            Crear Cuenta Nueva
          </Link>
        </div>

        {/* Credenciales de Prueba (Referencia opcional de Figma) */}
        <div className="mt-6 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
          <p className="text-xs font-bold text-brand-blue-800 mb-2 uppercase tracking-wider">
            Credenciales de prueba:
          </p>
          <div className="space-y-1 text-xs text-brand-blue-600 font-medium">
            <p><span className="font-bold">Admin:</span> admin@huellitas.com / admin123</p>
            <p><span className="font-bold">Usuario:</span> user@huellitas.com / user123</p>
          </div>
        </div>
      </div>

      {/* Volver al Inicio - Idéntico al Registro */}
      <Link
        href="/"
        className="mt-8 flex items-center gap-2 text-gray-500 hover:text-brand-blue-600 transition-colors font-medium group"
      >
        <ArrowLeft
          size={18}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Volver al inicio
      </Link>
    </div>
  );
}
