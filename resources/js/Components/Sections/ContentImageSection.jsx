import React from "react";
import PrimaryButton from "@/Components/Global/PrimaryButton";

const ContentImageSection = ({ title, content, buttonText, imagePath }) => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 py-8 my-12">
            {/* image column */}
            <div className="col-span-full lg:col-span-2">
                <img
                    src={imagePath}
                    alt="Feature Image"
                    className="mx-auto max-w-full rounded-xl w-1/2"
                />
            </div>
            {/* content column */}
            <div className="col-span-full lg:col-span-3 w-3/4 mx-auto">
                <div className="text-black">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-4">
                        {title}
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl py-4">
                        {content}
                    </p>
                    <PrimaryButton
                        className={"text-base md:text-lg my-2"}
                        disabled={false}
                    >
                        {buttonText}
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ContentImageSection;
