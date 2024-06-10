import React from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import HeroSection from "@/Components/Sections/HeroSection";
import AboutMeSection from "@/Components/Sections/AboutMeSection";
import ContentImageSection from "@/Components/Sections/ContentImageSection";
import ServicesSection from "@/Components/Sections/ServicesSection";

const Index = () => {
    const servicesImagePath = "/files/images/laptop-code-image.jpg";

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
            <ServicesSection imagePath={servicesImagePath} />
            <ContentImageSection
                title={"Co Może Osiągnąć Twoja Firma?"}
                content={"Twoja firma zyska widoczność w przestrzeni online, przyciągając klientów i budując silną obecność. Dzięki innowacyjnym rozwiązaniom internetowym, obejmującym wszystko od prostych stron internetowych po zaawansowane platformy e-commerce, Twoja firma będzie się wyróżniać. Dodatkowo otrzymasz wsparcie techniczne i usługi utrzymania, zapewniające płynne funkcjonowanie. Moje usługi mają na celu zwiększenie efektywności działania Twojej firmy poprzez automatyzację procesów i optymalizację działań online."}
                imagePath={"/files/images/laptop-code-image.jpg"}
            />
            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 py-8 my-12">
                    {/* First Box */}
                    <div className="flex items-center justify-start rounded-xl p-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl">
                            Jak może wyglądać nasza współpraca?
                        </h2>
                    </div>
                    {/* Second Box */}
                    <div className="flex flex-col p-4 rounded-xl">
                        <span className="lg:text-xl md:text-lg sm:text-md text-gray-500 self-end">
                            1
                        </span>
                        <div className="w-3/4">
                            <h2 className="lg:text-2xl md:text-lg sm:text-md mb-3 font-semibold">
                                Analiza
                            </h2>
                            <p className="lg:text-lg md:text-md sm:text-sm">
                                Przeprowadzam dogłębną analizę Twoich potrzeb i
                                celów biznesowych. Dokładnie przyglądam się
                                Twojej branży, konkurencji i oczekiwaniom
                                klientów, aby lepiej zrozumieć kontekst Twojego
                                projektu.
                            </p>
                        </div>
                    </div>
                    {/* Third Box */}
                    <div className="flex flex-col p-4 rounded-xl">
                        <span className="lg:text-xl md:text-lg sm:text-md text-gray-500 self-end">
                            2
                        </span>
                        <div className="w-3/4">
                            <h2 className="lg:text-2xl md:text-lg sm:text-md mb-3 font-semibold">
                                Konsultacja
                            </h2>
                            <p className="lg:text-lg md:text-md sm:text-sm">
                                Omawiamy wyniki analizy oraz Twoje pomysły i
                                oczekiwania dotyczące projektu. Wspólnie
                                ustalamy cele, harmonogram oraz szczegóły
                                współpracy, abyśmy byli na jednej stronie co do
                                dalszych działań.
                            </p>
                        </div>
                    </div>
                    {/* Fourth Box */}
                    <div className="flex flex-col p-4 rounded-xl">
                        <span className="lg:text-xl md:text-lg sm:text-md text-gray-500 self-end">
                            3
                        </span>
                        <div className="w-3/4">
                            <h2 className="lg:text-2xl md:text-lg sm:text-md mb-3 font-semibold">
                                Projekt Strony
                            </h2>
                            <p className="lg:text-lg md:text-md sm:text-sm">
                                Tworzę projekt strony internetowej. Bazując na
                                analizie i naszych wcześniejszych rozmowach,
                                projektuję interfejs użytkownika (UI) oraz
                                doświadczenie użytkownika (UX), które będą
                                atrakcyjne, intuicyjne i funkcjonalne.
                            </p>
                        </div>
                    </div>
                    {/* Fifth Box */}
                    <div className="flex flex-col p-4 rounded-xl">
                        <span className="lg:text-xl md:text-lg sm:text-md text-gray-500 self-end">
                            4
                        </span>
                        <div className="w-3/4">
                            <h2 className="lg:text-2xl md:text-lg sm:text-md mb-3 font-semibold">
                                Programowanie i Testowanie
                            </h2>
                            <p className="lg:text-lg md:text-md sm:text-sm">
                                Po zaakceptowaniu projektu przystępuję do jego
                                wdrożenia i testowania. Tworzę responsywną
                                stronę internetową zgodnie z najnowszymi
                                standardami i najlepszymi praktykami branżowymi.{" "}
                            </p>
                        </div>
                    </div>
                    {/* Sixth Box */}
                    <div className="flex flex-col p-4 rounded-xl">
                        <span className="lg:text-xl md:text-lg sm:text-md text-gray-500 self-end">
                            5
                        </span>
                        <div className="w-3/4">
                            <h2 className="lg:text-2xl md:text-lg sm:text-md mb-3 font-semibold">
                                Optymalizacja i Wsparcie
                            </h2>
                            <p className="lg:text-lg md:text-md sm:text-sm">
                                Na zakończenie procesu dokonuję ostatecznej
                                optymalizacji strony pod kątem wydajności,
                                szybkości ładowania i SEO. Zapewniam również
                                wsparcie techniczne oraz usługi utrzymania, aby
                                Twoja witryna działała sprawnie i bezproblemowo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Index;
