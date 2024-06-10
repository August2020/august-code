import React from "react";
import ContactSection from "@/Components/Sections/ContactSection";

const Footer = () => {
    const email = "kontakt@augustcode.pl";
    const phone = "+48666897751";
    const address = "47-440 Nędza, ul.Mickiewicza 5";

    return (
    <>
    <ContactSection />
        <footer className="bg-gray-100">
            <div className="mx-auto w-full max-w-screen-3xl py-8 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <span className="mb-4 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                AUGUST CODE
                            </span>
                        </a>
                        <div className="mb-6">
                            <strong className="text-mb">Email</strong>
                            <p className="text-sm mb-4">{email}</p>
                        </div>
                        <div className="mb-6">
                            <strong className="text-mb">Telefon</strong>
                            <p className="text-sm mb-4">{phone}</p>
                        </div>
                        <div className="mb-6">
                            <strong className="text-mb">Home office</strong>
                            <p className="text-sm mb-4">{address}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                O mnie
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Więcej o mnie
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Moje CV
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Usługi
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/uslugi/projektowanie" className="hover:underline">
                                        Projektowanie (UX/UI)
                                    </a>
                                </li>
                                <li>
                                    <a href="/uslugi/programowanie" className="hover:underline">
                                        Programowanie
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/documents/privacy-policy" className="hover:underline">
                                        Polityka prywatności
                                    </a>
                                </li>
                                <li>
                                    <a href="/documents/terms-and-conditions" className="hover:underline">
                                        Zasady i Warunki
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024{" "}
                        <a
                            href="https://augustcode.pl/"
                            className="hover:underline"
                        >
                            Szymon Augustyn "August Code" Usługi programistyczne
                        </a>
                        . Wszelkie prawa zastrzeżone.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a
                            href="https://facebook.com"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <svg
                                className="w-6 h-6 text-gray-500 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5"
                        >
                            <svg
                                className="w-6 h-6 text-gray-500 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                    clipRule="evenodd"
                                />
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                            </svg>
                            <span className="sr-only">LinkedIn page</span>
                        </a>
                        <a
                            href="https://instagram.com"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5"
                        >
                            <svg
                                className="w-6 h-6 text-gray-500 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Instagram page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </>
    );
};

export default Footer;
