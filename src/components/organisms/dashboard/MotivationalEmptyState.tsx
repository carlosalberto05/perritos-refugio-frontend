"use client";

import Link from "next/link";
import {
  Heart,
  Package,
  DollarSign,
  FileCheck2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface MotivationalEmptyStateProps {
  userName: string;
  onOpenDonationModal?: () => void;
}

export default function MotivationalEmptyState({
  userName,
  onOpenDonationModal,
}: MotivationalEmptyStateProps) {
  return (
    <div className="space-y-8">
      {/* Banner de Bienvenida Motivacional */}
      <div className="relative overflow-hidden bg-gradient-to-r from-brand-blue-600 via-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">
        <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold mb-4 text-white">
            <Sparkles size={14} className="text-amber-300" />
            ¡Bienvenido a la familia Huellitas, {userName}!
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight">
            Tu apoyo puede cambiar el destino de un perrito rescatado
          </h2>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Actualmente no tienes donaciones o apadrinamientos registrados. Existen múltiples formas de ayudar a los refugios a seguir salvando vidas. ¡Elige la que mejor se adapte a ti!
          </p>
        </div>
      </div>

      {/* Grid de Formas de Ayudar (CTAs Motivacionales) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Apadrinar */}
        <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
          <div className="relative z-10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-md shadow-rose-200">
              <Heart size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
                Apadrinar un Perrito 🐾
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                Cubre la alimentación y atención médica mensual de un perrito viejito o especial mientras encuentra su hogar definitivo.
              </p>
            </div>
          </div>
          <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-rose-600">Desde $200 MXN / mes</span>
            <Link
              href="/adopcion"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white font-bold text-xs rounded-xl transition-all"
            >
              Ver Perritos <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Card 2: Adopción */}
        <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
          <div className="relative z-10 space-y-4">
            <div className="w-12 h-12 rounded-2xl gradient-primary text-white flex items-center justify-center shadow-md shadow-blue-200">
              <FileCheck2 size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-blue-600 transition-colors">
                Solicitud de Adopción 📝
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                ¿Estás listo para dar el paso? Inicia o completa tu solicitud de adopción y encuentra a tu compañero ideal.
              </p>
            </div>
          </div>
          <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-brand-blue-600">Proceso sencillo y guiado</span>
            <Link
              href="/adopcion"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-50 text-brand-blue-700 hover:bg-brand-blue-600 hover:text-white font-bold text-xs rounded-xl transition-all"
            >
              Solicitar Adopción <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Card 3: Donación en Especie */}
        <div className="bg-white rounded-3xl p-6 border border-amber-100 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
          <div className="relative z-10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-200">
              <Package size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                Donar en Especie 📦
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                Los refugios necesitan urgentemente croquetas, desparasitantes, cobijas, productos de limpieza y juguetes.
              </p>
            </div>
          </div>
          <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-600">Entrega o envío a refugio</span>
            <Link
              href="/refugios"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-50 text-amber-700 hover:bg-amber-600 hover:text-white font-bold text-xs rounded-xl transition-all"
            >
              Ver Refugios <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Card 4: Donación Económica */}
        <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
          <div className="relative z-10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-200">
              <DollarSign size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                Donación Económica 💳
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                Apoya con aportaciones únicas o recurrentes para financiar vacunas, esterilizaciones y emergencias veterinarias.
              </p>
            </div>
          </div>
          <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-600">Aporte rápido y seguro</span>
            {onOpenDonationModal ? (
              <button
                onClick={onOpenDonationModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white font-bold text-xs rounded-xl transition-all"
              >
                Donar Ahora <ArrowRight size={14} />
              </button>
            ) : (
              <Link
                href="/refugios"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white font-bold text-xs rounded-xl transition-all"
              >
                Donar Ahora <ArrowRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
