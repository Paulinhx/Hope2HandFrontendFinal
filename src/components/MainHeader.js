import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginSignUpPopUp from "../components/LoginSignUpPopUp";
import PortalPopup from "../components/PortalPopup";
import LoginSignInPopUp from "../components/LoginSignInPopUp";
import BurgerMenuPopUp from "../components/BurgerMenuPopUp";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  const navigate = useNavigate();
  const [isSignUpPopUpOpen, setSignUpPopUpOpen] = useState(false);
  const [isSignInPopUpOpen, setSignInPopUpOpen] = useState(false);
  const [isBurgerMenuPopUpOpen, setBurgerMenuPopUpOpen] = useState(false);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFindSupportButtonClick = useCallback(() => {
    navigate("/findsupportpage");
  }, [navigate]);

  const onPartnersButtonClick = useCallback(() => {
    navigate("/geolocsearchpage");
  }, [navigate]);

  const onDonationsButtonClick = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);

  const onContactUsButtonClick = useCallback(() => {
    navigate("/aboutuspage1");
  }, [navigate]);

  const openSignUpPopUp = useCallback(() => {
    setSignUpPopUpOpen(true);
  }, []);

  const closeSignUpPopUp = useCallback(() => {
    setSignUpPopUpOpen(false);
  }, []);

  const openSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(true);
  }, []);

  const closeSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(false);
  }, []);

  const openBurgerMenuPopUp = useCallback(() => {
    setBurgerMenuPopUpOpen(true);
  }, []);

  const closeBurgerMenuPopUp = useCallback(() => {
    setBurgerMenuPopUpOpen(false);
  }, []);

  return (
    <>
      <header className={styles.mainHeader}>
        <article className={styles.logoArticle} onClick={onLogoContainerClick}>
          <img className={styles.logoMainIcon} alt="" src="../logomain.svg" />
          <b className={styles.logoTitleB}>HOPE2HAND</b>
        </article>
        <div className={styles.frameDiv}>
          <a className={styles.headerNavigations}>
            <button
              className={styles.findSupportButton}
              onClick={onFindSupportButtonClick}
            >
              Find Support
            </button>
            <button
              className={styles.partnersButton}
              onClick={onPartnersButtonClick}
            >
              Partners
            </button>
            <button
              className={styles.donationsButton}
              onClick={onDonationsButtonClick}
            >
              Donations
            </button>
            <button
              className={styles.contactUsButton}
              onClick={onContactUsButtonClick}
            >
              Contact Us
            </button>
          </a>
          <div className={styles.mainCTADiv}>
            <button className={styles.button} onClick={openSignUpPopUp}>
              <b className={styles.becomeAVolunteer}>Become A Volunteer</b>
            </button>
            <button className={styles.buttonSignIn} onClick={openSignInPopUp}>
              <div className={styles.bxbxsUserCircleDiv}>
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              </div>
              <label className={styles.signInLabel}>Sign In</label>
            </button>
            <div className={styles.loginButtonDiv}>
              <button
                className={styles.authBtnButton}
                onClick={openBurgerMenuPopUp}
              >
                <div className={styles.rectangleDiv} />
                <img className={styles.ggmenuIcon} alt="" src="../ggmenu.svg" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {isSignUpPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpPopUp}
        >
          <LoginSignUpPopUp onClose={closeSignUpPopUp} />
        </PortalPopup>
      )}
      {isSignInPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignInPopUp}
        >
          <LoginSignInPopUp onClose={closeSignInPopUp} />
        </PortalPopup>
      )}
      {isBurgerMenuPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBurgerMenuPopUp}
        >
          <BurgerMenuPopUp onClose={closeBurgerMenuPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default MainHeader;
