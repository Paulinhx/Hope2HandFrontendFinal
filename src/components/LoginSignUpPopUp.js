import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginSignInPopUp from "../components/LoginSignInPopUp";
import PortalPopup from "../components/PortalPopup";
import styles from "./LoginSignUpPopUp.module.css";

const LoginSignUpPopUp = ({ onClose }) => {
  const navigate = useNavigate();
  const [isSignInPopUpOpen, setSignInPopUpOpen] = useState(false);

  const onFrameButtonClick = useCallback(() => {
    navigate("/volunteerformspage");
  }, [navigate]);

  const openSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(true);
  }, []);

  const closeSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.signUpPopUpDiv}>
        <h5 className={styles.signUpH5}>{` Sign Up `}</h5>
        <button className={styles.closeButton} onClick={onClose}>
          <img className={styles.ellipseIcon} alt="" src="../ellipse-225.svg" />
          <img className={styles.lineIcon} alt="" src="../line-82.svg" />
          <img className={styles.lineIcon1} alt="" src="../line-92.svg" />
        </button>
        <div className={styles.signupFrameDiv}>
          <div className={styles.frameDiv}>
            <div className={styles.frameDiv1}>
              <div className={styles.frameDiv2}>
                <p className={styles.emailP}>Email</p>
                <input
                  className={styles.rectangleInput}
                  type="text"
                  autoFocus
                />
              </div>
              <input
                className={styles.frameInput}
                type="text"
                placeholder="Password"
              />
              <select className={styles.frameSelect} />
            </div>
            <button className={styles.frameButton} onClick={onFrameButtonClick}>
              <div className={styles.frameDiv3}>
                <p className={styles.sIGNUP}>SIGN UP</p>
              </div>
            </button>
          </div>
          <p className={styles.oRP}>OR</p>
          <button className={styles.frameButton1}>
            <button className={styles.frameButton2}>
              <div className={styles.groupDiv}>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="../image-2@2x.png"
                />
                <p className={styles.signUpWithGoogle}>Sign up with Google</p>
              </div>
            </button>
          </button>
        </div>
        <div className={styles.haveAccountLinkDiv}>
          <b className={styles.youHaveAccount}>You have account?</b>
          <button className={styles.logInButton} onClick={openSignInPopUp}>
            Log in
          </button>
        </div>
      </div>
      {isSignInPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(144, 141, 185, 0.5)"
          placement="Centered"
          onOutsideClick={closeSignInPopUp}
        >
          <LoginSignInPopUp onClose={closeSignInPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default LoginSignUpPopUp;
