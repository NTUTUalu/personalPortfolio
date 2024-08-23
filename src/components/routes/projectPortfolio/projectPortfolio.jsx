import React from "react";
import styles from "./projectPortfolio.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense } from 'react';
import Place_Holder from '../../placeholder/placeholder'

function Projectportfolio({ filterCriteria }) {
 
  const projects = [
    {
      src: "/KFC.png",
      alt: "design",
      href2: "https://www.behance.net/gallery/160675629/KFC-mobile-design-app"
    },
      {
      src: "/jobz.png",
      alt: "website",
      href2: "https://lesotho-jobs.vercel.app/"
    },
    // https://architecture-group.vercel.app/
  
    {
      src: "/PMPictures.png",
      alt: "design",
      href2: "https://www.behance.net/gallery/161085587/PM-PICTURES"
    },
    {
      src: "/E-Health.png",
      alt: "design",
      href2: "https://www.behance.net/gallery/167922099/E-Health-Africa"
    },
    {
      src: "/Cutlery.png",
      alt: "design",
      href2: "https://www.behance.net/gallery/164729167/Cuttlery-e-commerce-store"
    },
    
    {
      src: "/logitechweb.png",
      alt: "website",
      href2: "https://logitechconsultancy.vercel.app/"
    },
    {
      src: "/CodeWars.png",
      alt: "design",
      href2: "https://www.behance.net/gallery/160531243/Code-wars-website"
      
    },
    {
      src: "/logitech.png",
      alt: "design",
      href2: "https://www.behance.net/gallery/156179299/Logitech-consultancy"
    }, 
    {
      src: "/realEstates.png",
      alt: "website",
      href2: "https://moneri-architectural-designs.vercel.app/"
    },
    
    {
      src: "/banner.png",
      alt: "website",
      href2: "https://foodapp-vert.vercel.app/"
    },
    {
      src: "/pm.png",
      alt: "website",
      href2: "https://pm-pictures.webflow.io/"
    },
     {
      src: "/Egg.png",
      alt: "design",
      href2: "https://www.behance.net/gallery/188230753/Egg-Go?share=1"
    },
    {
      src: "/logo.png",
      alt: "website",
      href2: "https://crop-guard-qvqjzeui9-ntutualu.vercel.app/"
    },
    {
      src: "/c1.jpg",
      alt: "website",
      href2: "https://the-convergent-group.vercel.app/"
    },
    {
      src: "/todo.jpg",
      alt: "website",
      href2: "https://todo-app-one-phi-66.vercel.app/"
    },
    {
      src: "/vacancy.png",
      alt: "website",
      href2: "https://jobsearch-gules.vercel.app/"
    },
    {
      src: "/2.png",
      alt: "website",
      href2: "https://the-capstone-project-ten.vercel.app/"
    },
    {
      src: "/restaurantmenu.png",
      alt: "website",
      href2: "https://the-capstone-project-ten.vercel.app/"
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
