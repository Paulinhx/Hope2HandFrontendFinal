import styles from "./SeekerCardsSection.module.css";

const SeekerCardsSection = () => {
  return (
    <section className={styles.seekerCardsSection}>
      <div className={styles.titleDiv}>
        <h3 className={styles.listOfPeopleWhoNeedsHelp}>
          List of people who needs help today.
        </h3>
      </div>
      <section className={styles.helpSeekerCardsSection} id="SeekerCards">
        <section className={styles.column12Section}>
          <article className={styles.helpSeekerCard1Article}>
            <img
              className={styles.profileSymbolIcon}
              alt=""
              src="../profilesymbol1.svg"
            />
            <div className={styles.frameDiv}>
              <h4 className={styles.seekerOneH4}>Seeker One</h4>
              <p className={styles.messageThemP}>Message Them!</p>
            </div>
          </article>
          <article className={styles.helpSeekerCard1Article}>
            <img
              className={styles.profileSymbolIcon}
              alt=""
              src="../profilesymbol2.svg"
            />
            <div className={styles.frameDiv}>
              <h4 className={styles.seekerOneH4}>Seeker One</h4>
              <p className={styles.messageThemP}>Message Them!</p>
            </div>
          </article>
        </section>
        <section className={styles.column34Section}>
          <article className={styles.helpSeekerCard1Article}>
            <img
              className={styles.profileSymbolIcon}
              alt=""
              src="../profilesymbol3.svg"
            />
            <div className={styles.frameDiv}>
              <h4 className={styles.seekerOneH4}>Seeker One</h4>
              <p className={styles.messageThemP}>Message Them!</p>
            </div>
          </article>
          <article className={styles.helpSeekerCard1Article}>
            <img
              className={styles.profileSymbolIcon}
              alt=""
              src="../profilesymbol4.svg"
            />
            <div className={styles.frameDiv}>
              <h4 className={styles.seekerOneH4}>Seeker One</h4>
              <p className={styles.messageThemP}>Message Them!</p>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
};

export default SeekerCardsSection;
