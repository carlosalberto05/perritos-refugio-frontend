import { SUCCESS_STORIES } from "@/data/home-data";
import SuccessStoryCard from "../cards/SuccessStoryCard";

const SuccessStoriesSection = () => {
  return (
    <>
      <section id="casos-exito" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Historias de Éxito</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Estas son algunas de las historias que nos inspiran a seguir
              adelante. Cada adopción es una vida transformada.
            </p>
          </div>

          <div className="space-y-6">
            {SUCCESS_STORIES.map((story, index) => (
              <SuccessStoryCard key={index} {...story} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStoriesSection;
