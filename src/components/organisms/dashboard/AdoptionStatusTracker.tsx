"use client";

import Link from "next/link";
import Image from "next/image";
import { AdoptionRequest } from "@/store/useUserDashboardStore";
import {
  FileText,
  CalendarCheck,
  Home,
  CheckCircle2,
  HeartHandshake,
  ArrowRight,
  Clock,
  Building2,
  ExternalLink,
} from "lucide-react";

interface AdoptionStatusTrackerProps {
  adoptions: AdoptionRequest[];
  onOpenAdoptionModal?: (dogName: string) => void;
}

const STEPS = [
  { id: 1, label: "Solicitud", icon: FileText, desc: "Recibida por refugio" },
  { id: 2, label: "Entrevista", icon: CalendarCheck, desc: "Llamada de conocimiento" },
  { id: 3, label: "Visita Refugio", icon: Home, desc: "Conocer al perrito" },
  { id: 4, label: "Verificación", icon: CheckCircle2, desc: "Revisión de espacio" },
  { id: 5, label: "¡Adopción!", icon: HeartHandshake, desc: "Bienvenida a casa" },
];

export default function AdoptionStatusTracker({
  adoptions,
}: AdoptionStatusTrackerProps) {
  if (adoptions.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50/60 to-purple-50/60 rounded-3xl p-8 border border-blue-100/60 shadow-sm text-center">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mx-auto mb-4 border border-blue-100">
          🐶
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          No tienes ningún proceso de adopción activo
        </h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6 text-sm">
          Decenas de perritos rescatados están esperando una familia que les brinde amor. ¡Explora los perritos disponibles y comienza tu solicitud!
        </p>
        <Link
          href="/adopcion"
          className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all"
        >
          Explorar Perritos en Adopción
          <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Seguimiento de Solicitudes de Adopción
          </h2>
          <p className="text-sm text-gray-500">
            Conoce en qué etapa se encuentra la solicitud para tu nuevo compañero
          </p>
        </div>
        <span className="px-3 py-1 bg-brand-blue-50 text-brand-blue-600 text-xs font-bold rounded-full border border-blue-200">
          {adoptions.length} {adoptions.length === 1 ? "Solicitud Activa" : "Solicitudes Activas"}
        </span>
      </div>

      {adoptions.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all"
        >
          {/* Cabecera del Perrito y Refugio */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-brand-blue-100 flex-shrink-0 shadow-inner">
                <Image
                  src={item.dogImage}
                  alt={item.dogName}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.dogName}
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 font-semibold">
                    {item.dogBreed}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <Building2 size={14} className="text-brand-blue-500" />
                    {item.shelterName}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-gray-400" />
                    Iniciado: {item.applicationDate}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 bg-amber-50 text-amber-700 text-xs font-bold rounded-xl border border-amber-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                {item.statusLabel}
              </span>
              <Link
                href="/adopcion"
                className="p-2 rounded-xl text-gray-400 hover:text-brand-blue-600 hover:bg-blue-50 transition-colors"
                title="Ver ficha pública"
              >
                <ExternalLink size={18} />
              </Link>
            </div>
          </div>

          {/* Stepper de Progreso */}
          <div className="py-8">
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
              {/* Línea conectora de fondo */}
              <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-gray-100 -translate-y-6 z-0" />
              
              {STEPS.map((step) => {
                const isCompleted = step.id < item.currentStep;
                const isCurrent = step.id === item.currentStep;
                const Icon = step.icon;

                return (
                  <div
                    key={step.id}
                    className="relative z-10 flex md:flex-col items-center gap-4 md:gap-2 w-full md:w-auto text-left md:text-center"
                  >
                    {/* Círculo del paso */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-sm ${
                        isCompleted
                          ? "bg-emerald-500 text-white shadow-emerald-200"
                          : isCurrent
                          ? "gradient-primary text-white ring-4 ring-blue-100 scale-110"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    {/* Contenido del paso */}
                    <div>
                      <p
                        className={`text-sm font-bold ${
                          isCurrent
                            ? "text-brand-blue-600"
                            : isCompleted
                            ? "text-emerald-700"
                            : "text-gray-400"
                        }`}
                      >
                        {step.label}
                      </p>
                      <p className="text-xs text-gray-500 hidden md:block max-w-[100px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Siguiente Acción y Nota del Refugio */}
          {item.nextActionNote && (
            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-xl text-brand-blue-600">
                <CalendarCheck size={20} />
              </div>
              <div className="text-sm">
                <p className="font-bold text-brand-blue-900">Siguiente Paso:</p>
                <p className="text-brand-blue-700 mt-0.5">{item.nextActionNote}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
