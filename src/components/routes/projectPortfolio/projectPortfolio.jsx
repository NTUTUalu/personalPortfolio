import styles from "./projectPortfolio.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Projectportfolio() {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <img className={styles.mood} src="../src/components/images/KFC.png" />
        </div>
        <div className={`${styles.gridItem} ${styles.class}`}>
          <img
            className={styles.mood}
            src="../src/components/images/PMPICTURES.png"
          />
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.mood}
            src="../src/components/images/E-Health.png"
          />
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.mood}
            src="../src/components/images/Cutlery.png"
          />
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.mood}
            src="../src/components/images/logitechweb.png"
          />
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.mood}
            src="../src/components/images/CodeWars.png"
          />
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.mood}
            src="../src/components/images/logitech.png"
          />
        </div>
      </div>
    </>
  );
}

export default Projectportfolio;
