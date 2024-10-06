import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "react-hook-form";
import { usePage, Inertia } from "@inertiajs/inertia-react";

const Create = () => {
    const { errors } = usePage().props;

    // Setup form handling using react-hook-form
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        // Send the form data to the store route
        Inertia.post(route("admin.article_categories.store"), data, {
            onSuccess: () => {
                reset(); // Reset form on success
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Create a New Article Category</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Category Name
                        </label>
                        <input
                            {...register("name", { required: true })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm">{errors.name}</span>
                        )}
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
