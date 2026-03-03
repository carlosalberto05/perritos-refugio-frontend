'use client';

import Link from 'next/link';
import ShelterCard from '@/components/organisms/cards/ShelterCard';
import { useShelters } from '@/api/shelters';
import SectionHeader from '@/components/molecules/SectionHeader';
import Button from '@/components/atoms/Button';

const RescuersSection = () => {
  const { data: shelters, isLoading, error } = useShelters();

  if (isLoading) {
    return (
      <section id="adopcion" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Nuestros Protegidos"
            title="Perritos en"
            highlightedTitle="Adopción"
            subtitle="Todos nuestros perritos han sido rescatados, vaccinated and sterilized. They are ready to find a home full of love."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card-light p-4 animate-pulse">
                <div className="bg-gray-200 rounded-xl h-48 mb-4" />
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
      id="rescatistas"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Colaboradores Locales"
          title="Conoce a los rescatistas"
          highlightedTitle="y sus misiones"
          subtitle="Tu apoyo directo hace la diferencia hoy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shelters?.slice(0, 3).map((shelter) => (
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
