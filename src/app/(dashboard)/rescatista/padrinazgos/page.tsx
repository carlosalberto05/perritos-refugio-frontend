"use client";

import { Heart } from "lucide-react";

export default function PadrinazgosPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Padrinazgos</h2>
      </div>

      <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center text-pink-200">
          <Heart size={40} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Aún no tienes padrinos</h3>
          <p className="text-gray-500 mt-1">
            Los padrinos ayudan con los gastos de los perritos mientras encuentran un hogar.
          </p>
        </div>
      </div>
    </div>
  );
}
