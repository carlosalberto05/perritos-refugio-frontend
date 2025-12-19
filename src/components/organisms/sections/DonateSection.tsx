import BaseCard from "../cards/BaseCard";
import { DollarSign, Heart } from "lucide-react";
import Button from "@/components/atoms/Button";

interface DonateSectionProps {
  onDonateClick: () => void;
}

const DonateSection = ({ onDonateClick }: DonateSectionProps) => {
  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-section">
        <div className="max-w-4xl mx-auto">
          <BaseCard className="p-8 md:p-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
              <h2>Apoya Nuestra Misión</h2>

              <p className="text-gray-700 max-w-2xl mx-auto">
                Tu donación nos ayuda a seguir rescatando perritos,
                proporcionarles atención médica, comida de calidad y un lugar
                seguro mientras encuentran un hogar permanente.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <BaseCard className="p-6 bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-500 transition-all cursor-pointer">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Una vez</p>
                    <p className="text-blue-500">$500 MXN</p>
                  </div>
                </BaseCard>
                <BaseCard className="p-6 bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-500 transition-all cursor-pointer">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Ayuda mensual</p>
                    <p className="text-cyan-500">$1,000 MXN</p>
                  </div>
                </BaseCard>
                <BaseCard className="p-6 bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-500 transition-all cursor-pointer shadow-md">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2"> Apadrina un perrito</p>
                    <p className="text-sky-500">$2,000 MXN</p>
                  </div>
                </BaseCard>
              </div>

              <Button
                onClick={onDonateClick}
                variant="primary"
                size="lg"
                className="flex items-center gap-2 gradient-primary gradient-primary-hover text-white border-0 mx-auto"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Donar Ahora
              </Button>
              <p className="text-sm text-gray-500">
                Todas las donaciones son deducibles de impuestos
              </p>
            </div>
          </BaseCard>
        </div>
      </section>
    </>
  );
};

export default DonateSection;
