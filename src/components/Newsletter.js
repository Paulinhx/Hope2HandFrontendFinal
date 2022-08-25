import { useCallback } from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  const onSendBtnButtonClick = useCallback(() => {
    window.open("/solarpunkpopup");
  }, []);

  return (
    <section className={styles.newsletterSection}>
      <div className={styles.letterTitlesDiv}>
        <h5 className={styles.nEWSLETTERH5}>NEWSLETTER</h5>
        <p className={styles.stayUpToDate}>Stay Up to Date</p>
      </div>
      <div className={styles.inputDiv}>
        <input
          className={styles.yourEmailInput}
          type="text"
          placeholder="Your Email..."
        />
        <button className={styles.sendBtnButton} onClick={onSendBtnButtonClick}>
          <img className={styles.ellipseIcon} alt="" src="../ellipse-18.svg" />
          <img
            className={styles.phpaperPlaneIcon}
            alt=""
            src="../phpaperplane.svg"
          />
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
