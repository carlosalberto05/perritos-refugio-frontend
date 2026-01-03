"use client";

import { useState, useMemo } from "react";
import { SHELTERS } from "@/data/home-data";
import ShelterCard from "@/components/organisms/cards/ShelterCard";
import { Search, MapPin, Filter, Building2, LayoutGrid, Heart } from "lucide-react";
import Button from "@/components/atoms/Button";

export default function RefugiosPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("Todos");

  // Get unique states from SHELTERS
  const states = useMemo(() => {
    const uniqueStates = Array.from(new Set(SHELTERS.map((s) => s.state)));
    return ["Todos", ...uniqueStates.sort()];
  }, []);

  const filteredShelters = useMemo(() => {
    return SHELTERS.filter((shelter) => {
      const matchesSearch = shelter.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesState =
        selectedState === "Todos" || shelter.state === selectedState;
      return matchesSearch && matchesState;
    });
  }, [searchQuery, selectedState]);

  return (
    <div className="min-h-screen bg-gray-50/50 pt-24 pb-20">
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                Red de Rescatistas
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 leading-tight">
                Encuentra tu refugio <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  más cercano
                </span>
              </h1>
              <p className="text-lg text-gray-600 font-medium">
                Conoce a las organizaciones y personas que dedican su vida a rescatar, rehabilitate y encontrar hogares para perritos en todo México.
              </p>
            </div>
            
            <div className="bg-white p-2 rounded-2xl shadow-xl shadow-blue-500/5 border border-gray-100 flex items-center gap-4 w-full md:w-auto">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-xl text-blue-700 font-bold">
                    <LayoutGrid className="w-4 h-4" />
                    <span>{SHELTERS.length} Refugios</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Needs Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Heart className="w-6 h-6 text-orange-600 fill-orange-600" />
            </div>
            <div>
                <h2 className="text-3xl font-black text-gray-900 leading-tight">Urgencias Locales</h2>
                <p className="text-gray-500 font-medium">Estos rescatistas necesitan ayuda hoy misma.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SHELTERS.filter(s => s.urgentNeeds).slice(0, 3).map((shelter) => (
                <ShelterCard key={`urgent-${shelter.id}`} {...shelter} />
            ))}
          </div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-gray-200/50 rounded-3xl p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Search */}
              <div className="md:col-span-6 relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar por nombre o palabra clave..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 font-medium placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* State Filter */}
              <div className="md:col-span-4 relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <select
                  className="w-full pl-12 pr-10 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 font-medium appearance-none cursor-pointer"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state === "Todos" ? "Todos los estados" : state}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <Filter className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Clear Button */}
              <div className="md:col-span-2">
                <Button 
                    variant="secondary" 
                    fullWidth 
                    className="h-full py-3 rounded-2xl"
                    onClick={() => {
                        setSearchQuery("");
                        setSelectedState("Todos");
                    }}
                >
                    Limpiar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredShelters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredShelters.map((shelter) => (
                <ShelterCard key={shelter.id} {...shelter} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-gray-200">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No encontramos refugios</h3>
              <p className="text-gray-500">Prueba ajustando tus filtros o buscando con otro nombre.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
