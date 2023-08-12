import React from "react";
import styles from "./projectPortfolio.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Projectportfolio({ filterCriteria }) {
 
  
  const projects = [
    {
      src: "../src/components/images/KFC.png",
      alt: "design",
      href2: "https://www.behance.net/gallery/160675629/KFC-mobile-design-app"
    },
    {
      src: "../src/components/images/PMPICTURES.png",
      alt: "design",
      href2: "https://www.behance.net/gallery/161085587/PM-PICTURES"
    },
    {
      src: "../src/components/images/E-Health.png",
      alt: "design",
      href2: "https://www.behance.net/gallery/167922099/E-Health-Africa"
    },
    {
      src: "../src/components/images/Cutlery.png",
      alt: "design",
      href2: "https://www.behance.net/gallery/164729167/Cuttlery-e-commerce-store"
    },
    {
      src: "../src/components/images/logitechweb.png",
      alt: "website",
      href2: "https://logitechconsultancy.vercel.app/"
    },
    {
      src: "../src/components/images/CodeWars.png",
      alt: "design",
      href2: "https://www.behance.net/gallery/160531243/Code-wars-website"
      
    },
    {
      src: "../src/components/images/logitech.png",
      alt: "design",
      href2: "https://www.behance.net/gallery/156179299/Logitech-consultancy"
    },
  ];

  const handleImageClick = (event, href2) => {
    const confirmed = window.confirm("You are about to be redirected to a different link. Continue?");
    if (!confirmed) {
      event.preventDefault(); // Prevent default link behavior if not confirmed
    }
  };

  const filteredProjects =
    filterCriteria === "all"
      ? projects
      : projects.filter((project) => project.alt === filterCriteria);

  return (
    <>
      <div className={styles.gridContainer}>
        {filteredProjects.map((project, index) => (
          <div className={styles.gridItem} key={index}>
            <a href={project.href2} target="_blank" rel="noopener noreferrer" onClick={(e) => handleImageClick(e,project.href2)}>
              <img className={styles.mood} src={project.src} alt={project.alt} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projectportfolio;
