"use client";
import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import Input from "@/components/atoms/Input";
import {
  User,
  Mail,
  Lock,
  Building2,
  FileText,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  // Traemos lo necesario de tu Store corregido
  const {
    selectedRegistrationRole,
    setRegistrationRole,
    isLoading,
    setLoading,
  } = useAuthStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    orgName: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    try {
      console.log("Enviando datos:", {
        ...formData,
        rol: selectedRegistrationRole,
      });
      // Aquí irá tu mutación de TanStack Query más adelante
      // await registerMutation({ ...formData, role: selectedRegistrationRole });
    } finally {
      // Simulamos una espera y quitamos el loading
      setTimeout(() => setLoading(false), 1500);
    }
  };

  return (
    <div className="mt-20 min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header Branding */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse-slow">
            🐾
          </div>
          <span className="text-2xl font-bold text-brand-blue-600">
            Huellitas
          </span>
        </div>
        <p className="text-gray-600 font-medium">Crea tu cuenta para ayudar</p>
      </div>

      <div className="glass-card w-full max-w-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Selector de Rol (Zustand) */}
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Quiero registrarme como:
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setRegistrationRole("adoptante")}
                className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${
                  selectedRegistrationRole === "adoptante"
                    ? "border-brand-blue-500 bg-blue-50 text-brand-blue-600 ring-2 ring-blue-100/50"
                    : "border-gray-100 text-gray-400 hover:bg-gray-50 hover:border-gray-200"
                }`}
              >
                <User size={28} />
                <span className="font-bold text-xs uppercase tracking-wider">
                  Adoptante
                </span>
              </button>
              <button
                type="button"
                onClick={() => setRegistrationRole("rescatista")}
                className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${
                  selectedRegistrationRole === "rescatista"
                    ? "border-brand-blue-500 bg-blue-50 text-brand-blue-600 ring-2 ring-blue-100/50"
                    : "border-gray-100 text-gray-400 hover:bg-gray-50 hover:border-gray-200"
                }`}
              >
                <Building2 size={28} />
                <span className="font-bold text-xs uppercase tracking-wider">
                  Rescatista
                </span>
              </button>
            </div>
          </div>

          {/* Campos Principales usando tu Átomo Input */}
          <Input
            label="Nombre completo"
            placeholder="Ej. Juan Pérez"
            startIcon={<User size={18} />}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            fullWidth
          />

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

          {/* Campos dinámicos para Rescatista */}
          {selectedRegistrationRole === "rescatista" && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <Input
                label="Nombre de la organización / Refugio"
                placeholder="Nombre oficial del refugio"
                startIcon={<Building2 size={18} />}
                value={formData.orgName}
                onChange={(e) =>
                  setFormData({ ...formData, orgName: e.target.value })
                }
                required
                fullWidth
              />
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Descripción del refugio
                </label>
                <div className="relative">
                  <span className="absolute top-3 left-3 text-gray-400">
                    <FileText size={18} />
                  </span>
                  <textarea
                    className="w-full pl-10 pr-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-brand-blue-400 outline-none min-h-[100px] transition-all bg-white"
                    placeholder="Cuéntanos un poco sobre tu labor..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <Input
              label="Repetir contraseña"
              type="password"
              placeholder="••••••••"
              startIcon={<Lock size={18} />}
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
              fullWidth
            />
          </div>

          {/* Botón con estado de carga */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 mt-4 gradient-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Procesando...
              </>
            ) : (
              "Crear Cuenta"
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm mb-4">
            ¿Ya eres parte de la comunidad?
          </p>
          <Link
            href="/login"
            className="block w-full py-2.5 border border-gray-200 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>

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
