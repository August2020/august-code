import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const backgroundImage = "/files/images/laptop-code-image.jpg";
    const contactTitle = "Gotowy na krok w przód w świecie internetowym?";
    const contactText =
        "Niezależnie od tego, czy potrzebujesz strony wizytówki, czy skomplikowanej platformy e-commerce, jestem tu, aby Ci pomóc. Skontaktuj się ze mną już dziś, abyśmy mogli wspólnie rozwinąć Twoją obecność online i przekształcić Twoje cele w rzeczywistość!";
    const email = "kontakt@augustcode.pl";
    const phone = "+48666897751";
    const address = "47-440 Nędza, ul.Mickiewicza 5";

    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 mt-8" data-aos="fade-in">
            {/* Text with Background Image */}
            <div
                className="relative flex justify-center items-center text-white"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                
            >
                <div className="bg-black bg-opacity-50 px-4 mx-auto my-8 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 h-full flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">
                        {contactTitle}
                    </h2>
                    <p className="lg:text-lg md:text-md sm:text-sm mt-4">
                        {contactText}
                    </p>
                </div>
            </div>
            {/* Contact Information */}
            <div className="p-8 flex flex-col justify-center" data-aos="fade-left">
                <div data-aos="fade-left">
                    <h2 className="text-3xl font-bold mb-4">
                        Zostańmy w kontakcie
                    </h2>
                    <div className="mb-6">
                        <strong className="text-xl">Email</strong>
                        <p className="sm:text-lg text-xl mb-4">{email}</p>
                    </div>
                    <div className="mb-6">
                        <strong className="text-xl">Telefon</strong>
                        <p className="sm:text-lg text-xl mb-4">{phone}</p>
                    </div>
                    <div className="mb-6">
                        <strong className="text-xl">Home office</strong>
                        <p className="sm:text-lg text-xl mb-4">{address}</p>
                    </div>
                    <div className="mb-6">
                        <strong className="text-xl">Social media</strong>
                        <div className="flex space-x-4 mt-2">
                            <a
                                href="https://facebook.com"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
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
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
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
                            </a>
                            <a
                                href="https://instagram.com"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
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
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
