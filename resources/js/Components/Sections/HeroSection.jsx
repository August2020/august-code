import React from "react";
import PrimaryButton from "@/Components/Global/PrimaryButton";

const HeroSection = ({ title, content, imagePath }) => {
    return (
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 py-8 my-12 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            {/* Left Column: Title */}
            <div className="flex items-center lg:items-start">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl text-black">
                    {title}
                </h1>
            </div>

            {/* Right Column: Content and Button */}
            <div className="flex flex-col justify-end lg:justify-between">
                <div className="lg:mt-auto">
                    <p className="text-lg sm:text-xl md:text-3xl mb-4">{content}</p>
                    <PrimaryButton
                        className="text-base md:text-2xl my-4"
                        disabled={false}
                    >
                        Skontaktuj się
                    </PrimaryButton>
                </div>
            </div>

            {/* Full Width Image */}
            <div className="col-span-full my-8">
                <img src={imagePath} alt="Hero Image" className="max-w-full" />
            </div>
        </div>
    );
};

export default HeroSection;
