"use client";

import { Plus, Pencil, Trash2 } from "lucide-react";
import Button from "@/components/atoms/Button";
import Badge from "@/components/molecules/Badge";

export default function PerritosPage() {
  const perritos = [
    {
      id: 1,
      name: "Sanson",
      breed: "Mestizo",
      age: "2",
      description: "Perrito color cafe con rojizo mediano",
      status: "Disponible",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Mis Perritos en Adopción</h2>
        <Button 
          variant="primary" 
          className="flex items-center gap-2 rounded-xl px-6 py-3"
        >
          <Plus size={20} />
          Agregar Perrito
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {perritos.map((perrito) => (
          <div 
            key={perrito.id} 
            className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{perrito.name}</h3>
                <p className="text-gray-500 font-medium">
                  {perrito.breed} • {perrito.age}
                </p>
              </div>
              <Badge variant="success" size="md" className="rounded-full bg-green-50 text-green-600 border-none px-4 py-1">
                {perrito.status}
              </Badge>
            </div>
            
            <p className="text-gray-600 text-sm">
              {perrito.description}
            </p>

            <div className="flex gap-2 mt-2">
              <button className="p-2.5 rounded-xl border border-gray-100 text-gray-500 hover:bg-gray-50 transition-colors">
                <Pencil size={18} />
              </button>
              <button className="p-2.5 rounded-xl border border-gray-100 text-red-400 hover:bg-red-50 hover:border-red-100 transition-colors">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
