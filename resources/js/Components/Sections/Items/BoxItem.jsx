import React from 'react';

const BoxItem = ({ number, title, description }) => {
    return (
        <div className="flex flex-col p-4 rounded-xl">
            <span className="lg:text-xl md:text-lg sm:text-md text-gray-500 self-end">
                {number}
            </span>
            <div className="w-3/4">
                <h2 className="lg:text-2xl md:text-lg sm:text-md mb-3 font-semibold">
                    {title}
                </h2>
                <p className="lg:text-lg md:text-md sm:text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BoxItem;
