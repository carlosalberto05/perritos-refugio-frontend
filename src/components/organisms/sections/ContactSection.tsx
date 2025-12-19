import { Phone, Mail, MapPin } from "lucide-react";
import BaseCard from "@/components/organisms/cards/BaseCard";
import { CONTACT_INFO } from "@/data/home-data";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <BaseCard className="p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="mb-4">Contáctanos</h2>
            <p className="text-gray-600">
              ¿Tienes preguntas sobre adopción o quieres ser voluntario? Estamos
              aquí para ayudarte.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ContactInfoItem
              Icon={Phone}
              title="Teléfono"
              value={CONTACT_INFO.phone}
              colorClass="bg-blue-100 text-blue-500"
            />
            <ContactInfoItem
              Icon={Mail}
              title="Email"
              value={CONTACT_INFO.email}
              colorClass="bg-cyan-100 text-cyan-500"
            />
            <ContactInfoItem
              Icon={MapPin}
              title="Ubicación"
              value={CONTACT_INFO.location}
              colorClass="bg-sky-100 text-sky-500"
            />
          </div>
        </BaseCard>
      </div>
    </section>
  );
};

// Sub-componente interno para no repetir código
interface ContactInfoItemProps {
  Icon: LucideIcon; // Tipo especializado de Lucide
  title: string;
  value: string;
  colorClass: string;
}

const ContactInfoItem = ({
  Icon,
  title,
  value,
  colorClass,
}: ContactInfoItemProps) => (
  <div className="text-center space-y-3">
    <div
      className={cn(
        "inline-flex items-center justify-center w-12 h-12 rounded-full",
        colorClass
      )}
    >
      <Icon className="w-6 h-6" />
    </div>
    <h3>{title}</h3>
    <p className="text-gray-600">{value}</p>
  </div>
);
