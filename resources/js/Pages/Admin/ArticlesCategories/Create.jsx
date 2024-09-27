import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";

const schema = yup.object().shape({
    name: yup.string().required("Category name is required"),
    description: yup
        .string()
        .required("Description is required")
        .max(255, "Description cannot be more than 255 characters"),
});

const Create = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        // Submit the data to the server using Inertia
        Inertia.post("/admin/article-categories", data, {
            onSuccess: () => {
                // You can show success notification or redirect
                alert("Category created successfully!");
            },
            onError: (error) => {
                // Handle errors if needed
                console.error("Failed to create category", error);
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-2xl mx-auto mt-8">
                <h1 className="text-2xl font-bold mb-6">Create Article Category</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Category Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Category Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register("name")}
                            className={`mt-1 block w-full px-3 py-2 border ${
                                errors.name ? "border-red-500" : "border-gray-300"
                            } rounded-md shadow-sm focus:outline-none`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            {...register("description")}
                            className={`mt-1 block w-full px-3 py-2 border ${
                                errors.description ? "border-red-500" : "border-gray-300"
                            } rounded-md shadow-sm focus:outline-none`}
                        />
                        {errors.description && (
                            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        >
                            Create Category
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
