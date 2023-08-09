import styles from "./navSlider.module.css"

function NavSlider({ changeDetails }) {

 
    return <>
    <div className={styles.slider}>
        <div className={styles.sliderRow}>
        <div className={styles.navImages}>
          <img
            className={styles.nav}
            src="../src/components/images/React.png"
            onClick={() => changeDetails(0)}
          />
        </div>
        <div className={styles.navImages}>
          <img
            className={styles.nav}
            src="../src/components/images/Canada-flag.jpg"
            onClick={() => changeDetails(1)}
          />
        </div>
        <div className={styles.navImages}>
          <img
            className={styles.nav}
            src="../src/components/images/habits.jpg"
            onClick={() => changeDetails(2)}
          />
        </div>
        <div className={styles.navImages}>
          <img
            className={styles.nav}
            src="../src/components/images/LetsDoBrunch.jpg"
            onClick={() => changeDetails(3)}
          />
        </div>
        <div className={styles.navImages}>
          <img className={styles.nav} src="../src/components/images/kdb.jpg" 
          onClick={() => changeDetails(4)}
          />
        </div>
        </div>
      </div>
    </>
}

export default NavSlider;