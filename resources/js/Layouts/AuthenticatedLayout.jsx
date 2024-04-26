import DashboardSidebar from "@/Components/Dashboard/DashboardSidebar";
import DashboardNav from "@/Components/Dashboard/DashboardNav";
import { initFlowbite } from "flowbite"; // flowbite init

export default function ResponsiveDashboard({ user, children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <DashboardNav/>
            <DashboardSidebar/>

            <div class="p-4 sm:ml-64 mt-14">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
