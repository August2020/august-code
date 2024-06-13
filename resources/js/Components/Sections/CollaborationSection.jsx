import React, { useEffect } from 'react';
import BoxItem from './Items/BoxItem';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CollaborationSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 10000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const steps = [
        {
            number: 1,
            title: 'Analiza',
            description: 'Przeprowadzam dogłębną analizę Twoich potrzeb i celów biznesowych. Dokładnie przyglądam się Twojej branży, konkurencji i oczekiwaniom klientów, aby lepiej zrozumieć kontekst Twojego projektu.',
        },
        {
            number: 2,
            title: 'Konsultacja',
            description: 'Omawiamy wyniki analizy oraz Twoje pomysły i oczekiwania dotyczące projektu. Wspólnie ustalamy cele, harmonogram oraz szczegóły współpracy, abyśmy byli na jednej stronie co do dalszych działań.',
        },
        {
            number: 3,
            title: 'Projekt Strony',
            description: 'Tworzę projekt strony internetowej. Bazując na analizie i naszych wcześniejszych rozmowach, projektuję interfejs użytkownika (UI) oraz doświadczenie użytkownika (UX), które będą atrakcyjne, intuicyjne i funkcjonalne.',
        },
        {
            number: 4,
            title: 'Programowanie i Testowanie',
            description: 'Po zaakceptowaniu projektu przystępuję do jego wdrożenia i testowania. Tworzę responsywną stronę internetową zgodnie z najnowszymi standardami i najlepszymi praktykami branżowymi.',
        },
        {
            number: 5,
            title: 'Optymalizacja i Wsparcie',
            description: 'Na zakończenie procesu dokonuję ostatecznej optymalizacji strony pod kątem wydajności, szybkości ładowania i SEO. Zapewniam również wsparcie techniczne oraz usługi utrzymania, aby Twoja witryna działała sprawnie i bezproblemowo.',
        },
    ];

    return (
        <section className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 py-8" data-aos="fade-up">
                {/* Title Box */}
                <div className="flex items-center justify-start rounded-xl p-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">
                        Jak może wyglądać nasza współpraca?
                    </h2>
                </div>
                {/* Render BoxItem components */}
                {steps.map((step, index) => (
                    <BoxItem
                        key={index}
                        number={step.number}
                        title={step.title}
                        description={step.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default CollaborationSection;
