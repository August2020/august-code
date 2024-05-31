import React from "react";

const SkillsSection = ({ title, skills }) => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">{title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                            <p className="text-gray-600">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
