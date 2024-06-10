import React from "react";
import HeroSection from "@/Components/Sections/HeroSection";
import DefaultLayout from "@/Layouts/DefaultLayout";

const Contact = () => {
    return (
        <DefaultLayout>
            <HeroSection
                title={"Skontaktuj się ze mną"}
                content={
                    "Chcesz dowiedzieć się więcej o moich usługach programistycznych lub umówić się na konsultację? Skontaktuj się ze mną już dziś! Razem możemy stworzyć rozwiązania, które będą wspierać rozwój Twojego biznesu. Odpowiem na wszystkie pytania i przedstawię, jak mogę pomóc w realizacji Twoich celów."
                }
                imagePath={"/files/images/contact-image.jpg"}
            />
        </DefaultLayout>
    );
};

export default Contact;
