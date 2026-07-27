import BlogSection from "../components/BlogSection";
import ClientsSection from "../components/ClientsSection";
import ExpertiseSection from "../components/ExpertiseSection";
import HeroSection from "../components/HeroSection";
import ProcessSection from "../components/ProcessSection";
import Services from "../components/Services";
import TestimonialsSection from "../components/TestSection";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <ClientsSection/>
            <ExpertiseSection/>
            <Services/>
            <ProcessSection/>
            <TestimonialsSection/>
            <BlogSection/>
        </div>
    );
}
