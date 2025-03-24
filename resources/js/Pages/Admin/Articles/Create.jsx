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
        image: null,
        active: true,
    });

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    
    const handleImageChange = (e) => {
        setData("image", e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("content", data.content);
        formData.append("active", data.active);
        formData.append("category", selectedCategory);
        selectedTags.forEach(tag => formData.append("tags[]", tag));
        
        if (data.image) {
            formData.append("image", data.image);
        }
        
        post(route("admin.articles.store"), { data: formData, forceFormData: true });
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-4xl mx-auto my-6">
                <h1 className="text-2xl font-bold mb-4">Create Article</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* ✅ Title Selection */}
                    <Label htmlFor="title">Title</Label>
                    <TextInput
                        id="title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        required
                    />
                    {/* ✅ Description Selection */}
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

                    {/* ✅ Image Upload */}
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">
                        Upload file
                    </label>
                    <input
                        type="file"
                        id="file_input"
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        onChange={handleImageChange}
                    />
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                        SVG, PNG, JPG, or GIF (MAX. 800x400px).
                    </p>
                    
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
                            setSelectedTags(
                                [...e.target.selectedOptions].map(
                                    (o) => o.value
                                )
                            )
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
                            onChange={(e) =>
                                setData("active", e.target.checked)
                            }
                        />
                        <Label className="ml-2">Active</Label>
                    </div>

                    {/* ✅ Submit Button */}
                    <Button type="submit" disabled={processing} className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md">
                        Create
                    </Button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
