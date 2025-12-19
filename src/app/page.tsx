"use client";

import { useState } from "react";

import HeroSection from "@/components/organisms/sections/HeroSection";
import AdoptionSection from "@/components/organisms/sections/AdoptionSection";
import { AdoptionModal } from "@/components/organisms/modals/AdoptionModal";
import DonateSection from "@/components/organisms/sections/DonateSection";
import SuccessStoriesSection from "@/components/organisms/sections/SuccessStoriesSection";
import AboutShelterSection from "@/components/organisms/sections/AboutShelterSection";
import { ContactSection } from "@/components/organisms/sections/ContactSection";
import { DonationModal } from "@/components/organisms/modals/DonationModal";

export default function Home() {
  const [selectedDog, setSelectedDog] = useState<string>("");
  const [isAdoptionModalOpen, setIsAdoptionModalOpen] =
    useState<boolean>(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [showDonationModal, setShowDonationModal] = useState(false);

  const handleAdoptClick = (dogName: string) => {
    setSelectedDog(dogName);
    setIsAdoptionModalOpen(true);
  };

  const handleDonate = () => {
    setShowDonationModal(true);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection onDonateClick={handleDonate} />
      {/* Adoption Section */}
      <AdoptionSection onAdoptClick={handleAdoptClick} />

      {/* Donation Section */}
      <DonateSection onDonateClick={handleDonate} />

      {/* Success Stories */}
      <SuccessStoriesSection />
      {/* About Shelter */}
      <AboutShelterSection />

      {/* Contact Section */}
      <ContactSection />

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
    </>
  );
}
