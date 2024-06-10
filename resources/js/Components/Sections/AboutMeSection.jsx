import React, { useEffect, useState } from "react";
import PrimaryButton from "@/Components/Global/PrimaryButton";

const ContentImageSection = ({
    title,
    content,
    additionalContent,
    buttonText,
    imagePath,
}) => {
    const [programmingYears, setProgrammingYears] = useState(0);
    const [workingYears, setWorkingYears] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgrammingYears((prev) => (prev < 2018 ? prev + 24 : 2018));
            setWorkingYears((prev) => (prev < 4 ? prev + 1 : 4));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container max-w-screen-3xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 py-8">
            {/* image column */}
            <div className="col-span-full lg:col-span-2">
                <img
                    src={imagePath}
                    alt="Feature Image"
                    className="mx-auto object-cover max-w-md"
                />
            </div>
            {/* content column */}
            <div className="col-span-full lg:col-span-2 mx-auto">
                <div className="text-black">
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <p className="mt-4 text-lg">{content}</p>
                    <p className="mt-4 text-lg">{additionalContent}</p>
                    <div className="flex space-x-8 mt-4">
                        <div className="flex flex-col items-center">
                            <span className="text-gray-700">Programuję od</span>
                            <span className="text-4xl font-bold text-blue-500">
                                {programmingYears}r.
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-700">
                                Na rynku pracy od
                            </span>
                            <span className="text-4xl font-bold text-blue-500">
                                {workingYears} lat
                            </span>
                        </div>
                    </div>
                    <PrimaryButton
                        className={"text-base md:text-lg my-4"}
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
