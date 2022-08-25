import MainHeader from "../components/MainHeader";
import HeroSection from "../components/HeroSection";
import RegistrationFormSection from "../components/RegistrationFormSection";
import ProfileSection from "../components/ProfileSection";
import NearbySection from "../components/NearbySection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styles from "./FindSupportPage.module.css";

const FindSupportPage = () => {
  return (
    <main className={styles.findSupportPageMain}>
      <MainHeader />
      <HeroSection />
      <RegistrationFormSection />
      <ProfileSection />
      <NearbySection />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default FindSupportPage;
