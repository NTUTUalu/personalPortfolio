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

  const filteredProjects =
    filterCriteria === "all"
      ? projects
      : projects.filter((project) => project.alt === filterCriteria);

  return (
    <>
      <div className={styles.gridContainer}>
        {filteredProjects.map((project, index) => (
          <div className={styles.gridItem} key={index}>
            <img className={styles.mood} src={project.src} alt={project.alt} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Projectportfolio;
