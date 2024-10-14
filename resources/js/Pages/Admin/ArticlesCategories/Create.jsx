import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "react-hook-form";
import { Inertia } from "@inertiajs/inertia";

const Create = ({ errors }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        Inertia.post(route("admin.article_categories.store"), data, {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Create a New Category</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", { required: true })}
                        placeholder="Category Name"
                        className="w-full px-3 py-2 border rounded-md"
                    />
                    {errors?.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                    <button type="submit" className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md">
                        Create
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
