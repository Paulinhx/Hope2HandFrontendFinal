import styles from "./ContactFormSection.module.css";

const ContactFormSection = () => {
  return (
    <section className={styles.contactFormSection}>
      <form className={styles.contactForm} method="post">
        <div className={styles.frameDiv}>
          <textarea
            className={styles.inputComponentTextarea}
            placeholder="Tap Your Message Here..."
          />
          <button className={styles.submitBtnButton}>
            <div className={styles.submitButtonDiv} />
            <div className={styles.submitDiv}>Submit</div>
          </button>
        </div>
        <div className={styles.frameDiv1}>
          <input
            className={styles.inputComponent}
            type="text"
            placeholder="Your Email"
          />
          <div className={styles.frameDiv2}>
            <article className={styles.logoMainArticle}>
              <img className={styles.vectorIcon} alt="" src="../vector12.svg" />
              <img
                className={styles.vectorIcon1}
                alt=""
                src="../vector13.svg"
              />
              <img
                className={styles.vectorIcon2}
                alt=""
                src="../vector14.svg"
              />
              <img
                className={styles.vectorIcon3}
                alt=""
                src="../vector15.svg"
              />
              <b className={styles.logoTitleB}>HOPE2HAND</b>
            </article>
            <h3 className={styles.contactFormH3}>Contact Form</h3>
          </div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.frameDiv4}>
            <p className={styles.pleaseUseContactUsHere}>
              Please Use Contact Us Here!
            </p>
            <input
              className={styles.inputComponent1}
              type="text"
              placeholder="Your Name"
            />
            <input
              className={styles.inputComponent1}
              type="text"
              placeholder="Your Phone Number"
            />
          </div>
          <input
            className={styles.inputComponentTextarea}
            type="text"
            placeholder="Your Company Name"
          />
        </div>
      </form>
    </section>
  );
};

export default ContactFormSection;
