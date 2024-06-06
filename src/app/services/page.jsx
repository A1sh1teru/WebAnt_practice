import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesGreetingSection from "@/components/services-greeting-section"
import ServicesIntroSection from "@/components/services-intro-section"
import ServicesServicesSection from "@/components/services-services-section"
import ServicesFeaturesSection from "@/components/services-features-section"
import ServicesTestimonialsSection from "@/components/services-testimonials-section"
import NewsSection from "@/components/news-section"

export default function Services() {

    return(

        <>
        
            <header>

                <Header />

            </header>

            <main>

                <ServicesGreetingSection />
                <ServicesIntroSection />
                <ServicesServicesSection />
                <ServicesFeaturesSection />
                <ServicesTestimonialsSection />
                <NewsSection />

            </main>

            <footer>

                <Footer />

            </footer>
        
        </>

    )

}