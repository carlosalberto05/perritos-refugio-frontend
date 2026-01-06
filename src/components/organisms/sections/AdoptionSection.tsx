"use client";
import Link from "next/link";
import DogCard from "@/components/organisms/cards/DogCard";
import { DOGS } from "@/data/home-data";
import SectionHeader from "@/components/molecules/SectionHeader";
import Button from "@/components/atoms/Button";

interface AdoptionSectionProps {
  onAdoptClick: (dogName: string) => void;
}

const AdoptionSection = ({ onAdoptClick }: AdoptionSectionProps) => {
  return (
    <>
      <section id="adopcion" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Nuestros Protegidos"
            title="Perritos en"
            highlightedTitle="Adopción"
            subtitle="Todos nuestros perritos han sido rescatados, vacunados y esterilizados. Están listos para encontrar un hogar lleno de amor."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOGS.slice(0, 3).map(
              ({
                id,
                name,
                age,
                size,
                breed,
                image,
                description,
                adoptionStatus,
                shelter,
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
                    shelter={shelter}
                    onAdoptClick={() => onAdoptClick(name)}
                  />
                );
              }
            )}
          </div>

          <div className="mt-16 text-center">
            <Link href="/adopcion">
              <Button variant="primary" size="lg">
                Ver más
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdoptionSection;
