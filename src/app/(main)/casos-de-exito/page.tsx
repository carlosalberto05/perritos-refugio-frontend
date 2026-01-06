"use client";

import { SUCCESS_STORIES } from "@/data/home-data";
import SuccessStoryCard from "@/components/organisms/cards/SuccessStoryCard";
import SectionHeader from "@/components/molecules/SectionHeader";

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Historias Reales"
          badgeVariant="pink"
          title="Casos de"
          highlightedTitle="Éxito"
          subtitle="Cada adopción es una vida transformada. Conoce a los valientes que encontraron su hogar definitivo."
          className="mb-16"
        />

        <div className="space-y-12">
          {SUCCESS_STORIES.map((story, index) => (
            <SuccessStoryCard key={index} {...story} />
          ))}
        </div>

        {SUCCESS_STORIES.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Próximamente más historias</h3>
            <p className="text-gray-500">Estamos preparando más historias de felicidad para compartir contigo.</p>
          </div>
        )}
      </div>
    </main>
  );
}
