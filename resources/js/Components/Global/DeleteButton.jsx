import React from "react";
import { Link } from "@inertiajs/react";

const DeleteButton = ({ href }) => {
    return (
        <Link
            href={href}
            method="delete"
            as="button"
            className="text-red-500 hover:underline ml-1 mr-1"
        >
            Delete
        </Link>
    );
};

export default DeleteButton;
