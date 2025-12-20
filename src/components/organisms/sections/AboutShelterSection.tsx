import { Heart, Users, PawPrint, Home as IconHome } from "lucide-react";
import BaseCard from "../cards/BaseCard";
import Image from "@/components/atoms/Image";

const AboutShelterSection = () => {
  return (
    <>
      <section
        id="refugio"
        className="py-20 px-4 sm:px-6 lg:px-8 gradient-section-alt"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2>Sobre Nuestro Refugio</h2>
              <p className="text-gray-700">
                Patitas Felices nació en 2018 con la misión de rescatar perritos
                abandonados y maltratados de las calles. Desde entonces, hemos
                rescatado y rehabilitado a más de 500 perritos, encontrando
                hogares amorosos para la mayoría de ellos.
              </p>
              <p className="text-gray-700">
                Nuestro refugio cuenta con instalaciones modernas, atención
                veterinaria las 24 horas, y un equipo de voluntarios dedicados
                que brindan amor y cuidado a cada uno de nuestros rescatados.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-500">
                    <IconHome className="w-6 h-6" />
                    <p>500+</p>
                  </div>
                  <p className="text-sm text-gray-600">Perritos rescatados</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-cyan-500">
                    <Heart className="w-6 h-6" />
                    <p>450+</p>
                  </div>
                  <p className="text-sm text-gray-600">Adopciones exitosas</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sky-500">
                    <Users className="w-6 h-6" />
                    <p>50+</p>
                  </div>
                  <p className="text-sm text-gray-600">Voluntarios activos</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-500">
                    <PawPrint className="w-6 h-6" />
                    <p>30</p>
                  </div>
                  <p className="text-sm text-gray-600">Perritos actuales</p>
                </div>
              </div>
            </div>

            <BaseCard className="overflow-hidden glass-card-light">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBzaGVsdGVyJTIwdm9sdW50ZWVyfGVufDF8fHx8MTc2MTg5NTg2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Refugio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </BaseCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutShelterSection;
