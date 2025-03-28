import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteButton from "@/Components/Global/DeleteButton";
import EditButton from "@/Components/Global/EditButton";
import { TextInput, Button } from "flowbite-react";

const Index = ({ articlesTags }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTags = articlesTags.filter((tag) =>
        tag.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AuthenticatedLayout>
            <div className="max-w-4xl mx-auto my-6">
                <h1 className="text-2xl font-bold mb-4">Article Tags</h1>
                <div className="flex justify-between items-center mb-4">
                    <TextInput
                        type="text"
                        placeholder="Search categories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-md"
                    />

                    <Link href={route("admin.articles_tags.create")}>
                        <Button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                            + Add Tag
                        </Button>
                    </Link>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tag Name
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
                            {filteredTags.length > 0 ? (
                                filteredTags.map((tag) => (
                                    <tr
                                        key={tag.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            {tag.id}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tag.name}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <EditButton
                                                href={route(
                                                    "admin.article_tags.edit",
                                                    tag.id
                                                )}
                                            />
                                            <DeleteButton
                                                href={route(
                                                    "admin.article_tags.destroy",
                                                    tag.id
                                                )}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="3"
                                        className="px-6 py-4 text-center text-gray-500"
                                    >
                                        No article tags found.
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
