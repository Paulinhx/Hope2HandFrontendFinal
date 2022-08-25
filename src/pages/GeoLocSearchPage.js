import MainHeader from "../components/MainHeader";
import HeroSection from "../components/HeroSection";
import NearbySection from "../components/NearbySection";
import GeoMapSection from "../components/GeoMapSection";
import AboutSection from "../components/AboutSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styles from "./GeoLocSearchPage.module.css";

const GeoLocSearchPage = () => {
  return (
    <main className={styles.geoLocSearchPageMain}>
      <MainHeader />
      <HeroSection />
      <NearbySection />
      <GeoMapSection />
      <AboutSection />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default GeoLocSearchPage;
