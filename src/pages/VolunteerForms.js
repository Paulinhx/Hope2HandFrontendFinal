import MainHeader from "../components/MainHeader";
import HeroSection from "../components/HeroSection";
import VolunteerSection from "../components/VolunteerSection";
import SeekerCardsSection from "../components/SeekerCardsSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styles from "./VolunteerForms.module.css";

const VolunteerForms = () => {
  return (
    <main className={styles.volunteerFormsPageMain}>
      <MainHeader />
      <HeroSection />
      <VolunteerSection />
      <SeekerCardsSection />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default VolunteerForms;
