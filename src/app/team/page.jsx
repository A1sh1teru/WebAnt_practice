import Header from "@/components/header"
import Footer from "@/components/footer"
import TeamGreetingSection from "@/components/team-greeting-section"
import TeamInfoSection from "@/components/team-info-section"
import TeamTestimonialsSection from "@/components/team-testimonials-section"
import NewsSection from "@/components/news-section"

export default function Team() {

    return(

        <>
        
            <header>

                <Header />

            </header>

            <main>

                <TeamGreetingSection />
                <TeamInfoSection />
                <TeamTestimonialsSection />
                <NewsSection />

            </main>

            <footer>

                <Footer />

            </footer>

        </>

    )

}