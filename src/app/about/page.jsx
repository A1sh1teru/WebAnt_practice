import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutUsGreetingSection from "@/components/aboutUs-greeting-section"
import AboutUsIntroSection from "@/components/aboutUs-intro-section"
import AboutUsFeaturesSection from "@/components/aboutUs-features-section"
import AboutUsClientsSection from "@/components/aboutUs-clients-section copy"
import AboutUsServicesSection from "@/components/aboutUs-services-section"
import AboutUsTestimonialsSection from "@/components/aboutUs-testimonials-section"
import NewsSection from "@/components/news-section"

export default function About() {

    return(

        <>

      <header>
        <Header />
      </header>

      <main>
        
        <AboutUsGreetingSection />
        <AboutUsIntroSection />
        <AboutUsFeaturesSection />
        <AboutUsClientsSection />
        <AboutUsServicesSection />
        <AboutUsTestimonialsSection />
        <NewsSection />

      </main>

      <footer>

        <Footer />

      </footer>
    
    </>

    )

}