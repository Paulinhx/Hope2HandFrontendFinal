import MainHeader from "../components/MainHeader";
import HeroSection from "../components/HeroSection";
import DonateNowSection from "../components/DonateNowSection";
import DonationShopSection from "../components/DonationShopSection";
import BlogSection from "../components/BlogSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styles from "./DonationPage.module.css";

const DonationPage = () => {
  return (
    <main className={styles.donationPageMain}>
      <MainHeader />
      <HeroSection />
      <DonateNowSection />
      <DonationShopSection />
      <BlogSection />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default DonationPage;
