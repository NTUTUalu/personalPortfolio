import styles from "../navslider/navSlider.module.css"

function NavSlider() {
    return <>
    <div className={styles.slider}>
        <div className={styles.sliderRow}>
        <div className={styles.navImages}>
          <img
            className={styles.nav}
            src="../src/components/images/React.png"
          />
        </div>
        <div className={styles.navImages}>
          <img
            className={styles.nav}
            src="../src/components/images/Canada-flag.jpg"
          />
        </div>
        <div className={styles.navImages}>
          <img
            className={styles.nav}
            src="../src/components/images/habits.jpg"
          />
        </div>
        <div className={styles.navImages}>
          <img
            className={styles.nav}
            src="../src/components/images/LetsDoBrunch.jpg"
          />
        </div>
        <div className={styles.navImages}>
          <img className={styles.nav} src="../src/components/images/kdb.jpg" />
        </div>
        </div>
      </div>
    </>
}

export default NavSlider;