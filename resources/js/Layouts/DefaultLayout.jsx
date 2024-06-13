import Navigation from "@/Components/Global/Navigation";
import FlowbiteInit from "@/Components/Global/FlowbiteInit";
import Footer from "@/Components/Global/Footer";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen overflow-hidden">
            <FlowbiteInit></FlowbiteInit>
            <Navigation />
            <main>
                <div className="bg-transparent overflow-hidden">{children}</div>
            </main>
            <Footer />
        </div>
    );
}
