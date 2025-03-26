import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteButton from "@/Components/Global/DeleteButton";
import EditButton from "@/Components/Global/EditButton";

const Index = ({ articles = [] }) => {
    return (
        <AuthenticatedLayout>
            <div className="max-w-6xl mx-auto my-6">
                <h1 className="text-2xl font-bold mb-4">Articles</h1>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Active
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-center"
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.length > 0 ? (
                                articles.map((article) => (
                                    <tr
                                        key={article.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            {article.id}
                                        </td>
                                        <td className="px-6 py-4">
                                            {article.title}
                                        </td>
                                        <td className="px-6 py-4">
                                            {article.category.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {article.active ? (
                                                <span className="text-green-600">
                                                    Yes
                                                </span>
                                            ) : (
                                                <span className="text-red-600">
                                                    No
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <EditButton
                                                href={route(
                                                    "admin.articles.edit",
                                                    article.id
                                                )}
                                            />
                                            <DeleteButton
                                                href={route(
                                                    "admin.articles.destroy",
                                                    article.id
                                                )}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="px-6 py-4 text-center text-gray-500"
                                    >
                                        No articles found.
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
