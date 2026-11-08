"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useUserDashboardStore } from "@/store/useUserDashboardStore";
import AdoptionStatusTracker from "@/components/organisms/dashboard/AdoptionStatusTracker";
import ContributionsHistory from "@/components/organisms/dashboard/ContributionsHistory";
import MotivationalEmptyState from "@/components/organisms/dashboard/MotivationalEmptyState";
import UserProfileSection from "@/components/organisms/dashboard/UserProfileSection";
import { DonationModal } from "@/components/organisms/modals/DonationModal";
import {
  User as UserIcon,
  Heart,
  FileText,
  Gift,
  LayoutDashboard,
  Sparkles,
  ToggleLeft,
  ToggleRight,
  HandHeart,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";

export default function AdoptanteDashboardPage() {
  const { user } = useAuthStore();
  const {
    activeAdoptions,
    contributions,
    isDemoEmptyMode,
    toggleDemoEmptyMode,
  } = useUserDashboardStore();

  const [activeTab, setActiveTab] = useState<
    "resumen" | "adopciones" | "aportes" | "perfil"
  >("resumen");

  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState("500");

  // Usuario actual o datos por defecto si entra directamente sin login
  const currentUser = user || {
    id: "user-1",
    name: "María Fernández",
    email: "user@huellitas.com",
    rol: "adoptante" as const,
  };

  // Si está activo el modo demostración vacío
  const currentAdoptions = isDemoEmptyMode ? [] : activeAdoptions;
  const currentContributions = isDemoEmptyMode ? [] : contributions;

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#F8FDFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Banner para alternar modo demostración (Datos vs Vacío Motivacional) */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-amber-900 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 animate-spin-slow" />
            <div>
              <span className="font-bold">Modo de Demostración Interactivo:</span>{" "}
              Puedes alternar entre la vista con historial activo y la vista nueva sin aportes (para probar el flujo motivacional).
            </div>
          </div>

          <button
            onClick={toggleDemoEmptyMode}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-amber-300 rounded-xl font-bold text-amber-800 hover:bg-amber-100/50 transition-all shadow-sm flex-shrink-0"
          >
            {isDemoEmptyMode ? (
              <>
                <ToggleLeft className="w-5 h-5 text-amber-500" />
                <span>Ver Cuenta Con Datos</span>
              </>
            ) : (
              <>
                <ToggleRight className="w-5 h-5 text-emerald-600" />
                <span>Ver Cuenta Sin Aportes (Vacía)</span>
              </>
            )}
          </button>
        </div>

        {/* Encabezado del Perfil del Usuario */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl gradient-primary text-white flex items-center justify-center text-2xl sm:text-3xl font-extrabold shadow-lg shadow-blue-200">
              {currentUser.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  ¡Hola, {currentUser.name}! 🐾
                </h1>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Bienvenido a tu panel personal en Huellitas. Desde aquí puedes darle seguimiento a tus adopciones y aportes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setIsDonationModalOpen(true)}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 gradient-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all text-sm"
            >
              <HandHeart className="w-4 h-4" />
              Realizar Donación
            </button>
            <Link
              href="/adopcion"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold rounded-xl transition-all text-sm shadow-sm"
            >
              <PlusCircle className="w-4 h-4 text-brand-blue-500" />
              Adoptar Perrito
            </Link>
          </div>
        </div>

        {/* Tarjetas de Resumen Rápido */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue-600 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Solicitudes de Adopción
              </p>
              <p className="text-2xl font-black text-gray-900">
                {currentAdoptions.length}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Apadrinamientos Activos
              </p>
              <p className="text-2xl font-black text-gray-900">
                {currentContributions.filter((c) => c.type === "apadrinamiento").length}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Donaciones Realizadas
              </p>
              <p className="text-2xl font-black text-gray-900">
                {currentContributions.filter((c) => c.type !== "apadrinamiento").length}
              </p>
            </div>
          </div>
        </div>

        {/* Pestañas Principales */}
        <div className="flex border-b border-gray-200 overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab("resumen")}
            className={`pb-4 px-4 font-bold text-sm flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === "resumen"
                ? "border-brand-blue-600 text-brand-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            Resumen General
          </button>

          <button
            onClick={() => setActiveTab("adopciones")}
            className={`pb-4 px-4 font-bold text-sm flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === "adopciones"
                ? "border-brand-blue-600 text-brand-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <FileText className="w-4 h-4" />
            Mis Adopciones ({currentAdoptions.length})
          </button>

          <button
            onClick={() => setActiveTab("aportes")}
            className={`pb-4 px-4 font-bold text-sm flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === "aportes"
                ? "border-brand-blue-600 text-brand-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Gift className="w-4 h-4" />
            Mis Aportes ({currentContributions.length})
          </button>

          <button
            onClick={() => setActiveTab("perfil")}
            className={`pb-4 px-4 font-bold text-sm flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === "perfil"
                ? "border-brand-blue-600 text-brand-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <UserIcon className="w-4 h-4" />
            Mi Perfil e Intereses
          </button>
        </div>

        {/* Contenido de la Pestaña Activa */}
        <div className="animate-in fade-in duration-300">
          {activeTab === "resumen" && (
            <div className="space-y-10">
              {currentContributions.length === 0 && currentAdoptions.length === 0 ? (
                <MotivationalEmptyState
                  userName={currentUser.name}
                  onOpenDonationModal={() => setIsDonationModalOpen(true)}
                />
              ) : (
                <>
                  <AdoptionStatusTracker adoptions={currentAdoptions} />
                  <ContributionsHistory
                    contributions={currentContributions}
                    onOpenDonationModal={() => setIsDonationModalOpen(true)}
                  />
                </>
              )}
            </div>
          )}

          {activeTab === "adopciones" && (
            <AdoptionStatusTracker adoptions={currentAdoptions} />
          )}

          {activeTab === "aportes" && (
            currentContributions.length === 0 ? (
              <MotivationalEmptyState
                userName={currentUser.name}
                onOpenDonationModal={() => setIsDonationModalOpen(true)}
              />
            ) : (
              <ContributionsHistory
                contributions={currentContributions}
                onOpenDonationModal={() => setIsDonationModalOpen(true)}
              />
            )
          )}

          {activeTab === "perfil" && (
            <UserProfileSection user={currentUser} />
          )}
        </div>
      </div>

      {/* Modal de Donación Rápida */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
        amount={donationAmount}
        setAmount={setDonationAmount}
      />
    </div>
  );
}
