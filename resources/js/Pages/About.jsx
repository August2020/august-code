import React from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import HeroSection from "@/Components/Sections/HeroSection";
import AboutMeSection from "@/Components/Sections/AboutMeSection";
import SkillsSection from "@/Components/Sections/SkillsSection";
import ProjectsSection from "@/Components/Sections/ProjectsSection";
import WorkTimelineSection from "@/Components/Sections/WorkTimelineSection";

const About = () => {
    const skills = [
        { name: "Umiejętność 1", description: "Opis umiejętności 1" },
        { name: "Umiejętność 2", description: "Opis umiejętności 2" },
        { name: "Umiejętność 3", description: "Opis umiejętności 3" },
        { name: "Umiejętność 4", description: "Opis umiejętności 4" },
    ];

    const projects = [
        {
            title: "Projekt 1",
            description: "Krótki opis projektu 1",
            image: "/files/images/project1.jpg",
        },
        {
            title: "Projekt 2",
            description: "Krótki opis projektu 2",
            image: "/files/images/project2.jpg",
        },
        {
            title: "Projekt 3",
            description: "Krótki opis projektu 3",
            image: "/files/images/project3.jpg",
        },
    ];

    const timeline = [
        {
            title: "Praca 1",
            date: "Styczeń 2020 - Grudzień 2020",
            description: "Opis doświadczenia pracy 1",
        },
        {
            title: "Praca 2",
            date: "Styczeń 2021 - Grudzień 2021",
            description: "Opis doświadczenia pracy 2",
        },
        {
            title: "Praca 3",
            date: "Styczeń 2022 - Obecnie",
            description: "Opis doświadczenia pracy 3",
        },
    ];

    return (
        <DefaultLayout>
            <HeroSection
                title={"O mnie"}
                content={
                    "Jestem [Twoje Imię], pasjonatem [Twój Zawód/Tytuł] z [Twoje Miasto]. Moja misja to tworzenie wyjątkowych rozwiązań w [Twoja Dziedzina]."
                }
                imagePath={"/files/images/about-hero.jpg"}
            />
            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <AboutMeSection
                    title="O mnie"
                    content={
                        "Cześć, jestem [Twoje Imię], pasjonatem [Twój Zawód/Tytuł] z [Twoje Miasto]. Mam solidne doświadczenie w [Twoja Dziedzina] i specjalizuję się w tworzeniu [Rodzaj Pracy, Którą Wykonujesz]. Moja podróż zaczęła się od [Krótka Historia lub Anegdota], a przez lata doskonaliłem swoje umiejętności w [Lista Umiejętności]. Kiedy nie zajmuję się [Pracą/Twój Zawód], można mnie znaleźć [Hobby lub Zainteresowania]. Zawsze cieszę się na nowe wyzwania i realizację innowacyjnych pomysłów."
                    }
                    imagePath="/files/images/about-me.jpg"
                />
                <SkillsSection title="Umiejętności" skills={skills} />
                <ProjectsSection title="Moje projekty/Portfolio" projects={projects} />
                <WorkTimelineSection title="Moja Kariera" timeline={timeline} />
            </div>
        </DefaultLayout>
    );
};

export default About;
