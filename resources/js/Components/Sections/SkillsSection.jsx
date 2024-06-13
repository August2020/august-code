import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillsSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <section className="py-12" data-aos="fade-right">
            <div className="max-w-12xl mx-auto">
                <h2 className="text-3xl font-extrabold mb-3">Umiejętności</h2>
                <div className="mb-3">
                    <p className="text-lg text-gray-700">
                        W obszarze UX zajmuję się projektowaniem interfejsów
                        użytkownika, dbając o optymalną użyteczność i
                        doświadczenie użytkownika. W UI projektuję estetyczne i
                        funkcjonalne interfejsy, wykorzystując najnowsze trendy
                        w designie. W Frontend Development tworzę responsywne i
                        dynamiczne aplikacje internetowe, wykorzystując
                        najnowsze technologie i narzędzia. W Backend Development
                        specjalizuję się w tworzeniu skalowalnych i wydajnych
                        serwerów oraz baz danych, z głównym naciskiem na PHP i
                        związane z nim technologie.
                    </p>
                </div>

                <div id="accordion-nested-parent" data-accordion="collapse">
                    <h2 id="accordion-collapse-heading-1">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                            data-accordion-target="#accordion-collapse-body-1"
                            aria-expanded="true"
                            aria-controls="accordion-collapse-body-1"
                        >
                            <span>UX</span>
                            <svg
                                data-accordion-icon
                                className="w-3 h-3 rotate-180 shrink-0"
                                fill="currentColor"
                                viewBox="0 0 10 6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-1"
                        className="hidden"
                        aria-labelledby="accordion-collapse-heading-1"
                    >
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Mam bogate doświadczenie w projektowaniu
                                doświadczeń użytkowników (UX). Pracowałem nad
                                wieloma projektami, które koncentrują się na
                                intuicyjnych interfejsach, płynnej nawigacji i
                                zadowoleniu użytkowników.
                            </p>
                            <div
                                id="accordion-nested-collapse"
                                data-accordion="collapse"
                            >
                                <h2 id="accordion-nested-collapse-heading-1">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-body-1"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-body-1"
                                    >
                                        <span>Research</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-body-1"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-heading-1"
                                >
                                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Prowadzę badania użytkowników, aby
                                            lepiej zrozumieć ich potrzeby i
                                            zachowania.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="accordion-nested-collapse-heading-2">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-body-2"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-body-2"
                                    >
                                        <span>Wireframing</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-body-2"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-heading-2"
                                >
                                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Tworzę wireframe'y, aby zaplanować
                                            układ i strukturę interfejsu
                                            użytkownika.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="accordion-nested-collapse-heading-3">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-body-3"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-body-3"
                                    >
                                        <span>User Testing</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-body-3"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-heading-3"
                                >
                                    <div className="p-5 border border-gray-200 dark:border-gray-700">
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            Przeprowadzam testy użyteczności,
                                            aby upewnić się, że projekt spełnia
                                            oczekiwania użytkowników.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 id="accordion-collapse-heading-2">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                            data-accordion-target="#accordion-collapse-body-2"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-2"
                        >
                            <span>UI</span>
                            <svg
                                data-accordion-icon
                                className="w-3 h-3 rotate-180 shrink-0"
                                fill="currentColor"
                                viewBox="0 0 10 6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-2"
                        className="hidden"
                        aria-labelledby="accordion-collapse-heading-2"
                    >
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Specjalizuję się w projektowaniu interfejsów
                                użytkownika (UI). Tworzę estetyczne, spójne i
                                łatwe w obsłudze interfejsy, które zachwycają
                                użytkowników i poprawiają ich wrażenia z
                                korzystania z aplikacji.
                            </p>
                            <div
                                id="accordion-nested-collapse-ui"
                                data-accordion="collapse"
                            >
                                <h2 id="accordion-nested-collapse-ui-heading-1">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 rounded-t-xl font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-ui-body-1"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-ui-body-1"
                                    >
                                        <span>Design Systems</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-ui-body-1"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-ui-heading-1"
                                >
                                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Tworzę i utrzymuję systemy
                                            projektowe, które zapewniają
                                            spójność i efektywność w procesie
                                            tworzenia UI.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="accordion-nested-collapse-ui-heading-2">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-ui-body-2"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-ui-body-2"
                                    >
                                        <span>Prototyping</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-ui-body-2"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-ui-heading-2"
                                >
                                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Tworzę interaktywne prototypy, aby
                                            testować i iterować projekty przed
                                            finalnym wdrożeniem.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="accordion-nested-collapse-ui-heading-3">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-ui-body-3"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-ui-body-3"
                                    >
                                        <span>Accessibility</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-ui-body-3"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-ui-heading-3"
                                >
                                    <div className="p-5 border border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Dbam o dostępność projektów, aby
                                            były one przyjazne dla użytkowników
                                            o różnych potrzebach.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 id="accordion-collapse-heading-3">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                            data-accordion-target="#accordion-collapse-body-3"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-3"
                        >
                            <span>Frontend Development</span>
                            <svg
                                data-accordion-icon
                                className="w-3 h-3 rotate-180 shrink-0"
                                fill="currentColor"
                                viewBox="0 0 10 6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-3"
                        className="hidden"
                        aria-labelledby="accordion-collapse-heading-3"
                    >
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Posiadam szerokie doświadczenie w tworzeniu
                                interaktywnych i responsywnych interfejsów
                                użytkownika przy użyciu najnowszych technologii
                                frontendowych.
                            </p>
                            <div
                                id="accordion-nested-collapse-frontend"
                                data-accordion="collapse"
                            >
                                <h2 id="accordion-nested-collapse-frontend-heading-1">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 rounded-t-xl font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-frontend-body-1"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-frontend-body-1"
                                    >
                                        <span>React.js</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-frontend-body-1"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-frontend-heading-1"
                                >
                                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Tworzę dynamiczne aplikacje webowe
                                            przy użyciu React.js, zapewniając
                                            szybkie i responsywne interfejsy
                                            użytkownika.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="accordion-nested-collapse-frontend-heading-2">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-frontend-body-2"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-frontend-body-2"
                                    >
                                        <span>Vue.js</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-frontend-body-2"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-frontend-heading-2"
                                >
                                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Projektuję skalowalne aplikacje za
                                            pomocą Vue.js, łącząc elastyczność i
                                            prostotę tego frameworka z
                                            potrzebami projektu.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="accordion-nested-collapse-frontend-heading-3">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-frontend-body-3"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-frontend-body-3"
                                    >
                                        <span>Performance Optimization</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-frontend-body-3"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-frontend-heading-3"
                                >
                                    <div className="p-5 border border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Optymalizuję wydajność aplikacji
                                            frontendowych, aby zapewnić jak
                                            najlepsze wrażenia użytkownika
                                            poprzez szybsze ładowanie i
                                            płynniejszą interakcję.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 id="accordion-collapse-heading-4">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                            data-accordion-target="#accordion-collapse-body-4"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-4"
                        >
                            <span>Backend Development</span>
                            <svg
                                data-accordion-icon
                                className="w-3 h-3 rotate-180 shrink-0"
                                fill="currentColor"
                                viewBox="0 0 10 6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-4"
                        className="hidden"
                        aria-labelledby="accordion-collapse-heading-4"
                    >
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Specjalizuję się w backendowym programowaniu,
                                szczególnie przy użyciu języka PHP, tworząc
                                wydajne i skalowalne aplikacje webowe.
                            </p>
                            <div
                                id="accordion-nested-collapse-backend"
                                data-accordion="collapse"
                            >
                                <h2 id="accordion-nested-collapse-backend-heading-1">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 rounded-t-xl font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-backend-body-1"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-backend-body-1"
                                    >
                                        <span>PHP</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-backend-body-1"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-backend-heading-1"
                                >
                                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Mam bogate doświadczenie w tworzeniu
                                            aplikacji webowych w PHP,
                                            korzystając z najnowszych wersji i
                                            najlepszych praktyk.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="accordion-nested-collapse-backend-heading-2">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-backend-body-2"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-backend-body-2"
                                    >
                                        <span>Laravel</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-backend-body-2"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-backend-heading-2"
                                >
                                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Używam Laravel do tworzenia
                                            skalowalnych i wydajnych aplikacji
                                            webowych, zapewniając czysty kod i
                                            najlepsze praktyki.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="accordion-nested-collapse-backend-heading-3">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-backend-body-3"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-backend-body-3"
                                    >
                                        <span>API Development</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-backend-body-3"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-backend-heading-3"
                                >
                                    <div className="p-5 border border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Tworzę i utrzymuję RESTful API,
                                            zapewniając bezproblemową
                                            komunikację między frontendem a
                                            backendem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 id="accordion-collapse-heading-5">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-1 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                            data-accordion-target="#accordion-collapse-body-5"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-5"
                        >
                            <span>Narzędzia</span>
                            <svg
                                data-accordion-icon
                                className="w-3 h-3 rotate-180 shrink-0"
                                fill="currentColor"
                                viewBox="0 0 10 6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>

                    <div
                        id="accordion-collapse-body-5"
                        className="hidden"
                        aria-labelledby="accordion-collapse-heading-5"
                    >
                        <div className="p-5 border border-b-1 rounded-b-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Korzystam z różnorodnych narzędzi, aby usprawnić
                                procesy rozwoju oprogramowania i zarządzania
                                projektami.
                            </p>
                            <div
                                id="accordion-nested-collapse-tools"
                                data-accordion="collapse"
                            >
                                <h2 id="accordion-nested-collapse-tools-heading-1">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 rounded-t-xl font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-tools-body-1"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-tools-body-1"
                                    >
                                        <span>Confluence</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-tools-body-1"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-tools-heading-1"
                                >
                                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Confluence to narzędzie do
                                            współpracy i zarządzania wiedzą,
                                            które pomaga zespołom pracować
                                            efektywnie poprzez tworzenie,
                                            dzielenie się i współpracę nad
                                            dokumentami.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="accordion-nested-collapse-tools-heading-2">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-tools-body-2"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-tools-body-2"
                                    >
                                        <span>GitHub & GitLab</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-tools-body-2"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-tools-heading-2"
                                >
                                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            GitHub i GitLab to platformy do
                                            hostingu kodu źródłowego, które
                                            oferują narzędzia do zarządzania
                                            wersjami, recenzji kodu oraz
                                            integracji ciągłej (CI/CD).
                                        </p>
                                    </div>
                                </div>

                                <h2 id="accordion-nested-collapse-tools-heading-3">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                                        data-accordion-target="#accordion-nested-collapse-tools-body-3"
                                        aria-expanded="false"
                                        aria-controls="accordion-nested-collapse-tools-body-3"
                                    >
                                        <span>Postman</span>
                                        <svg
                                            data-accordion-icon
                                            className="w-3 h-3 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 10 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-nested-collapse-tools-body-3"
                                    className="hidden"
                                    aria-labelledby="accordion-nested-collapse-tools-heading-3"
                                >
                                    <div className="p-5 border border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Postman to narzędzie do testowania
                                            API, które umożliwia tworzenie,
                                            udostępnianie i testowanie
                                            endpointów API, przyspieszając
                                            proces rozwoju i weryfikacji
                                            aplikacji.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
