import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { Button, TextInput, Label, Checkbox } from "flowbite-react";
import Editor from "@/Components/Global/Editor";

const Create = ({ articlesCategories, articlesTags }) => {
    const { data, setData, post, processing } = useForm({
        title: "",
        description: "",
        content: "",
        active: true,
    });

    // ✅ Fix: Define states for category & tags
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.articles.store"), {
            data: {
                ...data,
                category: selectedCategory,
                tags: selectedTags,
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-4xl mx-auto my-6">
                <h1 className="text-2xl font-bold mb-4">Create Article</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Label htmlFor="title">Title</Label>
                    <TextInput
                        id="title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        required
                    />

                    <Label htmlFor="description">Description</Label>
                    <TextInput
                        id="description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />

                    {/* ✅ Category Selection */}
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Select Category
                    </label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="p-2 bg-white border rounded-md w-full dark:bg-gray-800 dark:text-white"
                    >
                        <option value="">-- Select Category --</option>
                        {articlesCategories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>

                    {/* ✅ Editor with Content */}
                    <Label htmlFor="content">Content</Label>
                    <Editor
                        content={data.content}
                        onChange={(value) => setData("content", value)}
                        categories={articlesCategories}
                        tags={articlesTags}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                    />

                    {/* ✅ Tags Selection */}
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Select Tags
                    </label>
                    <select
                        multiple
                        value={selectedTags}
                        onChange={(e) =>
                            setSelectedTags([...e.target.selectedOptions].map((o) => o.value))
                        }
                        className="p-2 bg-white border rounded-md w-full dark:bg-gray-800 dark:text-white"
                    >
                        {articlesTags.map((tag) => (
                            <option key={tag.id} value={tag.id}>
                                {tag.name}
                            </option>
                        ))}
                    </select>

                    {/* ✅ Active Checkbox */}
                    <div className="flex items-center">
                        <Checkbox
                            checked={data.active}
                            onChange={(e) => setData("active", e.target.checked)}
                        />
                        <Label className="ml-2">Active</Label>
                    </div>

                    {/* ✅ Submit Button */}
                    <Button type="submit" disabled={processing}>
                        Create
                    </Button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
