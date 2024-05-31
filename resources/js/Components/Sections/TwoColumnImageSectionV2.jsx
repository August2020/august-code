import React from "react";
import PrimaryButton from "@/Components/Global/PrimaryButton";

const TwoColumnImageSectionV2 = ({
    title,
    content,
    buttonText,
    imageIcons,
}) => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 py-8 my-12">
            
            {/* Image and Icons Grid */}
            <div className="grid grid-cols-2 gap-4 md:col-span-1 col-span-full lg:col-span-2">
                {imageIcons.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center bg-gray-100 rounded-xl"
                    >
                        {item.type === "image" ? (
                            <img
                                src={item.src}
                                alt="Design Image"
                                className="rounded-xl max-w-full h-auto"
                            />
                        ) : (
                            <svg
                                className="w-12 h-12 text-blue-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d={item.iconPath} />
                            </svg>
                        )}
                    </div>
                ))}
            </div>
            {/* Content Column */}
            <div className="col-span-full lg:col-span-3 w-3/4 mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">
                    {title}
                </h2>
                <div>
                    <p className="text-lg sm:text-xl md:text-2xl">{content}</p>
                    <PrimaryButton className={"mt-4"}>
                        {buttonText}
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default TwoColumnImageSectionV2;
