"use client";
import DogCard from "@/components/organisms/cards/DogCard";
import { DOGS } from "@/data/home-data";

interface AdoptionSectionProps {
  onAdoptClick: (dogName: string) => void;
}

const AdoptionSection = ({ onAdoptClick }: AdoptionSectionProps) => {
  return (
    <>
      <section id="adopcion" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Perritos en Adopción</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Todos nuestros perritos han sido rescatados, vacunados y
              esterilizados. Están listos para encontrar un hogar lleno de amor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOGS.map(
              ({
                id,
                name,
                age,
                size,
                breed,
                image,
                description,
                adoptionStatus,
              }) => {
                return (
                  <DogCard
                    key={id}
                    name={name}
                    age={age}
                    size={size}
                    breed={breed}
                    imageUrl={image}
                    description={description}
                    adoptionStatus={adoptionStatus}
                    onAdoptClick={() => onAdoptClick(name)}
                  />
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdoptionSection;
