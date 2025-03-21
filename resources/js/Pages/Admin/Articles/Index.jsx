import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import { Table } from "flowbite-react";

const Index = ({ articles }) => {
    return (
        <AuthenticatedLayout>
            <div className="max-w-6xl mx-auto my-6">
                <h1 className="text-2xl font-bold mb-4">Articles</h1>

                <Link
                    href={route("admin.articles.create")}
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    + Add Article
                </Link>

                <Table hoverable className="w-full mt-4">
                    <Table.Head>
                        <Table.HeadCell>ID</Table.HeadCell>
                        <Table.HeadCell>Title</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Active</Table.HeadCell>
                        <Table.HeadCell>Actions</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                        {articles.length > 0 ? (
                            articles.map((article) => (
                                <Table.Row key={article.id} className="border-b">
                                    <Table.Cell>{article.id}</Table.Cell>
                                    <Table.Cell>{article.title}</Table.Cell>
                                    <Table.Cell>
                                        {article.categories.map((cat) => cat.name).join(", ")}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {article.active ? (
                                            <span className="text-green-600">Yes</span>
                                        ) : (
                                            <span className="text-red-600">No</span>
                                        )}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link
                                            href={route("admin.articles.edit", article.id)}
                                            className="text-blue-500 hover:underline mr-4"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            href={route("admin.articles.destroy", article.id)}
                                            className="text-red-500 hover:underline"
                                            method="delete"
                                            as="button"
                                        >
                                            Delete
                                        </Link>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan="5" className="text-center py-4">
                                    No articles found.
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
