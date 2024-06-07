import Header from "@/components/header"
import FooterContact from "@/components/footer-contact"
import ContactGreetingSection from "@/components/contact-greeting-section"
import ContactInfoSection from "@/components/contact-info-section"

export default function Contact() {

    return(

        <>
        
            <header>

                <Header />

            </header>

            <main>

                <ContactGreetingSection />
                <ContactInfoSection />

            </main>

            <footer>

                <FooterContact />

            </footer>

        </>

    )

}