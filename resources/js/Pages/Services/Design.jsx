import React from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import HeroSection from "@/Components/Sections/HeroSection";
import ImageContentSection from "@/Components/Sections/ImageContentSection";
import ContentImageSection from "@/Components/Sections/ContentImageSection";

const Design = () => {
    return (
        <DefaultLayout>
            <HeroSection
                title={"Projektowanie UX i UI Stron Internetowych"}
                content={
                    "Projektowanie wyjątkowych doświadczeń użytkowników i intuicyjnych interfejsów jest kluczem do sukcesu Twojego produktu. Tworzę rozwiązania, które łączą estetykę z funkcjonalnością, przekształcając Twoje pomysły w produkt, który zachwyci Ciebie i Twoich klientów."
                }
                imagePath={"/files/images/projektowanie-hero.jpg"}
            />

            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <ImageContentSection
                    title={"Usługi UX Design"}
                    content={
                        "Projektowanie doświadczeń użytkownika (UX) to proces tworzenia produktów, które zapewniają użytkownikom znaczące i odpowiednie doświadczenia. Moje usługi obejmują badania użytkowników, tworzenie person, prototypowanie, testowanie użyteczności oraz analizę wyników, aby zapewnić, że finalny produkt spełnia potrzeby i oczekiwania użytkowników."
                    }
                    imagePath={"/files/images/ux-design.jpg"}
                />
            </div>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <ContentImageSection
                    title={"Usługi UI Design"}
                    content={
                        "Projektowanie interfejsu użytkownika (UI) koncentruje się na wyglądzie i stylu aplikacji. Oferuję usługi w zakresie tworzenia estetycznych i funkcjonalnych interfejsów, które są intuicyjne i łatwe w użyciu. Moje projekty są zgodne z najnowszymi trendami i standardami branżowymi, aby zapewnić najwyższą jakość i satysfakcję użytkowników."
                    }
                    imagePath={"/files/images/ui-design.jpg"}
                />
            </div>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <ImageContentSection
                    title={"Proces projektowania"}
                    content={
                        "Mój proces projektowania obejmuje kilka kluczowych etapów: odkrycie, definiowanie, rozwój i dostarczenie. Na każdym z tych etapów ściśle współpracuję z klientami, aby zapewnić, że końcowy produkt jest zgodny z ich wizją i celami. Od wstępnych badań i tworzenia prototypów, po testowanie i ostateczne wdrożenie, dążę do stworzenia wyjątkowych i efektywnych rozwiązań."
                    }
                    imagePath={"/files/images/projektowanie-proces.jpg"}
                />
            </div>
        </DefaultLayout>
    );
};

export default Design;
