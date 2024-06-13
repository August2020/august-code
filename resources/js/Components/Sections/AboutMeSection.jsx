import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryButton from "@/Components/Global/PrimaryButton";

const ContentImageSection = ({
    title,
    content,
    additionalContent,
    buttonText,
    imagePath,
}) => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <section
            className="container max-w-screen-3xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 py-8"
            data-aos="fade-up"
        >
            {/* image column */}
            <div className="col-span-full lg:col-span-2" data-aos="fade-right">
                <img
                    src={imagePath}
                    alt="Feature Image"
                    className="mx-auto object-cover max-w-md"
                />
            </div>
            {/* content column */}
            <div
                className="col-span-full lg:col-span-2 mx-auto"
                data-aos="fade-left"
            >
                <div className="text-black">
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <p className="mt-4 text-lg">{content}</p>
                    <p className="mt-4 text-lg">{additionalContent}</p>
                    <div className="flex space-x-8 mt-4">
                        <div className="flex flex-col items-center">
                            <span className="text-gray-700">Programuję od</span>
                            <span className="text-4xl font-bold text-blue-500">
                                2018r.
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-700">
                                Na rynku pracy od
                            </span>
                            <span className="text-4xl font-bold text-blue-500">
                                6 lat
                            </span>
                        </div>
                    </div>
                    <PrimaryButton
                        className={"text-base md:text-lg my-4 inline-flex items-center"}
                        disabled={false}
                        data-aos="fade-up"
                    >
                        {buttonText}
                        <svg
                            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default ContentImageSection;
