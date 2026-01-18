"use client";

import { Building2, Save } from "lucide-react";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { useState } from "react";

export default function OrganizacionPage() {
  const [formData, setFormData] = useState({
    name: "Huellitas Rescate",
    description: "Somos un refugio dedicado al rescate y rehabilitación de perritos en situación de calle.",
    location: "Ciudad de México",
    contactEmail: "contacto@huellitas.com",
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Mi Organización</h2>
        <Button 
          variant="primary" 
          className="flex items-center gap-2 rounded-xl px-6 py-3"
        >
          <Save size={20} />
          Guardar Cambios
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-4">Información General</h3>
            
            <Input 
              label="Nombre de la Organización"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              fullWidth
            />

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700 ml-1">Descripción</label>
              <textarea 
                className="w-full p-4 text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-brand-blue-400 outline-none min-h-[120px] transition-all bg-white"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                label="Ubicación"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                fullWidth
              />
              <Input 
                label="Correo de Contacto"
                value={formData.contactEmail}
                onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                fullWidth
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4">
            <h3 className="text-lg font-bold text-gray-900 self-start">Logo</h3>
            <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue-500 border-4 border-white shadow-md">
              <Building2 size={48} />
            </div>
            <button className="text-sm font-bold text-brand-blue-600 hover:underline">
              Cambiar imagen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
