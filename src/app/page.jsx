import Image from "next/image";
import styles from "./page.module.scss";
import HomeGreetingSection from "@/components/home-greeting-section";
import HomeServicesSection from "@/components/home-services-section";
import HomeBenefitsSection from "@/components/home-benefits-section";
import HomeClientsSection from "@/components/home-clients-section";
import HomeActivitySection from "@/components/home-activity-section";
import HomeTestimonialsSection from "@/components/home-testimonials-section";
import NewsSection from "@/components/news-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeGreetingSection />
      <HomeServicesSection />
      <HomeBenefitsSection />
      <HomeClientsSection />
      <HomeActivitySection />
      <HomeTestimonialsSection />
      <NewsSection />
      <Footer />
    </main>
  );
}
