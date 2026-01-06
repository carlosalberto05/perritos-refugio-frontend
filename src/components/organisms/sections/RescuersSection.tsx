import Link from "next/link";
import ShelterCard from "@/components/organisms/cards/ShelterCard";
import { SHELTERS } from "@/data/home-data";
import SectionHeader from "@/components/molecules/SectionHeader";
import Button from "@/components/atoms/Button";

const RescuersSection = () => {
  return (
    <section id="rescatistas" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Colaboradores Locales"
          title="Conoce a los rescatistas"
          highlightedTitle="y sus misiones"
          subtitle="Tu apoyo directo hace la diferencia hoy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHELTERS.slice(0, 3).map((shelter) => (
            <ShelterCard key={shelter.id} {...shelter} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/refugios">
            <Button variant="primary" size="lg">
              Ver más
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RescuersSection;
