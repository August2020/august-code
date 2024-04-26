import Navigation from "@/Components/Navigation";
import { initFlowbite } from "flowbite"; // flowbite init

export default function Guest({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation></Navigation>
            <main className="mt-10 sm:mt-20 pb-10 sm:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
