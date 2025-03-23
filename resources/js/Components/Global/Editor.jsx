import React, { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import YouTube from "@tiptap/extension-youtube";
import Highlight from "@tiptap/extension-highlight";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";

const Editor = ({ content, onChange }) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({ bold: false }),
            Bold,
            Underline,
            Link.configure({ openOnClick: false, autolink: true }),
            TextAlign.configure({ types: ["heading", "paragraph"] }),
            Image,
            YouTube,
            Highlight,
            FontFamily,
            TextStyle,
            Color,
        ],
        content,
        editorProps: {
            attributes: {
                class: "prose lg:prose-lg dark:prose-invert focus:outline-none max-w-none border p-2 rounded-lg min-h-[150px]",
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    useEffect(() => {
        if (editor) {
            editor.commands.setContent(content);
        }
    }, [content, editor]);

    if (!editor) {
        return null;
    }

    return (
        <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            {/* Toolbar */}
            <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-600 flex flex-wrap items-center space-x-2">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`p-1.5 rounded-sm ${
                        editor.isActive("bold")
                            ? "bg-blue-500 text-white"
                            : "text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    }`}
                >
                    <b>B</b>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`p-1.5 rounded-sm ${
                        editor.isActive("italic")
                            ? "bg-blue-500 text-white"
                            : "text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    }`}
                >
                    <i>I</i>
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleUnderline().run()
                    }
                    className={`p-1.5 rounded-sm ${
                        editor.isActive("underline")
                            ? "bg-blue-500 text-white"
                            : "text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    }`}
                >
                    <u>U</u>
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    className="p-1.5 text-gray-500 rounded-sm hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                    • List
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                    }
                    className="p-1.5 text-gray-500 rounded-sm hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                    1. List
                </button>
                <button
                    type="button"
                    onClick={() => {
                        const url = window.prompt("Enter image URL:");
                        if (url)
                            editor.chain().focus().setImage({ src: url }).run();
                    }}
                    className="p-1.5 text-gray-500 rounded-sm hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                    🖼️ Image
                </button>
                <button
                    type="button"
                    onClick={() => {
                        const url = window.prompt("Enter YouTube URL:");
                        if (url)
                            editor.commands.setYoutubeVideo({
                                src: url,
                                width: 640,
                                height: 480,
                            });
                    }}
                    className="p-1.5 text-gray-500 rounded-sm hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                    🎥 YouTube
                </button>
                <button
                    type="button"
                    onClick={() => {
                        const url = window.prompt("Enter Link URL:");
                        editor.chain().focus().setLink({ href: url }).run();
                    }}
                    className="p-1.5 text-gray-500 rounded-sm hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                    🔗 Link
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().unsetLink().run()}
                    className="p-1.5 text-gray-500 rounded-sm hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                    🚫 Unlink
                </button>
                <select
                    type="button"
                    onChange={(e) =>
                        editor
                            .chain()
                            .focus()
                            .setFontFamily(e.target.value)
                            .run()
                    }
                    className="p-1.5 text-gray-500 rounded-sm bg-white dark:bg-gray-700"
                >
                    <option value="Arial">Arial</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Times New Roman">Times New Roman</option>
                </select>
                <input
                    type="color"
                    onChange={(e) =>
                        editor.chain().focus().setColor(e.target.value).run()
                    }
                    className="p-1.5 text-gray-500 rounded-sm bg-white dark:bg-gray-700"
                />
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().setTextAlign("left").run()
                    }
                    className="p-1.5 text-gray-500 rounded-sm"
                >
                    ⬅
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().setTextAlign("center").run()
                    }
                    className="p-1.5 text-gray-500 rounded-sm"
                >
                    ⬆
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().setTextAlign("right").run()
                    }
                    className="p-1.5 text-gray-500 rounded-sm"
                >
                    ➡
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleHighlight().run()
                    }
                    className="p-1.5 text-gray-500 rounded-sm bg-yellow-300"
                >
                    Highlight
                </button>
            </div>

            {/* Editor Content */}
            <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

export default Editor;
