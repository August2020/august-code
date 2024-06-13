import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const ProjectsSection = ({ title, projects }) => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    return (
        <section className="py-12 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-right">
            {projects.map((project, index) => (
                <div class="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-t-lg"
                        />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {project.title}
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {project.description}
                        </p>
                        <a
                            href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Sprawdź
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
            ))}
        </section>
    );
};

export default ProjectsSection;
