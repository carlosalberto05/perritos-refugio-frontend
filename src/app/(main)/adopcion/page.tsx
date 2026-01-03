"use client";

import { useState, useMemo } from "react";
import DogCard from "@/components/organisms/cards/DogCard";
import { DOGS, Dog } from "@/data/home-data";
import SearchBar from "@/components/molecules/SearchBar";
import { Filter, SortAsc, MapPin, SlidersHorizontal } from "lucide-react";

export default function AdoptionPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSize, setSelectedSize] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"distance" | "name">("distance");

  // Filter and Sort logic
  const filteredDogs = useMemo(() => {
    let result = [...DOGS];

    // Filter by adoption status (only show "En adopción" and "Reservado" for adoption page)
    result = result.filter(dog => dog.adoptionStatus !== "Adoptado");

    // Search query
    if (searchQuery) {
      result = result.filter(
        (dog) =>
          dog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dog.breed.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Size filter
    if (selectedSize !== "all") {
      result = result.filter((dog) => dog.size === selectedSize);
    }

    // Color filter
    if (selectedColor !== "all") {
      result = result.filter((dog) => dog.color === selectedColor);
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === "distance") {
        return (a.distance || 0) - (b.distance || 0);
      }
      return a.name.localeCompare(b.name);
    });

    return result;
  }, [searchQuery, selectedSize, selectedColor, sortBy]);

  const sizes = ["Pequeño", "Mediano", "Grande"];
  const colors = Array.from(new Set(DOGS.map(dog => dog.color).filter(Boolean)));

  return (
    <main className="min-h-screen pt-24 pb-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Encuentra a tu <span className="text-blue-600">mejor amigo</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explora nuestra galería de perritos buscando un hogar. Los primeros que verás son los que están más cerca de ti.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-end">
            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Buscar por nombre o raza</label>
              <SearchBar 
                placeholder="Ej: Luna, Golden Retriever..." 
                value={searchQuery}
                onChange={setSearchQuery}
              />
            </div>
            
            <div className="flex flex-wrap gap-4 w-full lg:w-auto">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tamaño</label>
                <select 
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none transition-all"
                >
                  <option value="all">Todos los tamaños</option>
                  {sizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Color</label>
                <select 
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none transition-all"
                >
                  <option value="all">Cualquier color</option>
                  {colors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Ordenar por</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none transition-all"
                >
                  <option value="distance">Más cercanos primero</option>
                  <option value="name">Nombre (A-Z)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDogs.length > 0 ? (
            filteredDogs.map((dog) => (
              <div key={dog.id} className="relative group">
                {sortBy === "distance" && dog.distance && (
                  <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-3 h-3" />
                    A {dog.distance} km
                  </div>
                )}
                <DogCard
                  name={dog.name}
                  age={dog.age}
                  size={dog.size}
                  breed={dog.breed}
                  imageUrl={dog.image}
                  description={dog.description}
                  adoptionStatus={dog.adoptionStatus}
                  shelter={dog.shelter}
                  onAdoptClick={() => console.log(`Adopt ${dog.name}`)}
                  className="h-full"
                />
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400 mb-4">
                <SlidersHorizontal className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No encontramos perritos</h3>
              <p className="text-gray-500">Prueba ajustando los filtros de búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
