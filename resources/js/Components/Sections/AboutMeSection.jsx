import React from "react";

const AboutMeSection = ({ title, content, imagePath }) => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 px-6 mb-8 md:mb-0">
                    <img
                        src={imagePath}
                        alt="About Me"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 px-6">
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-lg text-gray-700">{content}</p>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
