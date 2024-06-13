import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = ({ imagePath }) => {
    const title = "Moje Usługi";
    const content =
        "Oferuję  usługi dla Twojej firmy, aby pomóc Ci osiągnąć Twoje cele biznesowe. Niezależnie od tego, czy potrzebujesz nowoczesnej strony internetowej, zaawansowanych rozwiązań programistycznych, czy atrakcyjnego designu, jestem tutaj, aby dostarczyć rozwiązania na najwyższym poziomie, które będą odpowiadać Twoim indywidualnym potrzebom.";

    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <section className="w-full py-12" data-aos="fade-right">
            <div className="grid grid-cols-2 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                {/* Image Column */}
                <div className="col-span-1 lg:col-span-1">
                    <img
                        src={imagePath}
                        alt="Feature Image"
                        className="mx-auto max-w-full mb-4"
                    />
                </div>

                {/* Content Column */}
                <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex flex-col justify-center">
                    <div className="block mb-8">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl">
                            {title}
                        </h2>
                        <p className="mt-4 text-lg">{content}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:col-span-1 col-span-full lg:col-span-2 max-w-5xl">
                        <div className="flex justify-center items-start rounded-xl 2xl:col-span-1 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-2">
                            <div className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-4 bg-blue-700 rounded-xl w-fit mb-3">
                                    <svg
                                        class="w-6 h-6 text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
                                        />
                                    </svg>
                                </div>

                                <a href="/uslugi/projektowanie">
                                    <h5 class="mb-3 lg:text-2xl md:text-lg sm:text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                        Projektowanie strony (UX/UI)
                                    </h5>
                                </a>

                                <p class="mb-3 lg:text-lg md:text-md sm:text-md font-normal text-gray-700 dark:text-gray-400">
                                    Moje podejście do projektowania stron
                                    internetowych opiera się na zrozumieniu
                                    Twoich potrzeb i celów. Tworzę strony, które
                                    nie tylko przyciągają uwagę wizualną, ale
                                    także skutecznie komunikują przekaz i budują
                                    zaufanie Twoich klientów.
                                </p>
                                <a
                                    href="/uslugi/projektowanie"
                                    class="lg:text-lg md:text-md sm:text-sm inline-flex items-center px-3 py-2 text-sm font-medium text-center text-dark rounded-lg hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Czytaj więcej
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
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center items-start rounded-xl 2xl:col-span-1 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-2">
                            <div className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-4 bg-blue-700 rounded-xl w-fit mb-3">
                                    <svg
                                        class="w-6 h-6 text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                                        />
                                    </svg>
                                </div>

                                <a href="/uslugi/programowanie">
                                    <h5 class="mb-3 lg:text-2xl md:text-lg sm:text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                        Programowanie Strony
                                    </h5>
                                </a>

                                <p class="lg:text-lg md:text-md sm:text-md mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Moje usługi programowania stron zapewniają
                                    kompleksowe wsparcie w tworzeniu witryn
                                    internetowych, które są nie tylko działające
                                    i wydajne, ale również dostosowane do
                                    różnych urządzeń i zoptymalizowane pod kątem
                                    wyszukiwarek.
                                </p>
                                <a
                                    href="/uslugi/programowanie"
                                    class="lg:text-lg md:text-md sm:text-sm inline-flex items-center px-3 py-2 text-sm font-medium text-center text-dark rounded-lg hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Czytaj więcej
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
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
