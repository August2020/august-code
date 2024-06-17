import React from "react";
import AboutMeSection from "@/Components/Sections/AboutMeSection";
import CollaborationSection from "@/Components/Sections/CollaborationSection";
import ContentImageSection from "@/Components/Sections/ContentImageSection";
import DefaultLayout from "@/Layouts/DefaultLayout";
import HeroSection from "@/Components/Sections/HeroSection";
import ServicesSection from "@/Components/Sections/ServicesSection";

const Index = () => {
    return (
        <DefaultLayout>
            <HeroSection
                title={"Tworzę profesjonalne strony internetowe od podstaw!"}
                content={
                    "Projektuję i tworzę strony internetowe dla firm, blogi, sklepy internetowe oraz platformy e-commerce. Moje podejście polega na pełnym dostosowaniu każdego projektu do indywidualnych potrzeb klienta. Dbam o każdy szczegół, aby zapewnić intuicyjność, estetykę i funkcjonalność witryn."
                }
                imagePath={"/files/images/hero-image.jpg"}
            />
            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <AboutMeSection
                    title={"Szymon Augustyn"}
                    content={
                        "Jestem pasjonatem projektowania i programowania stron internetowych.Dostarczam rozwiązania, które łączą innowacyjny design z funkcjonalnością i efektywnością. Ttworzę stroy, które zapewniają użytkownikom wyjątkowe doświadczenie online."
                    }
                    additionalContent={
                        "Bez względu na to, czy potrzebujesz strony firmowej, bloga, sklepu internetowego czy platformy e-commerce, moje usługi są dostosowane do Twoich potrzeb."
                    }
                    buttonText={"Czytaj więcej"}
                    imagePath={"/files/images/profilowe.jpg"}
                />
            </div>
            <ServicesSection imagePath={"/files/images/uslugi.jpg"} />
            <ContentImageSection
                title={"Co Może Osiągnąć Twoja Firma?"}
                content={"Twoja firma zyska widoczność w przestrzeni online, przyciągając klientów i budując silną obecność. Dzięki innowacyjnym rozwiązaniom internetowym, obejmującym wszystko od prostych stron internetowych po zaawansowane platformy e-commerce, Twoja firma będzie się wyróżniać. Dodatkowo otrzymasz wsparcie techniczne i usługi utrzymania, zapewniające płynne funkcjonowanie. Moje usługi mają na celu zwiększenie efektywności działania Twojej firmy poprzez automatyzację procesów i optymalizację działań online."}
                imagePath={"/files/images/zysk.jpg"}
            />
            <CollaborationSection />
        </DefaultLayout>
    );
};

export default Index;
