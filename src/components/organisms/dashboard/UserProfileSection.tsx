"use client";

import { useState } from "react";
import { UserPreferences, useUserDashboardStore } from "@/store/useUserDashboardStore";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import {
  User as UserIcon,
  Mail,
  Phone,
  MapPin,
  Home,
  Dog,
  Heart,
  Save,
  CheckCircle2,
} from "lucide-react";

interface UserProfileSectionProps {
  user: {
    id: string;
    name: string;
    email: string;
    rol: string;
  };
}

export default function UserProfileSection({ user }: UserProfileSectionProps) {
  const { preferences, updatePreferences } = useUserDashboardStore();
  const [formData, setFormData] = useState<UserPreferences>(preferences);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updatePreferences(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const toggleInterest = (interest: UserPreferences["interests"][number]) => {
    const current = formData.interests;
    const exists = current.includes(interest);
    const updated = exists
      ? current.filter((i) => i !== interest)
      : [...current, interest];
    setFormData({ ...formData, interests: updated });
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md space-y-8">
      <div className="flex items-center justify-between border-b border-gray-100 pb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue-600 text-2xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
              <Mail size={14} className="text-gray-400" />
              {user.email} • <span className="capitalize font-semibold text-brand-blue-600">Rol: {user.rol}</span>
            </p>
          </div>
        </div>

        {isSaved && (
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl border border-emerald-200 flex items-center gap-1.5 animate-in fade-in">
            <CheckCircle2 size={16} /> ¡Guardado correctamente!
          </span>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
          <UserIcon size={18} className="text-brand-blue-500" />
          Datos de Contacto y Ubicación
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Teléfono de contacto"
            placeholder="+52 55 0000 0000"
            startIcon={<Phone size={18} />}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            fullWidth
          />

          <Input
            label="Ciudad / Estado"
            placeholder="Ej. CDMX, México"
            startIcon={<MapPin size={18} />}
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            fullWidth
          />
        </div>

        <Input
          label="Dirección de Domicilio (para verificación de adopción)"
          placeholder="Calle, número, colonia, código postal"
          startIcon={<Home size={18} />}
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          fullWidth
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Tipo de Vivienda
            </label>
            <div className="flex gap-3">
              {(["Casa", "Departamento", "Finca"] as const).map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setFormData({ ...formData, housingType: type })}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                    formData.housingType === type
                      ? "border-brand-blue-500 bg-blue-50 text-brand-blue-600 ring-2 ring-blue-100"
                      : "border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              ¿Tienes otras mascotas actualmente?
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, hasPets: true })}
                className={`px-4 py-2.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all ${
                  formData.hasPets
                    ? "border-brand-blue-500 bg-blue-50 text-brand-blue-600 ring-2 ring-blue-100"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Dog size={16} /> Sí, tengo mascotas
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, hasPets: false })}
                className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                  !formData.hasPets
                    ? "border-brand-blue-500 bg-blue-50 text-brand-blue-600 ring-2 ring-blue-100"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                No tengo mascotas
              </button>
            </div>
          </div>
        </div>

        {/* Sección de Intereses y Preferencias de Ayuda */}
        <div className="pt-6 border-t border-gray-100 space-y-3">
          <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <Heart size={18} className="text-rose-500" />
            Mis Formas de Ayudar Preferidas
          </h3>
          <p className="text-xs text-gray-500">
            Selecciona cómo te gustaría participar en la comunidad de Huellitas:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {[
              { id: "adoptar", label: "🐾 Interesado en Adoptar" },
              { id: "apadrinar", label: "💖 Interesado en Apadrinar" },
              { id: "donar_especie", label: "📦 Donante en Especie" },
              { id: "donar_dinero", label: "💳 Donante Económico" },
              { id: "voluntariado", label: "🤝 Voluntariado en Refugios" },
            ].map((item) => {
              const isSelected = formData.interests.includes(
                item.id as UserPreferences["interests"][number]
              );
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() =>
                    toggleInterest(
                      item.id as UserPreferences["interests"][number]
                    )
                  }
                  className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all flex items-center justify-between ${
                    isSelected
                      ? "border-brand-blue-500 bg-blue-50/80 text-brand-blue-700 ring-2 ring-blue-100"
                      : "border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span>{item.label}</span>
                  {isSelected && <CheckCircle2 size={16} className="text-brand-blue-600" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <Button
            type="submit"
            variant="primary"
            className="flex items-center gap-2 px-6 py-3"
          >
            <Save size={18} />
            Guardar Cambios del Perfil
          </Button>
        </div>
      </form>
    </div>
  );
}
