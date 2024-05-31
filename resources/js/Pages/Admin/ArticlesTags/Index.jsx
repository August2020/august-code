import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = () => {
    return (
        <AuthenticatedLayout>
            <div>
                <h1>Welcome to My Application</h1>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
