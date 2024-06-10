import React from "react";

const ContentImageSection = ({ title, content, imagePath }) => {
    return (
        <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                {/* image column */}
                <div className="md:col-span-1">
                    <img
                        src={imagePath}
                        alt="Feature Image"
                        className="mx-auto max-w-full"
                    />
                </div>
                {/* content column */}
                <div className="md:col-span-1">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl">
                            {title}
                        </h2>
                        <p className="lg:text-lg md:text-md sm:text-md mt-4">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentImageSection;
