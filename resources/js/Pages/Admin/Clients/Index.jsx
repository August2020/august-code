import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = ({}) => {
    return (
        <AuthenticatedLayout>
            <div className="max-w-4xl mx-auto my-6">
                <h1 className="text-2xl font-bold mb-4">Edit Client</h1>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
