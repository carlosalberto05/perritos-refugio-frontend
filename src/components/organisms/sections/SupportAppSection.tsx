import { Coffee, ExternalLink } from "lucide-react";
import Button from "../../atoms/Button";

const SupportAppSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="support-card">
          {/* Icon Container */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-200 ring-8 ring-orange-100/50">
              <Coffee className="w-10 h-10" />
            </div>
          </div>

          {/* Content Container */}
          <div className="flex-1 text-center md:text-left space-y-2">
            <h3 className="text-2xl font-bold text-gray-900">
              ¿Te gusta nuestra plataforma?
            </h3>
            <p className="text-gray-600 max-w-2xl leading-relaxed">
              Ayúdanos a mantener esta plataforma funcionando. Tu apoyo nos permite conectar más rescatistas con adoptantes y seguir creciendo.
            </p>
          </div>

          {/* Action Container */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <Button
              variant="accent"
              size="lg"
              className="w-full shadow-orange-200 flex items-center justify-center gap-2"
              onClick={() => window.open("https://buymeacoffee.com", "_blank")}
            >
              <Coffee className="w-5 h-5" />
              <span>Apóyanos</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportAppSection;
