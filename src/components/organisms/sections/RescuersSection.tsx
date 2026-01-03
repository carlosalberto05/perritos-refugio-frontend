import ShelterCard from "@/components/organisms/cards/ShelterCard";
import { SHELTERS } from "@/data/home-data";

const RescuersSection = () => {
  return (
    <section id="rescatistas" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Colaboradores Locales
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Conoce a los rescatistas <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              y sus misiones
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-medium">
            "Tu apoyo directo hace la diferencia hoy"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHELTERS.map((shelter) => (
            <ShelterCard key={shelter.id} {...shelter} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RescuersSection;
