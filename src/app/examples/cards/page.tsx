"use client";

import Card from "@/components/organisms/cards/DogCard";

/**
 * Página de ejemplo para el componente Card
 *
 * Esta página demuestra diferentes casos de uso del componente Card
 * incluyendo diferentes estados de adopción y configuraciones.
 */
export default function CardExamplesPage() {
  const handleAdoptClick = (dogName: string) => {
    alert(`¡Gracias por tu interés en adoptar a ${dogName}!`);
  };

  return (
    <div className="min-h-screen bg-surface-light py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Ejemplos del Componente Card
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A continuación se muestran diferentes estados y variaciones del
          componente Card para perros en adopción.
        </p>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: En Adopción */}
          <Card
            name="Luna"
            breed="Mestizo"
            age="2 años"
            size="Mediano"
            description="Luna es una perrita muy cariñosa y juguetona, perfecta para familias con niños."
            imageUrl="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&q=80"
            adoptionStatus="En adopción"
            onAdoptClick={() => handleAdoptClick("Luna")}
          />

          {/* Card 2: En Adopción */}
          <Card
            name="Max"
            breed="Golden Retriever"
            age="3 años"
            size="Grande"
            description="Max es un perro tranquilo y leal, ideal para personas activas que disfruten de paseos."
            imageUrl="https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&q=80"
            adoptionStatus="En adopción"
            onAdoptClick={() => handleAdoptClick("Max")}
          />

          {/* Card 3: En Adopción */}
          <Card
            name="Bella"
            breed="Beagle"
            age="1 año"
            size="Pequeño"
            description="Bella es muy enérgética y le encanta jugar. Perfecta para hogares con espacio."
            imageUrl="https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800&q=80"
            adoptionStatus="En adopción"
            onAdoptClick={() => handleAdoptClick("Bella")}
          />

          {/* Card 4: Adoptado */}
          <Card
            name="Rocky"
            breed="Pastor Alemán"
            age="4 años"
            size="Grande"
            description="Rocky es un perro protector y leal, perfecto para familias que buscan seguridad."
            imageUrl="https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80"
            adoptionStatus="Adoptado"
            onAdoptClick={() => handleAdoptClick("Rocky")}
          />

          {/* Card 5: Reservado */}
          <Card
            name="Coco"
            breed="Chihuahua"
            age="5 meses"
            size="Pequeño"
            description="Coco es un cachorro juguetón que necesita una familia paciente y amorosa."
            imageUrl="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
            adoptionStatus="Reservado"
            onAdoptClick={() => handleAdoptClick("Coco")}
          />

          {/* Card 6: En Adopción */}
          <Card
            name="Bobby"
            breed="Labrador"
            age="6 años"
            size="Grande"
            description="Bobby es un perro maduro y calmado, ideal para personas mayores o familias tranquilas."
            imageUrl="https://images.unsplash.com/photo-1529472119196-cb724127a98e?w=800&q=80"
            adoptionStatus="En adopción"
            onAdoptClick={() => handleAdoptClick("Bobby")}
          />
        </div>

        {/* Sección de Información */}
        <div className="mt-16 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sobre el Componente Card
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Clasificación en Atomic Design:</strong> Organismo
            </p>
            <p>
              El componente{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">Card</code> es un
              organismo porque combina múltiples átomos (Button, Image) y
              potencialmente moléculas para crear una unidad funcional compleja
              de la interfaz.
            </p>

            <div>
              <p className="font-semibold mb-2">Características principales:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Imagen del perro con ratio de aspecto optimizado</li>
                <li>
                  Badge de estado de adopción (En adopción, Adoptado, Reservado)
                </li>
                <li>Información del perro (nombre, raza, edad, tamaño)</li>
                <li>Descripción con texto truncado (line-clamp-2)</li>
                <li>Botón de acción con icono de corazón</li>
                <li>Efecto hover con transición suave</li>
                <li>Diseño responsive y accesible</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">
                Armonía con el sistema de diseño:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Usa el componente Button atom existente</li>
                <li>
                  Colores coherentes con la paleta primary definida en
                  globals.css
                </li>
                <li>Tipografía Poppins del sistema</li>
                <li>Espaciado y bordes redondeados consistentes</li>
                <li>
                  Shadows y efectos de transición del globals.css (.card-hover)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
