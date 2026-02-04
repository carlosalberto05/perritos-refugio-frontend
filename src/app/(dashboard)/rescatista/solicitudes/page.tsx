"use client";

import { FileText } from "lucide-react";

export default function SolicitudesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Solicitudes de Adopción</h2>
      </div>

      <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
          <FileText size={40} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">No hay solicitudes pendientes</h3>
          <p className="text-gray-500 mt-1">
            Cuando alguien se interese en uno de tus perritos, aparecerá aquí.
          </p>
        </div>
      </div>
    </div>
  );
}
