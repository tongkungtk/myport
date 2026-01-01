import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />
            <AboutSection />
            <ProjectSection />
            <Footer />
        </main>
    );
}
