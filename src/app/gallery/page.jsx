import Header from "@/components/header"
import Footer from "@/components/footer"
import GalleryGreetingSection from "@/components/gallery-greeting-section"
import GalleryPhotosSection from "@/components/gallery-photos-section"
import GalleryTestimonialsSection from "@/components/gallery-testimonials-section"
import NewsSection from "@/components/news-section"

export default function Gallery() {

    return(

        <>
        
            <header>

                <Header />

            </header>
            
            <main>

                <GalleryGreetingSection />
                <GalleryPhotosSection />
                <GalleryTestimonialsSection />
                <NewsSection />

            </main>

            <footer>

                <Footer />

            </footer>
        
        </>

    )

}