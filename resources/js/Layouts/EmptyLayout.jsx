import { Head } from "@inertiajs/react";
export default function Guest({ children }) {
    return (
        <>
            <Head title="August Code" />
            <div className="min-h-screen bg-gray-800 flex items-center justify-center">
                <main>
                    <div className="max-w-7xl px-4">
                        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg px-5 py-5">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
