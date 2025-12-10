"use client";
import Image from "../components/atoms/Image";
import {
  DollarSign,
  Heart,
  Users,
  PawPrint,
  Home as IconHome,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Button from "@/components/atoms/Button";
import MetricCard from "@/components/organisms/cards/MetricCard";
import DogCard from "@/components/organisms/cards/DogCard";
import { useState } from "react";
import Modal from "@/components/organisms/Modal";
import BaseCard from "@/components/organisms/cards/BaseCard";
import SuccessStoryCard from "@/components/organisms/cards/SuccessStoryCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/organisms/Dialog";
import Input from "@/components/atoms/Input";

export default function Home() {
  const [selectedDog, setSelectedDog] = useState<string>("");
  const [isAdoptionModalOpen, setIsAdoptionModalOpen] =
    useState<boolean>(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [showDonationDialog, setShowDonationDialog] = useState(false);

  const handleAdoptClick = (dogName: string) => {
    setSelectedDog(dogName);
    setIsAdoptionModalOpen(true);
  };

  const handleDonate = () => {
    setShowDonationDialog(true);
  };

  const MetricCardElements = [
    {
      IconComponent: IconHome,
      value: "500+",
      label: "Rescatados",
      iconColorClass: "text-cyan-300",
    },
    {
      IconComponent: Heart,
      value: "450+",
      label: "Adoptados",
      iconColorClass: "text-pink-300",
    },
    {
      IconComponent: Users,
      value: "50+",
      label: "Voluntarios",
      iconColorClass: "text-blue-300",
    },
    {
      IconComponent: PawPrint,
      value: "30",
      label: "Disponibles",
      iconColorClass: "text-green-300",
    },
  ];

  const dogs = [
    {
      id: "1",
      name: "Luna",
      age: "2 años",
      size: "Mediano",
      breed: "Mestizo",
      adoptionStatus: "En adopción",
      image:
        "https://images.unsplash.com/photo-1706745262357-5ecaa3154433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcHVwcHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE4OTU4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Luna es una perrita muy cariñosa y juguetona, perfecta para familias con niños.",
    },
    {
      id: "2",
      name: "Max",
      age: "3 años",
      size: "Grande",
      breed: "Golden Retriever",
      adoptionStatus: "Adoptado",
      image:
        "https://images.unsplash.com/photo-1689185083033-fd8512790d29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2d8ZW58MXx8fHwxNzYxODI2NTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Max es un perro tranquilo y leal, ideal para personas activas que disfruten de paseos.",
    },
    {
      id: "3",
      name: "Bella",
      age: "1 año",
      size: "Pequeño",
      breed: "Beagle",
      adoptionStatus: "Reservado",
      image:
        "https://images.unsplash.com/photo-1631048905843-88f82fba8fd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFnbGUlMjBkb2d8ZW58MXx8fHwxNzYxOTI4NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Bella es muy energética y le encanta jugar. Perfecta para hogares con espacio.",
    },
    {
      id: "4",
      name: "Rocky",
      age: "4 años",
      size: "Grande",
      breed: "Husky",
      adoptionStatus: "En adopción",
      image:
        "https://images.unsplash.com/photo-1590419690008-905895e8fe0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodXNreSUyMGRvZ3xlbnwxfHx8fDE3NjE5MjIwODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Rocky es un perro noble y protector, ideal para personas con experiencia.",
    },
    {
      id: "5",
      name: "Coco",
      age: "2 años",
      size: "Pequeño",
      breed: "Mestizo",
      adoptionStatus: "En adopción",
      image:
        "https://images.unsplash.com/photo-1710530911048-dd0acc539612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGRvZyUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzYxOTMxMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Coco es muy dulce y se lleva bien con otros perros. Ideal para cualquier hogar.",
    },
    {
      id: "6",
      name: "Charlie",
      age: "5 años",
      size: "Mediano",
      breed: "Mestizo",
      adoptionStatus: "En adopción",
      image:
        "https://images.unsplash.com/photo-1641349067134-245df2efdc95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHJlc2N1ZSUyMGRvZ3xlbnwxfHx8fDE3NjE5MzEzMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Charlie es un perro maduro y calmado, perfecto para personas mayores o tranquilas.",
    },
  ] as const;

  const successStories = [
    {
      dogName: "Toby",
      ownerName: "Familia Rodríguez",
      story:
        "Toby llegó al refugio en condiciones difíciles, pero hoy es parte de una familia amorosa. Los Rodríguez no pueden imaginar su vida sin él.",
      image:
        "https://images.unsplash.com/photo-1654053284918-42dadb960669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBhZG9wdGlvbiUyMGZhbWlseXxlbnwxfHx8fDE3NjE5MzEzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "Adoptado en Septiembre 2024",
    },
    {
      dogName: "Nina",
      ownerName: "María González",
      story:
        "Nina fue rescatada de la calle con múltiples heridas. Después de su recuperación, encontró un hogar lleno de amor donde ahora vive feliz.",
      image:
        "https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBzaGVsdGVyJTIwdm9sdW50ZWVyfGVufDF8fHx8MTc2MTg5NTg2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "Adoptado en Agosto 2024",
    },
  ];

  return (
    <>
      <section className="relative pt-20 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Happy shelter dogs"
            fill
            className={"object-cover"}
            src={
              "https://images.unsplash.com/photo-1720705313994-12cd7930da3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNoZWx0ZXIlMjBkb2dzfGVufDF8fHx8MTc2NDYxMTg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            }
          />
          <div className="absolute inset-0 gradient-hero-overlay" />
          {/* <div className="absolute inset-0 backdrop-blur-[2px]" /> */}
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-overlay">
                <PawPrint className="w-5 h-5 text-cyan-300" />
                <span className="text-white/90 text-sm">
                  Más de 500 vidas rescatadas desde 2018
                </span>
              </div>
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl max-w-5xl mx-auto leading-tight">
                  Dale una segunda oportunidad a un amigo fiel
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 drop-shadow-lg">
                  Esta es una app para ayudar a rescatar, rehabilitar y
                  encontrar hogares amorosos para perritos que lo necesitan.
                  Cada uno de ellos tiene una historia única y está esperando
                  ser parte de la tuya.
                </p>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  onClick={() =>
                    document
                      .getElementById("adopcion")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  type={"button"}
                  variant="secondary"
                  size={"lg"}
                  className="flex items-center gap-2 bg-white text-blue-600 hover:bg-white/90 hover:text-blue-700 shadow-2xl text-lg transition-all"
                >
                  <Heart className="mr-2" />
                  Ver perritos en adopción
                </Button>
                <Button
                  onClick={handleDonate}
                  type={"button"}
                  variant={"ghost"}
                  size={"lg"}
                  className="flex items-center gap-2 glass-overlay text-white border-2 border-white/40 hover:bg-white/60 hover:text-gray-900 shadow-xl text-lg transition-all"
                >
                  <DollarSign className="mr-2" />
                  Apoya nuestra causa
                </Button>
              </div>

              {/* MericCards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-12">
                {MetricCardElements.map(
                  ({ IconComponent, value, label, iconColorClass }) => {
                    return (
                      <MetricCard
                        key={label}
                        IconComponent={IconComponent}
                        value={value}
                        label={label}
                        iconColorClass={iconColorClass}
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>
      <section id="adopcion" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Perritos en Adopción</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Todos nuestros perritos han sido rescatados, vacunados y
              esterilizados. Están listos para encontrar un hogar lleno de amor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dogs.map(
              ({
                id,
                name,
                age,
                size,
                breed,
                image,
                description,
                adoptionStatus,
              }) => {
                return (
                  <DogCard
                    key={id}
                    name={name}
                    age={age}
                    size={size}
                    breed={breed}
                    imageUrl={image}
                    description={description}
                    adoptionStatus={adoptionStatus}
                    onAdoptClick={() => handleAdoptClick(name)}
                  />
                );
              }
            )}
          </div>
        </div>
      </section>
      <Modal
        isOpen={isAdoptionModalOpen}
        onClose={() => setIsAdoptionModalOpen(false)}
        title={`¡Gracias por tu interés en adoptar a ${selectedDog}!`}
        primaryButtonText="Entendido"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Para iniciar el proceso de adopción, por favor contáctanos al
            teléfono <span className="font-semibold">+52 55 1234 5678</span> o
            envíanos un email a{" "}
            <a
              href="mailto:adopciones@patitasfelices.org"
              className="text-primary-500 hover:text-primary-600 font-semibold"
            >
              adopciones@patitasfelices.org
            </a>
          </p>

          <div>
            <p className="font-semibold text-gray-900 mb-2">
              El proceso de adopción incluye:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Entrevista inicial</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Visita al refugio para conocer a {selectedDog}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Verificación de domicilio</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Firma de contrato de adopción</span>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
      {/* Donation Section */}
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
                onClick={handleDonate}
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

      {/* Success Stories */}
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
            {successStories.map((story, index) => (
              <SuccessStoryCard key={index} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* About Shelter */}
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

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <BaseCard className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="mb-4">Contáctanos</h2>
              <p className="text-gray-600">
                ¿Tienes preguntas sobre adopción o quieres ser voluntario?
                Estamos aquí para ayudarte.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <h3>Teléfono</h3>
                <p className="text-gray-600">+52 55 1234 5678</p>
              </div>

              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100">
                  <Mail className="w-6 h-6 text-cyan-500" />
                </div>
                <h3>Email</h3>
                <p className="text-gray-600">contacto@patitasfelices.org</p>
              </div>

              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-100">
                  <MapPin className="w-6 h-6 text-sky-500" />
                </div>
                <h3>Ubicación</h3>
                <p className="text-gray-600">Ciudad de México, CDMX</p>
              </div>
            </div>
          </BaseCard>
        </div>
        {/* Donation Dialog */}
        <Dialog open={showDonationDialog} onOpenChange={setShowDonationDialog}>
          <DialogContent className="bg-white/95 backdrop-blur-xl">
            <DialogHeader>
              <DialogTitle>Realizar una Donación</DialogTitle>
              <DialogDescription>
                Tu apoyo nos ayuda a seguir rescatando vidas. Elige la cantidad
                que deseas donar.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant="primary"
                  onClick={() => setDonationAmount("500")}
                  className={
                    donationAmount === "500" ? "border-blue-500 bg-blue-50" : ""
                  }
                >
                  $500
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setDonationAmount("1000")}
                  className={
                    donationAmount === "1000"
                      ? "border-blue-500 bg-blue-50"
                      : ""
                  }
                >
                  $1,000
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setDonationAmount("2000")}
                  className={
                    donationAmount === "2000"
                      ? "border-blue-500 bg-blue-50"
                      : ""
                  }
                >
                  $2,000
                </Button>
              </div>

              <div className="space-y-2">
                <label className="text-sm">Otra cantidad (MXN)</label>
                <Input
                  type="number"
                  placeholder="Ingresa la cantidad"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
              </div>

              <Button
                variant="primary"
                disabled={!donationAmount}
                className="flex items-center justify-center gap-2 w-full gradient-primary gradient-primary-hover text-white border-0"
              >
                <DollarSign className="w-4 h-4 mr-2" />
                Donar ${donationAmount || "0"} MXN
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
}
