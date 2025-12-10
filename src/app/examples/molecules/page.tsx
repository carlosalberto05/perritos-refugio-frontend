"use client";

import { useState } from "react";
import Badge from "@/components/molecules/Badge";
import FormField from "@/components/molecules/FormField";
import SearchBar from "@/components/molecules/SearchBar";

/**
 * Página de ejemplos para las Moléculas
 * 
 * Demuestra el uso de Badge, FormField y SearchBar
 */
export default function MoleculesExamplesPage() {
  const [searchValue, setSearchValue] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSearch = (value: string) => {
    alert(`Buscando: ${value}`);
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError("");
    } else if (!emailRegex.test(value)) {
      setEmailError("Por favor ingresa un correo válido");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Ejemplos de Moléculas
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Las moléculas son componentes que combinan átomos para crear
          funcionalidades más complejas pero aún reutilizables.
        </p>

        {/* Badge Examples */}
        <section className="mb-16">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Badge Component
            </h2>
            <p className="text-gray-600 mb-6">
              Etiquetas para mostrar estados, categorías o información destacada.
            </p>

            <div className="space-y-8">
              {/* Variants */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Variantes</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="success">En adopción</Badge>
                  <Badge variant="warning">Reservado</Badge>
                  <Badge variant="info">Adoptado</Badge>
                  <Badge variant="default">Sin estado</Badge>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Tamaños</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge size="sm" variant="success">
                    Pequeño
                  </Badge>
                  <Badge size="md" variant="success">
                    Mediano
                  </Badge>
                  <Badge size="lg" variant="success">
                    Grande
                  </Badge>
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Casos de Uso</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700">Luna (2 años)</span>
                    <Badge variant="success">Disponible</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700">Max (3 años)</span>
                    <Badge variant="info">Adoptado</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700">Bella (1 año)</span>
                    <Badge variant="warning">Reservado</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FormField Examples */}
        <section className="mb-16">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              FormField Component
            </h2>
            <p className="text-gray-600 mb-6">
              Combina label, input y mensajes de error/ayuda en un solo componente accesible.
            </p>

            <div className="space-y-6 max-w-md">
              <FormField
                id="name"
                label="Nombre completo"
                placeholder="Juan Pérez"
                helperText="Ingresa tu nombre y apellido"
              />

              <FormField
                id="email"
                label="Correo electrónico"
                type="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                error={emailError}
                required
              />

              <FormField
                id="phone"
                label="Teléfono"
                type="tel"
                placeholder="+52 55 1234 5678"
                helperText="Incluye código de área"
              />

              <FormField
                id="message"
                label="Mensaje"
                placeholder="Escribe tu mensaje aquí..."
                helperText="Máximo 500 caracteres"
              />

              <FormField
                id="disabled-field"
                label="Campo deshabilitado"
                placeholder="No editable"
                disabled
                value="Este campo está deshabilitado"
              />
            </div>
          </div>
        </section>

        {/* SearchBar Examples */}
        <section className="mb-16">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              SearchBar Component
            </h2>
            <p className="text-gray-600 mb-6">
              Combina input con botón de búsqueda y manejo de eventos optimizado.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Búsqueda Básica</h3>
                <SearchBar
                  placeholder="Buscar perritos..."
                  value={searchValue}
                  onChange={setSearchValue}
                  onSearch={handleSearch}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Búsqueda Deshabilitada</h3>
                <SearchBar
                  placeholder="Búsqueda no disponible"
                  disabled
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Con Ancho Completo</h3>
                <SearchBar
                  placeholder="Buscar por raza, edad, tamaño..."
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Component Info */}
        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sobre las Moléculas
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Clasificación en Atomic Design:</strong> Moléculas
            </p>
            <p>
              Las moléculas son componentes que combinan dos o más átomos
              para crear funcionalidades más complejas pero aún reutilizables.
            </p>

            <div>
              <p className="font-semibold mb-2">Características principales:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Combinan átomos de manera significativa</li>
                <li>Tienen una funcionalidad específica</li>
                <li>Son reutilizables en diferentes contextos</li>
                <li>Mantienen una sola responsabilidad</li>
                <li>Incluyen lógica de presentación (no de negocio)</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">Ejemplos creados:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><code className="bg-gray-100 px-2 py-1 rounded">Badge</code> - Átomo: span con estilos</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">FormField</code> - Átomos: Label + Input + Text</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">SearchBar</code> - Átomos: Input + Button + Icon</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
