import styles from "./projectPortfolio.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Projectportfolio({ filterCriteria }) {
  const projects = [
    {
      src: "../src/components/images/KFC.png",
      alt: "design",
    },
    {
      src: "../src/components/images/PMPICTURES.png",
      alt: "design",
    },
    {
      src: "../src/components/images/E-Health.png",
      alt: "design",
    },
    {
      src: "../src/components/images/Cutlery.png",
      alt: "design",
    },
    {
      src: "../src/components/images/logitechweb.png",
      alt: "website",
    },
    {
      src: "../src/components/images/CodeWars.png",
      alt: "design",
    },
    {
      src: "../src/components/images/logitech.png",
      alt: "design",
    },
  
  ];

  const filteredProjects = filterCriteria === "all"
    ? projects
    : projects.filter(project => project.alt === filterCriteria);


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
            alt="design"
          />
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.mood}
            src="../src/components/images/E-Health.png"
            alt="design"
          />
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.mood}
            src="../src/components/images/Cutlery.png"
            alt="design"
          />
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.mood}
            src="../src/components/images/logitechweb.png"
            alt="website"
          />
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.mood}
            src="../src/components/images/CodeWars.png"
            alt="design"
          />
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.mood}
            src="../src/components/images/logitech.png"
            alt="design"
          />
        </div>
      </div>
    </>
  );
}

export default Projectportfolio;
