"use client";

import { use } from "react";
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowLeft, 
  PawPrint, 
  Info,
  Calendar,
  Building2
} from "lucide-react";
import Link from "next/link";
import { SHELTERS, DOGS } from "@/data/home-data";
import DogCard from "@/components/organisms/cards/DogCard";
import Button from "@/components/atoms/Button";
import Image from "@/components/atoms/Image";
import { useState } from "react";
import { AdoptionModal } from "@/components/organisms/modals/AdoptionModal";
import { DonationModal } from "@/components/organisms/modals/DonationModal";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ShelterPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const shelter = SHELTERS.find((s) => s.id === resolvedParams.id);
  
  const [selectedDog, setSelectedDog] = useState<string>("");
  const [isAdoptionModalOpen, setIsAdoptionModalOpen] = useState(false);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");

  if (!shelter) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">Refugio no encontrado</h1>
            <Link href="/">
                <Button variant="primary">Volver al inicio</Button>
            </Link>
        </div>
    );
  }

  const shelterDogs = DOGS.filter((dog) => dog.shelter?.id === shelter.id);

  const handleAdoptClick = (dogName: string) => {
    setSelectedDog(dogName);
    setIsAdoptionModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section with Parallax-like Background */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src={shelter.image}
          alt={shelter.name}
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-end gap-6">
                {/* Logo with Glassmorphism */}
                <div className="relative -mb-16 sm:-mb-20">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-white/80 backdrop-blur-xl p-2 shadow-2xl border border-white/20 overflow-hidden">
                        <Image
                            src={shelter.logo}
                            alt={`${shelter.name} logo`}
                            width={160}
                            height={160}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
                <div className="flex-grow text-white pb-4 sm:pb-8">
                    <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-2 drop-shadow-md">
                        {shelter.name}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-white/90">
                        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                            <MapPin className="w-4 h-4 text-cyan-300" />
                            <span className="text-sm font-medium">{shelter.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                            <PawPrint className="w-4 h-4 text-blue-300" />
                            <span className="text-sm font-medium">{shelter.rescuedCount} perritos bajo su cuidado</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Mission & Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Mission Section */}
            <section className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-gray-100">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">
                <Info className="w-3 h-3" />
                Nuestra Misión
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-6">
                "{shelter.mission}"
              </p>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {shelter.description}
                </p>
              </div>
            </section>

            {/* Shelter Dogs Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-gray-900">Perritos disponibles</h2>
                <div className="h-1 flex-grow mx-6 bg-gradient-to-r from-gray-200 to-transparent rounded-full hidden sm:block" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {shelterDogs.length > 0 ? (
                  shelterDogs.map((dog) => (
                    <DogCard
                      key={dog.id}
                      name={dog.name}
                      age={dog.age}
                      size={dog.size}
                      breed={dog.breed}
                      imageUrl={dog.image}
                      description={dog.description}
                      adoptionStatus={dog.adoptionStatus}
                      shelter={dog.shelter}
                      onAdoptClick={() => handleAdoptClick(dog.name)}
                    />
                  ))
                ) : (
                  <p className="text-gray-500 italic">No hay perritos disponibles en este momento.</p>
                )}
              </div>
            </section>
          </div>

          {/* Right Column: CTA & Contact */}
          <div className="space-y-8">
            {/* Urgent Needs / Donation Card */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-[2rem] p-8 text-white shadow-xl shadow-orange-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Heart className="w-32 h-32 fill-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 relative z-10">Apoya nuestra labor</h3>
              {shelter.urgentNeeds && (
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 mb-6 relative z-10 border border-white/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-100 mb-1">Necesidad Urgente</p>
                  <p className="text-lg font-bold">{shelter.urgentNeeds}</p>
                </div>
              )}
              <p className="text-white/90 text-sm font-medium mb-8 relative z-10">
                Cada donación va directamente a la alimentación, medicinas y cuidados de nuestros rescatados.
              </p>
              <Button 
                variant="primary" 
                fullWidth 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-50 border-none shadow-lg relative z-10"
                onClick={() => setShowDonationModal(true)}
              >
                Donar ahora
              </Button>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Información de contacto</h3>
                <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                            <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Teléfono</p>
                            <p className="text-gray-900 font-bold">{shelter.contactPhone}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                            <Mail className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</p>
                            <p className="text-gray-900 font-bold">{shelter.contactEmail}</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                    <Link href="/" className="flex items-center justify-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Ver otros refugios</span>
                    </Link>
                </div>
            </div>
          </div>

        </div>
      </main>

      <AdoptionModal
        isOpen={isAdoptionModalOpen}
        onClose={() => setIsAdoptionModalOpen(false)}
        dogName={selectedDog}
      />

      <DonationModal
        isOpen={showDonationModal}
        onClose={() => setShowDonationModal(false)}
        amount={donationAmount}
        setAmount={setDonationAmount}
      />
    </div>
  );
}
