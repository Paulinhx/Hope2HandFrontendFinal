import MainHeader from "../components/MainHeader";
import HeroSection from "../components/HeroSection";
import AboutUsSection from "../components/AboutUsSection";
import VolunteerSection1 from "../components/VolunteerSection1";
import ContactFormSection from "../components/ContactFormSection";
import LegalMention from "../components/LegalMention";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styles from "./AboutUsPage.module.css";

const AboutUsPage = () => {
  return (
    <main className={styles.aboutUsPageMain}>
      <MainHeader />
      <HeroSection />
      <AboutUsSection />
      <VolunteerSection1 />
      <ContactFormSection />
      <LegalMention />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default AboutUsPage;
