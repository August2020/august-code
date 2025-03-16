import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = ({ articlesCategories }) => {
    return (
        <AuthenticatedLayout>
            <div className="max-w-4xl mx-auto my-6">
                <h1 className="text-2xl font-bold mb-4">Article Categories</h1>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">ID</th>
                                <th scope="col" className="px-6 py-3">Category Name</th>
                                <th scope="col" className="px-6 py-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articlesCategories.length > 0 ? (
                                articlesCategories.map((category) => (
                                    <tr
                                        key={category.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            {category.id}
                                        </td>
                                        <td className="px-6 py-4">{category.name}</td>
                                        <td className="px-6 py-4 text-center">
                                            <a
                                                href={route("admin.article_categories.edit", category.id)}
                                                className="text-blue-600 dark:text-blue-400 hover:underline mr-4"
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href={route("admin.article_categories.destroy", category.id)}
                                                className="text-red-600 dark:text-red-400 hover:underline"
                                            >
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                                        No categories found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
