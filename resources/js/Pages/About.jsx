import React from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import HeroSection from "@/Components/Sections/HeroSection";
import AboutMeSection from "@/Components/Sections/AboutMeSection";
import ImageContentSection from "@/Components/Sections/ImageContentSection";
import SkillsSection from "@/Components/Sections/SkillsSection";
import ProjectsSection from "@/Components/Sections/ProjectsSection";
import TimelineSection from "@/Components/Sections/TimelineSection";

const About = () => {

    const timelineData = [
        {
            title: "Rozpoczęcie działalności 'August Code'",
            date: "2024r.",
            description: "Rozpocząłem swoją działalność jako założyciel 'August Code', firmy specjalizującej się w projektowaniu i tworzeniu oprogramowania na miarę, które rozwiązuje rzeczywiste problemy klientów. Nasza firma koncentruje się na innowacyjnych rozwiązaniach i wysokiej jakości usługach, aby zapewnić klientom najlepsze doświadczenie.",
            iconPath: (
                <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" />
                </svg>
            ),
            isLatest: true,
            buttonText: "Zobacz moje CV",
            buttonLink: "/files/documents/Resume_Szymon_Augustyn_pl_2024.pdf"
        },
        {
            title: "Zmiana wydziału na studiach",
            date: "2023r.",
            description:
                "Zdecydowałem się na zmianę wydziału na Politechnice Śląskiej w Gliwicach. Przeszedłem z wydziału Automatyki, Elektroniki i Informatyki na wydział matematyki stosowanej, gdzie mogłem pogłębić swoją wiedzę z zakresu matematyki oraz jej zastosowań w technologii.",
            iconPath: (
                <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 18.5A2.493 2.493 0 0 1 7.51 20H7.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .92-3.182 2.477 2.477 0 0 1 1.876-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 12 5.5m0 13v-13m0 13a2.493 2.493 0 0 0 4.49 1.5h.01a2.468 2.468 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.477 2.477 0 0 0-1.875-3.344A2.5 2.5 0 0 0 14.5 3 2.5 2.5 0 0 0 12 5.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M20 10.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
                    />
                </svg>
            ),
        },
        {
            title: "Praca jako programista",
            date: "2021-2023r.",
            description: "Przez dwa lata pracowałem w firmie Econnect4U jako programista, gdzie miałem okazję rozwijać swoje umiejętności w tworzeniu oprogramowania oraz współpracować z zespołem doświadczonych programistów nad różnorodnymi projektami.",
            iconPath: (
                <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" />
                </svg>
            ),
        },
        {
            title: "Pierwsza praca",
            date: "2021r.",
            description:
                "Rozpocząłem swoją karierę zawodową jako programista junior w firmie Econnect4U. Była to dla mnie cenna okazja do zdobycia doświadczenia zawodowego oraz poznania praktycznych aspektów pracy nad rzeczywistymi projektami oprogramowania.",
            iconPath: (
                <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" />
                </svg>
            ),
        },
        {
            title: "Rozpoczęcie studiów",
            date: "2020r.",
            description:
                "Rozpocząłem studia na Politechnice Śląskiej w Gliwicach na wydziale Automatyki, Elektroniki i Informatyki. To było dla mnie ważne wydarzenie, które umożliwiło mi zgłębianie wiedzy z zakresu informatyki oraz zdobywanie nowych umiejętności.",
            iconPath: (
                <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 18.5A2.493 2.493 0 0 1 7.51 20H7.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .92-3.182 2.477 2.477 0 0 1 1.876-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 12 5.5m0 13v-13m0 13a2.493 2.493 0 0 0 4.49 1.5h.01a2.468 2.468 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.477 2.477 0 0 0-1.875-3.344A2.5 2.5 0 0 0 14.5 3 2.5 2.5 0 0 0 12 5.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M20 10.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
                    />
                </svg>
            ),
        },
        {
            title: "Staż jako programista w firmie T2T System",
            date: "2019-2020r.",
            description: "Podczas stażu w firmie T2T System miałem okazję zdobyć praktyczne doświadczenie w pracy jako programista. Przez ten czas uczestniczyłem w różnorodnych projektach, co pozwoliło mi rozwinąć umiejętności programistyczne oraz poznać proces tworzenia oprogramowania od podstaw.",
            iconPath: (
                <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" />
                </svg>
            ),
        },
        {
            title: "Praktyka jako programista w firmie T2T System",
            date: "2018r.",
            description: "W trakcie praktyki w firmie T2T System miałem możliwość zdobycia pierwszych doświadczeń w branży IT. Pracując pod nadzorem doświadczonych programistów, nauczyłem się podstawowych technologii oraz metod pracy stosowanych w profesjonalnym środowisku programistycznym.",
            iconPath: (
                <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" />
                </svg>
            ),
        },
        {
            title: "Nauka w technikum w Raciborzu na kierunku Informatyk",
            date: "2016-2020r.",
            description:
                "W technikum w Raciborzu na kierunku Informatyk zdobyłem solidne podstawy z zakresu informatyki oraz programowania. Uczestniczyłem w praktycznych zajęciach, które pozwoliły mi zrozumieć podstawowe koncepcje związane z projektowaniem i tworzeniem oprogramowania.",
            iconPath: (
                <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 18.5A2.493 2.493 0 0 1 7.51 20H7.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .92-3.182 2.477 2.477 0 0 1 1.876-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 12 5.5m0 13v-13m0 13a2.493 2.493 0 0 0 4.49 1.5h.01a2.468 2.468 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.477 2.477 0 0 0-1.875-3.344A2.5 2.5 0 0 0 14.5 3 2.5 2.5 0 0 0 12 5.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M20 10.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
                    />
                </svg>
            ),
        },
    ];

    const projects = [
        {
            title: "Noteworthy technology acquisitions 2021",
            description:
                "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            image: "/files/images/laptop-code-image.jpg",
        },
        {
            title: "Noteworthy technology acquisitions 2021",
            description:
                "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            image: "/files/images/laptop-code-image.jpg",
        },
        {
            title: "Noteworthy technology acquisitions 2021",
            description:
                "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            image: "/files/images/laptop-code-image.jpg",
        },
        {
            title: "Noteworthy technology acquisitions 2021",
            description:
                "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            image: "/files/images/laptop-code-image.jpg",
        },
    ];

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
                <AboutMeSection
                    title={"Szymon Augustyn"}
                    content={
                        "Jestem pasjonatem projektowania i programowania stron internetowych. Moją misją jest dostarczanie rozwiązań, które łączą innowacyjny design z funkcjonalnością i efektywnością. Poprzez dbałość o każdy detal, dążę do stworzenia stron, które zapewniają użytkownikom wyjątkowe doświadczenie online."
                    }
                    
                    buttonText={"Czytaj więcej"}
                    imagePath={"/files/images/profilowe.jpg"}
                />
                <ImageContentSection
                    title={"Więcej o mnie"}
                    content={
                        "Jestem pasjonatem projektowania i programowania stron internetowych. Moją misją jest dostarczanie rozwiązań, które łączą innowacyjny design z funkcjonalnością i efektywnością. Poprzez dbałość o każdy detal, dążę do stworzenia stron, które zapewniają użytkownikom wyjątkowe doświadczenie online."
                    }
                    buttonText={"Czytaj więcej"}
                    imagePath={"/files/images/laptop-code-image.jpg"}
                />
                <TimelineSection
                    title="Moja Kariera"
                    timeline={timelineData}
                />
                <SkillsSection />
                {/* <ProjectsSection
                    title="Moje projekty/Portfolio"
                    projects={projects}
                /> */}
            </div>
        </DefaultLayout>
    );
};

export default About;
