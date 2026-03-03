'use client';

import Link from 'next/link';
import { useSuccessStories } from '@/api/successStories';
import SuccessStoryCard from '../cards/SuccessStoryCard';
import SectionHeader from '@/components/molecules/SectionHeader';
import Button from '@/components/atoms/Button';

const SuccessStoriesSection = () => {
  const { data: successStories, error } = useSuccessStories();

  if (error) {
    return (
      <section id="adopcion" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Nuestros Protegidos"
            title="Perritos en"
            highlightedTitle="Adopción"
            subtitle="Todos nuestros perritos han sido rescatados, Vaccinated and sterilized. They are ready to find a home full of love."
          />
          <div className="glass-card p-8 text-center max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Error al cargar
            </h3>
            <p className="text-gray-600 mb-6">
              {error instanceof Error
                ? error.message
                : 'No se pudieron cargar los perritos en adopción'}
            </p>
            <Button variant="primary" onClick={() => window.location.reload()}>
              Reintentar
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="casos-exito"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50/50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Historias de Éxito"
          badgeVariant="pink"
          title="Vidas transformadas"
          highlightedTitle="que nos inspiran"
          subtitle="Tu apoyo directo hace la diferencia hoy"
        />

        <div className="space-y-12">
          {successStories?.slice(0, 2).map((story, index) => (
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
