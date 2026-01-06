import Link from "next/link";
import { SUCCESS_STORIES } from "@/data/home-data";
import SuccessStoryCard from "../cards/SuccessStoryCard";
import SectionHeader from "@/components/molecules/SectionHeader";
import Button from "@/components/atoms/Button";

const SuccessStoriesSection = () => {
  return (
    <section id="casos-exito" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Historias de Éxito"
          badgeVariant="pink"
          title="Vidas transformadas"
          highlightedTitle="que nos inspiran"
          subtitle="Tu apoyo directo hace la diferencia hoy"
        />

        <div className="space-y-12">
          {SUCCESS_STORIES.slice(0, 2).map((story, index) => (
            <SuccessStoryCard key={index} {...story} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/casos-de-exito">
            <Button variant="accent" size="lg">
              Ver más
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
