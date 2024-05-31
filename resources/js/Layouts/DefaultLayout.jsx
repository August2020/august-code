import Navigation from "@/Components/Global/Navigation";
import Footer from "@/Components/Global/Footer";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen bg-white-100">
            <Navigation />
            <main>
                <div className="bg-white overflow-hidden">{children}</div>
            </main>
            <Footer />
        </div>
    );
}
