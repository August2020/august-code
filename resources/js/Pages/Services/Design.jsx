import React from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import HeroSection from "@/Components/Sections/HeroSection";
import ImageContentSection from "@/Components/Sections/ImageContentSection";
import ContentImageSection from "@/Components/Sections/ContentImageSection";

const Design = () => {
    return (
        <DefaultLayout>
            <HeroSection
                title={"Szymon Augustyn - Dowiedz się więcej o mnie!"}
                content={
                    "Cześć! Nazywam się Szymon Augustyn i jestem pasjonatem programowania i projektowania. Na tej stronie możesz dowiedzieć się więcej o moich umiejętnościach, doświadczeniach i projektach, nad którymi pracowałem. Zapraszam do odkrycia mojej historii!"
                }
                imagePath={"/files/images/hero-image.jpg"}
            />

            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <ImageContentSection
                    title={"Więcej o mnie"}
                    content={
                        "Jestem pasjonatem projektowania i programowania stron internetowych. Moją misją jest dostarczanie rozwiązań, które łączą innowacyjny design z funkcjonalnością i efektywnością. Poprzez dbałość o każdy detal, dążę do stworzenia stron, które zapewniają użytkownikom wyjątkowe doświadczenie online."
                    }
                    buttonText={"Czytaj więcej"}
                    imagePath={"/files/images/laptop-code-image.jpg"}
                />
            </div>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <ContentImageSection
                    title={"Więcej o mnie"}
                    content={
                        "Jestem pasjonatem projektowania i programowania stron internetowych. Moją misją jest dostarczanie rozwiązań, które łączą innowacyjny design z funkcjonalnością i efektywnością. Poprzez dbałość o każdy detal, dążę do stworzenia stron, które zapewniają użytkownikom wyjątkowe doświadczenie online."
                    }
                    buttonText={"Czytaj więcej"}
                    imagePath={"/files/images/laptop-code-image.jpg"}
                />
            </div>
        </DefaultLayout>
    );
};

export default Design;
