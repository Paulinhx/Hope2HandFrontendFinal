import { useState, useCallback } from "react";
import LoginSignUpPopUp from "../components/LoginSignUpPopUp";
import PortalPopup from "../components/PortalPopup";
import styles from "./VolunteerSection1.module.css";

const VolunteerSection1 = () => {
  const [isSignUpPopUp1Open, setSignUpPopUp1Open] = useState(false);

  const openSignUpPopUp1 = useCallback(() => {
    setSignUpPopUp1Open(true);
  }, []);

  const closeSignUpPopUp1 = useCallback(() => {
    setSignUpPopUp1Open(false);
  }, []);

  return (
    <>
      <section className={styles.volunteerSection}>
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <h4 className={styles.wannaVolunteerWithUs}>
              Wanna Volunteer With Us?
            </h4>
            <button className={styles.button} onClick={openSignUpPopUp1}>
              <b className={styles.becomeAVolunteer}>Become A Volunteer</b>
            </button>
          </div>
        </div>
        <div className={styles.frameDiv2}>
          <img className={styles.vectorIcon} alt="" src="../vector-1.svg" />
          <h5 className={styles.comeJoinUsInOurMissionTo}>
            Come join us in our mission to help our people in Berlin.
          </h5>
        </div>
      </section>
      {isSignUpPopUp1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpPopUp1}
        >
          <LoginSignUpPopUp onClose={closeSignUpPopUp1} />
        </PortalPopup>
      )}
    </>
  );
};

export default VolunteerSection1;
