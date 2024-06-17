import React from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import HeroSection from "@/Components/Sections/HeroSection";
import ImageContentSection from "@/Components/Sections/ImageContentSection";
import ContentImageSection from "@/Components/Sections/ContentImageSection";

const Programming = () => {
    return (
        <DefaultLayout>
            <HeroSection
                title={"Programowanie Stron Internetowych"}
                content={
                    "Specjalizuję się w dostarczaniu wysokiej jakości rozwiązań programistycznych, które spełniają unikalne potrzeby Twojego biznesu. Dzięki nowoczesnym technologiom i najlepszym praktykom, pomagam firmom rozwijać się i osiągać sukces."
                }
                imagePath={"/files/images/programowanie-hero.jpg"}
            />

            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <ImageContentSection
                    title={"Tworzenie Aplikacji Webowych"}
                    content={
                        "Oferuję kompleksowe usługi w zakresie tworzenia aplikacji webowych, od wstępnej koncepcji po finalne wdrożenie. Moje projekty są skalowalne, responsywne i zoptymalizowane pod kątem wydajności, aby zapewnić użytkownikom najlepsze doświadczenia online."
                    }
                    imagePath={"/files/images/programowanie-1.jpg"}
                />
            </div>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <ContentImageSection
                    title={"Rozwój Oprogramowania"}
                    content={
                        "Zajmuję się pełnym cyklem rozwoju oprogramowania, począwszy od analizy wymagań, przez projektowanie i implementację, aż po testowanie i wsparcie techniczne. Wykorzystuję nowoczesne technologie, aby tworzyć rozwiązania, które są nie tylko funkcjonalne, ale także bezpieczne i wydajne."
                    }
                    imagePath={"/files/images/programowanie-2.jpg"}
                />
            </div>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <ImageContentSection
                    title={"Integracja Systemów"}
                    content={
                        "Pomagam firmom integrować różnorodne systemy i aplikacje, aby umożliwić płynną wymianę danych i optymalizację procesów biznesowych. Dzięki moim usługom integracyjnym, Twoja firma może zyskać przewagę konkurencyjną poprzez efektywne wykorzystanie istniejących zasobów."
                    }
                    imagePath={"/files/images/programowanie-3.jpg"}
                />
            </div>
        </DefaultLayout>
    );
};

export default Programming;
