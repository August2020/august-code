import React from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import HeroSection from "@/Components/Sections/HeroSection";
import ContentImageSection from "@/Components/Sections/ContentImageSection";
import TwoColumnImageSectionV1 from "@/Components/Sections/TwoColumnImageSectionV1";
import TwoColumnImageSectionV2 from "@/Components/Sections/TwoColumnImageSectionV2";
import ContactSection from "@/Components/Sections/ContactSection";

const Index = () => {
    // Define the imageIcons array for the 2x2 grid layout
    const imageIconsForDesign = [
        { type: "image", src: "/files/images/laptop-code-image.jpg" },
        {
            type: "icon",
            iconPath:
                "M24 23h-20c-2.208 0-4-1.792-4-4v-15.694c.313-1.071 1.285-2.306 3-2.306 1.855 0 2.769 1.342 2.995 2.312l.005 1.688h18v18zm-2-16h-16v11s-.587-1-1.922-1c-1.104 0-2.078.896-2.078 2s.896 2 2 2h18v-14zm-2 12h-12v-10h12v10zm-8-9h-3v8h10v-8h-6v3h6v1h-2v3h-1v-3h-3v3h-1v-7z",
        },
        {
            type: "icon",
            iconPath:
                "M6.914 2.741l15.557 15.556-4.243 4.243-15.556-15.557 4.242-4.242zm-.707-.707l-2.033-2.034-4.174 4.243 1.965 2.034 4.242-4.243zm12.821 21.119l4.972.847-.918-4.901-4.054 4.054zm-4.567-15.694l.389-.388.707.707.707-.707-.707-.707.707-.707.707.707.708-.708-.707-.706 2.121-2.121 2.121 2.121-4.631 4.631 1.393 1.393 6.024-6.024-4.908-4.95-6.045 6.045 1.414 1.414zm-4.949 9.193l-4.562 4.561-2.121-2.121.707-.708.707.707.707-.707-.707-.707.707-.707.707.707.707-.707-.707-.707.707-.707.707.707.707-.707-.707-.706.319-.319-1.415-1.415-5.975 5.976 4.95 4.908 5.955-5.955-1.393-1.393zm9.934-11.349c.195-.195.195-.512 0-.707s-.512-.195-.707 0-.195.512 0 .707.512.196.707 0z",
        },
        { type: "image", src: "/files/images/laptop-code-image.jpg" },
    ];

    const imageIconsForProgramming = [
        { type: "image", src: "/files/images/laptop-code-image.jpg" },
        {
            type: "icon",
            iconPath:
                "M13 12v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201zm5.362-12.201c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614z",
        },
        {
            type: "icon",
            iconPath:
                "M22 17v-11.8c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20zm-18-11h16v9h-16v-9zm20 12v.8c0 .663-.537 1.2-1.2 1.2h-21.6c-.663 0-1.2-.537-1.2-1.2v-.8h10c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5h10z",
        },
        { type: "image", src: "/files/images/laptop-code-image.jpg" },
    ];

    return (
        <DefaultLayout>
            <HeroSection
                title={"Tworzę profesjonalne strony internetowe od podstaw!"}
                content={
                    "Zaprojektuję oraz wykonam spersonalizowaną witrynę internetową dostosowaną do potrzeb Twojej firmy, dbając o każdy detal."
                }
                imagePath={"/files/images/hero-image.jpg"}
            />
            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <ContentImageSection
                    title={"Szymon Augustyn"}
                    content={
                        "Jestem pasjonatem projektowania i programowania stron internetowych. Moją misją jest dostarczanie rozwiązań, które łączą innowacyjny design z funkcjonalnością i efektywnością. Poprzez dbałość o każdy detal, dążę do stworzenia stron, które zapewniają użytkownikom wyjątkowe doświadczenie online."
                    }
                    buttonText={"Czytaj więcej"}
                    imagePath={"/files/images/profilowe.jpg"}
                />

                <TwoColumnImageSectionV1
                    title={"Projektowanie strony (UX/UI Design)"}
                    content={
                        "Moje podejście do projektowania stron internetowych opiera się na głębokim zrozumieniu Twoich potrzeb i celów. Tworzę strony, które nie tylko przyciągają uwagę wizualną, ale także skutecznie komunikują przekaz i budują zaufanie Twoich klientów."
                    }
                    buttonText={"Czytaj więcej"}
                    imageIcons={imageIconsForDesign}
                />

                <TwoColumnImageSectionV2
                    title={"Programowanie Strony (Frontend & Backend)"}
                    content={
                        "Moje usługi programowania stron zapewniają kompleksowe wsparcie w tworzeniu witryn internetowych, które są nie tylko działające i wydajne, ale również dostosowane do różnych urządzeń i zoptymalizowane pod kątem wyszukiwarek."
                    }
                    buttonText={"Czytaj więcej"}
                    imageIcons={imageIconsForProgramming}
                />

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 py-8 my-12 px-4">
                    {/* First Box */}
                    <div className="flex items-center justify-start rounded-xl p-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl">
                            Jak będzie wyglądać nasza współpraca?
                        </h2>
                    </div>
                    {/* Second Box */}
                    <div className="flex flex-col p-4 rounded-xl">
                        <span className="text-xs text-gray-500 self-end">
                            1
                        </span>
                        <div className="w-3/4">
                            <h2 className="text-lg font-semibold">Analiza</h2>
                            <p className="text-sm">
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
                        <span className="text-xs text-gray-500 self-end">
                            2
                        </span>
                        <div className="w-3/4">
                            <h2 className="text-lg font-semibold">
                                Konsultacja
                            </h2>
                            <p className="text-sm">
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
                        <span className="text-xs text-gray-500 self-end">
                            3
                        </span>
                        <div className="w-3/4">
                            <h2 className="text-lg font-semibold">
                                Projekt Strony
                            </h2>
                            <p className="text-sm">
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
                        <span className="text-xs text-gray-500 self-end">
                            4
                        </span>
                        <div className="w-3/4">
                            <h2 className="text-lg font-semibold">
                                Programowanie i Testowanie
                            </h2>
                            <p className="text-sm">
                                Po zaakceptowaniu projektu przystępuję do jego
                                wdrożenia i testowania. Tworzę responsywną
                                stronę internetową zgodnie z najnowszymi
                                standardami i najlepszymi praktykami branżowymi.{" "}
                            </p>
                        </div>
                    </div>
                    {/* Sixth Box */}
                    <div className="flex flex-col p-4 rounded-xl">
                        <span className="text-xs text-gray-500 self-end">
                            5
                        </span>
                        <div className="w-3/4">
                            <h2 className="text-lg font-semibold">
                                Optymalizacja i Wsparcie
                            </h2>
                            <p className="text-sm">
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
            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <div className="container mx-auto flex flex-col justify-center">
                    {/* Title and Content */}
                    <div className="mb-8 my-8 text-center">
                        <h2 className="text-3xl font-bold">
                            Co możesz zyskać Twoja firma?
                        </h2>
                    </div>
                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Card 1 */}
                        <div className="bg-white p-4 rounded-lg flex flex-col relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-2 right-2 z-0"
                                viewBox="0 0 126 126"
                                fill="rgb(243 244 246)"
                            >
                                <path d="M12 0c-4.971 0-9 4.03-9 9s4.029 9 9 9 9-4.03 9-9-4.029-9-9-9zm4.298 15.137c-.079-.395-.177-.784-.299-1.166.673-.608.646-1.648-.054-2.162.436-1.739.458-3.636-.002-5.465.139-.083.261-.191.355-.319 1.101.309 2.124.8 3.04 1.434.105.497.162 1.012.162 1.541 0 2.537-1.269 4.779-3.202 6.137zm-11.798-6.137c0-.642.09-1.261.242-1.856.523-.033 1.044-.03 1.61.024l.03.169c-.691.581-1.312 1.246-1.864 2.005l-.018-.342zm2.387-.893c.636.482 1.562.327 1.997-.368 2.174.795 4.004 2.308 5.205 4.25-.575.581-.567 1.498.014 2.021-.511.923-1.161 1.758-1.919 2.48-3.678.087-6.693-2.446-7.477-5.773.578-.986 1.315-1.869 2.18-2.61zm2.165-1.425c1.493-.73 3.116-1.074 4.743-1.033.229.458.697.807 1.249.875h.005c.417 1.618.437 3.354.021 5.025l-.167.017c-1.294-2.119-3.325-3.849-5.823-4.726l-.028-.158zm4.546 9.643c.527-.613.983-1.271 1.36-1.971l.203-.006c.129.421.229.854.306 1.297-.582.305-1.209.536-1.869.68zm5.328-10.199c-.758-.42-1.557-.752-2.393-.983-.081-.746-.78-1.368-1.589-1.362-.415-.764-.924-1.481-1.517-2.141 2.49.482 4.546 2.197 5.499 4.486zm-4.855-2.031c-.192.165-.333.386-.393.644-1.842-.022-3.585.395-5.137 1.174-.637-.479-1.551-.316-1.982.361-.547-.056-1.036-.068-1.518-.053 1.106-2.763 3.806-4.721 6.959-4.721h.001c.822.745 1.525 1.62 2.07 2.595zm-6.071 19.905v-2h3v-2h2v2h3v2h-8zm9-2v2h3v-2h-3zm-10 0h-3v2h3v-2z" />
                            </svg>
                            <div className="z-20 my-10">
                                <h3 className="text-lg font-semibold mt-12">
                                    Zaistnejesz w Internecie
                                </h3>
                                <p className="text-sm">
                                    Twoja firma stanie się widoczna w
                                    przestrzeni online. Twoja firma przyciągnie
                                    uwagę klientów i zdobędzie silną pozycję w
                                    świecie online.
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white p-4 rounded-lg flex flex-col relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-2 right-2 z-0"
                                viewBox="0 0 126 126"
                                fill="rgb(243 244 246)"
                            >
                                <path d="M17.281 8.991l3.706 1.97-2.261 2.013.011.006 2.25 3.09-2.25 1.228v3.096l-6.75 3.606-6.75-3.606v-3.091l-2.25-1.225 2.234-3.075-2.234-1.966 3.747-2.043c-.108.371-.197.808-.245 1.272l-1.769.964 1.181 1.04.624-.345c.056.339.146.672.279.984l-.823.456 6.028 3.124 5.978-3.119-.812-.451c.145-.299.245-.618.31-.944l.531.293 1.234-1.098-1.707-.907c-.05-.464-.146-.9-.262-1.272zm-4.798 8.217v5.393l5.256-2.807v-1.951l-3.502 1.91-1.754-2.545zm-6.247.639v1.947l5.249 2.804v-5.388l-1.748 2.543-3.501-1.906zm-1.772-2.103l4.96 2.7 1.099-1.599-4.983-2.582-1.076 1.481zm8.989 1.11l1.096 1.59 4.96-2.706-1.073-1.475-4.983 2.591zm-1.199-1.691h-.625l.003-2.728h.625l-.003 2.728zm-1.159-1.424h-.625l.009-1.739h.625l-.009 1.739zm2.358-.014h-.626l-.009-1.725h.625l.01 1.725zm-3.094-2.468l-.318-.734c-.732.269-2.155 2.284-2.155 2.284-1.195-2.607.161-4.846 1.243-5.659-.083-.699-.644-4.168 2.817-7.113l.041-.035.041.035c3.462 2.945 2.901 6.414 2.817 7.113 1.083.813 2.438 3.052 1.243 5.659 0 0-1.423-2.015-2.155-2.284l-.317.734-1.629.005-1.628-.005zm1.628-9.919c-1.093.923-2.432 3.393-1.854 6.223-.726.6-1.58 1.454-1.712 3.089.577-.77 1.419-1.21 2.091-1.356 0 0 .424.782.507.973l.968.003.969-.003c.083-.191.507-.973.507-.973.671.146 1.513.586 2.091 1.356-.133-1.635-.967-2.472-1.693-3.072.586-2.722-.771-5.295-1.861-6.229l-.013-.011zm-.044 5.693c-.284-.001-.515-.231-.515-.516 0-.285.231-.515.515-.515.284 0 .514.23.514.515 0 .285-.23.515-.514.516zm0-1.844c-.569 0-1.029-.462-1.03-1.031.001-.57.461-1.031 1.03-1.031s1.029.461 1.029 1.031c0 .569-.46 1.03-1.029 1.031zm0-1.434c.214 0 .388.174.388.389 0 .215-.174.389-.388.389-.215 0-.389-.174-.389-.389 0-.215.174-.389.389-.389z" />
                            </svg>
                            <div className="z-20 my-10">
                                <h3 className="text-lg font-semibold mt-12">
                                    Innowacyjne Rozwiązania
                                </h3>
                                <p className="text-sm">
                                    Stworzę dla Ciebie innowacyjne i
                                    funkcjonalne rozwiązania internetowe. Od
                                    prostych stron wizytówek po zaawansowane
                                    platformy e-commerce.
                                </p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-4 rounded-lg flex flex-col relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-2 right-2 z-0"
                                viewBox="0 0 126 126"
                                fill="rgb(243 244 246)"
                            >
                                <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
                            </svg>
                            <div className="z-20 my-10">
                                <h3 className="text-lg font-semibold mt-12">
                                    Wsparcie Techniczne
                                </h3>
                                <p className="text-sm">
                                    Oprócz strony internetowej zyskujesz także
                                    wsparcie techniczne i usługi utrzymania, aby
                                    Twoja witryna działa sprawnie i
                                    bezproblemowo.
                                </p>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white p-4 rounded-lg flex flex-col relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-2 right-2 z-0"
                                viewBox="0 0 126 126"
                                fill="rgb(243 244 246)"
                            >
                                <path d="M18 11c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm0-1c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm.5 8.474v.526h-.5v-.499c-.518-.009-1.053-.132-1.5-.363l.228-.822c.478.186 1.114.383 1.612.27.574-.13.692-.721.057-1.005-.465-.217-1.889-.402-1.889-1.622 0-.681.52-1.292 1.492-1.425v-.534h.5v.509c.362.01.768.073 1.221.21l-.181.824c-.384-.135-.808-.257-1.222-.232-.744.043-.81.688-.29.958.856.402 1.972.7 1.972 1.773.001.858-.672 1.315-1.5 1.432zm-7.911-5.474h-2.589v-2h3.765c-.484.602-.881 1.274-1.176 2zm-.589 3h-2v-2h2.264c-.166.641-.264 1.309-.264 2zm2.727-6h-4.727v-2h7v.589c-.839.341-1.604.822-2.273 1.411zm2.273-6h-7v-2h7v2zm0 3h-7v-2h7v2zm-4.411 12h-2.589v-2h2.069c.088.698.264 1.369.52 2zm-10.589-11h7v2h-7v-2zm0 3h7v2h-7v-2zm12.727 11h-4.727v-2h3.082c.438.753.994 1.428 1.645 2zm-12.727-5h7v2h-7v-2zm0 3h7v2h-7v-2zm0-6h7v2h-7v-2z" />
                            </svg>
                            <div className="z-20 my-10">
                                <h3 className="text-lg font-semibold mt-12">
                                    Zwiększona Efektywność
                                </h3>
                                <p className="text-sm">
                                    Moje usługi pomagają zwiększyć efektywność
                                    działania Twojej firmy poprzez automatyzację
                                    procesów i optymalizację działań online.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection />
        </DefaultLayout>
    );
};

export default Index;
