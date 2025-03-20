import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";

const Edit = ({ articleTag, errors }) => {
    const [formData, setFormData] = useState({
        name: articleTag.name,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (event) => {
        event.preventDefault();

        router.put(
            route("admin.article_tags.update", articleTag.id),
            formData,
            {
                onSuccess: () => {
                    console.log("Tag updated successfully!");
                },
                onError: (error) => {
                    console.error(error);
                },
            }
        );
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-2xl mx-auto my-6">
                <h1 className="text-2xl font-bold mb-4">Edit Article Tag</h1>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <form onSubmit={onSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Article Tag Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
                            />
                            {errors?.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                            >
                                Update
                            </button>

                            <a
                                href={route("admin.article_tags.index")}
                                className="text-gray-600 hover:text-gray-900"
                            >
                                Cancel
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
