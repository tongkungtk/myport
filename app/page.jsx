import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />
            <AboutSection />
            <ProjectSection />
            <ExperienceSection />
            <EducationSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
