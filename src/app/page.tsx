"use client";
import Image from "next/image";
import {
  DollarSign,
  Heart,
  Users,
  PawPrint,
  Home as IconHome,
} from "lucide-react";
import Button from "@/components/atoms/Button";
import MetricCard from "@/components/organisms/MetricCard";
import Card from "@/components/organisms/Card";
import { useState } from "react";
import Modal from "@/components/organisms/Modal";

export default function Home() {
  const [selectedDog, setSelectedDog] = useState<string>("");
  const [isAdoptionModalOpen, setIsAdoptionModalOpen] =
    useState<boolean>(false);

  const handleAdoptClick = (dogName: string) => {
    setSelectedDog(dogName);
    setIsAdoptionModalOpen(true);
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-900/70 to sky-900/80" />
          {/* <div className="absolute inset-0 backdrop-blur-[2px]" /> */}
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
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
                      .getElementById("adoption")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  type={"button"}
                  variant={"ghost"}
                  size={"lg"}
                  className="bg-white text-blue-600 hover:bg-white/90 flex row justify-center align-center shadow-2xl text-lg "
                >
                  <Heart className="mr-2" />
                  Ver perritos en adopción
                </Button>
                <Button
                  onClick={() =>
                    document
                      .getElementById("adoption")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  type={"button"}
                  variant={"ghost"}
                  size={"lg"}
                  className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 flex row justify-center align-center shadow-xl text-lg"
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
                  <Card
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
    </>
  );
}
