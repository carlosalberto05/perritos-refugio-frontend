"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { 
  PawPrint, 
  FileText, 
  Heart, 
  Settings, 
  LogOut
} from "lucide-react";
import Button from "@/components/atoms/Button";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export default function RescatistaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout, isAuthenticated } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  // Redirección si no está autenticado o no es rescatista
  useEffect(() => {
    if (!isAuthenticated || (user && user.rol !== "rescatista")) {
      // router.push("/login"); // Comentado para permitir desarrollo sin login forzado
    }
  }, [isAuthenticated, user, router]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const navItems = [
    { 
      label: "Perritos (1)", 
      href: "/rescatista/perritos", 
      icon: <PawPrint size={18} /> 
    },
    { 
      label: "Solicitudes (0)", 
      href: "/rescatista/solicitudes", 
      icon: <FileText size={18} /> 
    },
    { 
      label: "Padrinazgos", 
      href: "/rescatista/padrinazgos", 
      icon: <Heart size={18} /> 
    },
    { 
      label: "Organización", 
      href: "/rescatista/organizacion", 
      icon: <Settings size={18} /> 
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FDFF]">
      {/* Header del Panel */}
      <header className="bg-white border-b border-gray-100 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue-500">
              <PawPrint size={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-brand-blue-600 leading-tight">
                {user?.name || "huellitas1"}
              </h1>
              <p className="text-sm text-gray-500 font-medium">Panel de Rescatista</p>
            </div>
          </div>

          <Button 
            variant="secondary" 
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-700 border-gray-200 hover:bg-gray-50"
          >
            <LogOut size={18} />
            Cerrar sesión
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Navegación de Pestañas */}
        <div className="flex flex-wrap gap-3 mb-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all",
                  isActive 
                    ? "bg-brand-blue-500 text-white shadow-md shadow-blue-100" 
                    : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-50 shadow-sm"
                )}
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Contenuido Dinámico */}
        <section className="animate-in fade-in duration-500">
          {children}
        </section>
      </main>
    </div>
  );
}
