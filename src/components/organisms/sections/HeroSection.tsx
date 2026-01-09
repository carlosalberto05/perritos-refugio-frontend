"use client";
import Image from "@/components/atoms/Image";
import { DollarSign, Heart, PawPrint } from "lucide-react";
import Button from "@/components/atoms/Button";
import MetricCard from "@/components/organisms/cards/MetricCard";
import { METRIC_CARD_ELEMENTS } from "@/data/home-data";

interface HeroSectionProps {
  onDonateClick: () => void;
}

export function HeroSection({ onDonateClick }: HeroSectionProps) {
  const handleScrollToAdoption = () => {
    document.getElementById("adopcion")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
                Conectando rescatistas con familias en toda México
              </span>
            </div>
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl max-w-5xl mx-auto leading-tight">
                Encuentra a tu Compañero Perfecto
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 drop-shadow-lg">
                Plataforma que conecta múltiples organizaciones de rescate animal con adoptantes. Descubre perritos cerca de ti y apoya directamente a los rescatistas.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={handleScrollToAdoption}
                type={"button"}
                variant="secondary"
                size={"lg"}
                className="flex items-center gap-2 bg-white text-blue-600 hover:bg-white/90 hover:text-blue-700 shadow-2xl text-lg transition-all"
              >
                <Heart className="mr-2" />
                Ver perritos en adopción
              </Button>
              <Button
                onClick={onDonateClick}
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
              {METRIC_CARD_ELEMENTS.map(
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
  );
}

export default HeroSection;
