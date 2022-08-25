import MainHeader from "../components/MainHeader";
import HeroSection from "../components/HeroSection";
import WelcomeSection from "../components/WelcomeSection";
import BlogSection from "../components/BlogSection";
import NearbySection from "../components/NearbySection";
import DonationShopSection from "../components/DonationShopSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.homeMain}>
      <MainHeader />
      <HeroSection />
      <WelcomeSection />
      <BlogSection />
      <NearbySection />
      <DonationShopSection />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Home;
