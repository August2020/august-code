import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { Button, TextInput, Label, Checkbox } from "flowbite-react";
import Editor from "@/Components/Global/Editor";

const Edit = ({ article }) => {
    const { data, setData, put, processing } = useForm({
        title: article.title,
        description: article.description,
        content: article.content,
        active: article.active,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.articles.update", article.id));
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-4xl mx-auto my-6">
                <h1 className="text-2xl font-bold mb-4">Edit Article</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Label htmlFor="title">Title</Label>
                    <TextInput id="title" value={data.title} onChange={(e) => setData("title", e.target.value)} required />

                    <Label htmlFor="description">Description</Label>
                    <TextInput id="description" value={data.description} onChange={(e) => setData("description", e.target.value)} />

                    <Label htmlFor="content">Content</Label>
                    <Editor content={data.content} onChange={(value) => setData("content", value)} />

                    <div className="flex items-center">
                        <Checkbox checked={data.active} onChange={(e) => setData("active", e.target.checked)} />
                        <Label className="ml-2">Active</Label>
                    </div>

                    <Button type="submit" disabled={processing}>Update</Button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
