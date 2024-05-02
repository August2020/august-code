import Navigation from "@/Components/Navigation";
import { initFlowbite } from "flowbite"; // flowbite init

export default function Guest({ children }) {
    return (
        <div className="min-h-screen bg-white-100">
            <Navigation></Navigation>
            <main className="mt-10 sm:mt-20 pb-10 sm:pb-20">
                <div className="max-w-7xl px-4 mx-auto">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
