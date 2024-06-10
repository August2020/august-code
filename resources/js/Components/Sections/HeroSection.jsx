import React from "react";
import PrimaryButton from "@/Components/Global/PrimaryButton";

const HeroSection = ({ title, content, imagePath }) => {
    return (
        <div className="mx-auto max-h-50 grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 py-8 mt-12 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            {/* Title and Image Row */}
            <div className="flex flex-col lg:flex-row xl:col-span-5 lg:col-span-4 min-h-[45vh] lg:min-h-[50vh] gap-8">
                {/* Title Column */}
                <div className="xl:w-3/5 lg:w-2/4 flex items-top justify-center lg:justify-start my-4 lg:my-0">
                    <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-8xl 3xl:text-9xl text-black pt-4 pb-4 bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 animate-gradient-x text-transparent bg-clip-text">
                        {title}
                    </h1>
                </div>
                {/* Image Column */}
                <div className="xl:w-2/5 lg:w-2/4 flex items-start justify-center lg:justify-start">
                    <img
                        src={imagePath}
                        alt="Hero Image"
                        className="w-full max-h-[55vh] object-cover"
                    />
                </div>
            </div>

            {/* Content and Button Row */}
            <div className="flex flex-col lg:flex-row lg:col-span-5 lg:items-end lg:justify-start">
                <div className="w-full 2xl:w-2/5 xl:w-2/5 lg:w-3/5 flex lg:justify-start lg:items-end lg:min-h-[35vh]">
                    <div className="w-full lg:w-auto lg:mb-4 mt-4">
                        <p className="text-lg sm:text-md md:text-lg lg:text-xl mb-4">
                            {content}
                        </p>
                        <PrimaryButton
                            className="text-base md:text-md lg:mb-4"
                            disabled={false}
                        >
                            Skontaktuj się
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
