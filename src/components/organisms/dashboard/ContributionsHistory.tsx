"use client";

import { useState } from "react";
import Image from "next/image";
import { Contribution } from "@/store/useUserDashboardStore";
import {
  Heart,
  Package,
  DollarSign,
  Sparkles,
  Calendar,
  Building2,
  CheckCircle2,
} from "lucide-react";

interface ContributionsHistoryProps {
  contributions: Contribution[];
  onOpenDonationModal?: () => void;
}

export default function ContributionsHistory({
  contributions,
  onOpenDonationModal,
}: ContributionsHistoryProps) {
  const [activeFilter, setActiveFilter] = useState<
    "todos" | "apadrinamiento" | "especie" | "economica"
  >("todos");

  const filtered = contributions.filter((item) => {
    if (activeFilter === "todos") return true;
    return item.type === activeFilter;
  });

  const getIcon = (type: Contribution["type"]) => {
    switch (type) {
      case "apadrinamiento":
        return <Heart className="w-5 h-5 text-rose-500" />;
      case "especie":
        return <Package className="w-5 h-5 text-amber-500" />;
      case "economica":
        return <DollarSign className="w-5 h-5 text-emerald-500" />;
    }
  };

  const getBadgeStyle = (type: Contribution["type"]) => {
    switch (type) {
      case "apadrinamiento":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "especie":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "economica":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Encabezado y Filtros */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Historial de Aportes y Apoyo
          </h2>
          <p className="text-sm text-gray-500">
            Cada granito de arena ayuda a transformar la vida de un perrito rescatado
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          <button
            onClick={() => setActiveFilter("todos")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeFilter === "todos"
                ? "bg-brand-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Todos ({contributions.length})
          </button>
          <button
            onClick={() => setActiveFilter("apadrinamiento")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeFilter === "apadrinamiento"
                ? "bg-rose-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Apadrinamientos
          </button>
          <button
            onClick={() => setActiveFilter("especie")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeFilter === "especie"
                ? "bg-amber-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            En Especie
          </button>
          <button
            onClick={() => setActiveFilter("economica")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeFilter === "economica"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Económicas
          </button>
        </div>
      </div>

      {/* Lista de Aportes */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 border border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            No hay aportes registrados en esta categoría.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                {/* Imagen si es perrito apadrinado o ícono por defecto */}
                {item.targetImage ? (
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-gray-200 flex-shrink-0 shadow-sm">
                    <Image
                      src={item.targetImage}
                      alt={item.targetName}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                    {getIcon(item.type)}
                  </div>
                )}

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`px-2.5 py-0.5 text-xs font-bold rounded-full border flex items-center gap-1 ${getBadgeStyle(
                        item.type
                      )}`}
                    >
                      {getIcon(item.type)}
                      {item.title}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar size={12} />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Building2 size={16} className="text-gray-400" />
                    {item.targetName}
                  </h3>

                  <p className="text-sm font-semibold text-brand-blue-600">
                    {item.details}
                  </p>

                  {item.impactMessage && (
                    <div className="mt-2 text-xs text-emerald-800 bg-emerald-50/80 border border-emerald-100 p-2.5 rounded-xl flex items-start gap-2">
                      <Sparkles size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{item.impactMessage}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 self-end md:self-center">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full flex items-center gap-1">
                  <CheckCircle2 size={14} />
                  {item.status}
                </span>
                {onOpenDonationModal && (
                  <button
                    onClick={onOpenDonationModal}
                    className="px-4 py-2 text-xs font-bold text-brand-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
                  >
                    Volver a Donar
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
