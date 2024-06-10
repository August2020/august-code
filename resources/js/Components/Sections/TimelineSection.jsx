import React from "react";

const TimelineSection = ({ title, timeline }) => {
    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
            <ol className="relative max-w-4xl mx-auto">
                {timeline.map((item, index) => (
                    <li
                        key={index}
                        className={`mb-4 ${index === timeline.length - 1 ? '' : 'border-l border-gray-200 dark:border-gray-700'}`}
                    >
                        <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg
                                className="w-5 h-5 text-blue-800 dark:text-blue-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {item.iconPath}
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 ml-8 text-lg font-semibold text-gray-900 dark:text-white">
                            {item.title}
                            {item.isLatest && (
                                <span className="bg-blue-100 text-blue-800 text-sm font-medium ml-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                                    Latest
                                </span>
                            )}
                        </h3>
                        <time className="block mb-2 ml-8 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            {item.date}
                        </time>
                        <p className="mb-4 ml-8 text-base font-normal text-gray-500 dark:text-gray-400">
                            {item.description}
                        </p>
                        {item.buttonText && (
                            <a
                                href={item.buttonLink}
                                className="inline-flex items-center px-4 py-2 ml-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            >
                                <svg
                                    className="w-3.5 h-3.5 mr-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                </svg>
                                {item.buttonText}
                            </a>
                        )}
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default TimelineSection;
