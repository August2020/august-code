import React from "react";
import { Link } from "@inertiajs/react";

const EditButton = ({ href }) => {
    return (
        <Link href={href} className="text-blue-500 hover:underline ml-1 mr-1">
            Edit
        </Link>
    );
};

export default EditButton;
