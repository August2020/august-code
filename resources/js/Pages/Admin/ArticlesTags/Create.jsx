import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";

const Create = ({ errors }) => {
    const [formData, setFormData] = useState({
        name: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const onSubmit = (event) => {
        event.preventDefault();

        Inertia.post(route("admin.article_tags.store"), formData, {
            onSuccess: () => {
                setFormData({ name: "" }); // Reset form after success
            },
            onError: (error) => {
                console.error(error);
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-2xl mx-auto my-4">
                <h1 className="text-2xl font-bold mb-4">
                    Create a New Tag
                </h1>
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                    />

                    {errors?.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                    )}

                    <button
                        type="submit"
                        className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md"
                    >
                        Create
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
