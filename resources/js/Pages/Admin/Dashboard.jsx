import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >

            <div className="p-6 text-gray-900">You're logged in!</div>
        </AuthenticatedLayout>
    );
}
