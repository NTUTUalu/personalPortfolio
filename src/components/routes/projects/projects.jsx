import Lottie from "lottie-react";
import animationData from "../../../../public/arrow.json";
import projectStyles from "./projects.module.css";

import ProjectPortfolio from "../projectPortfolio/projectPortfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";

function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    // Initial call to set initial state
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className={projectStyles.color}>
        <Helmet>
        <title>Projects Page</title>
        <meta name="description" content="Here are a couple of projects I have built over my university time-span"/>
        <link rel="canonical" href="projects/:projectsId"/>
       </Helmet>
      <h3 className={projectStyles.pHeading}>Projects.</h3>

      <section className={projectStyles.tabWrapper}>
        <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className={projectStyles.Tabs}  fill={isMobile} >
          <Tab eventKey="all" title="All" className={projectStyles.Tab}>
            <ProjectPortfolio filterCriteria="all" />
          </Tab>
          <Tab eventKey="designs" title="Designs" className={projectStyles.Tab}>
            <ProjectPortfolio filterCriteria="design" />
          </Tab>
          <Tab eventKey="Dev Projects" title="Dev Projects" className={projectStyles.Tab}>
            <ProjectPortfolio filterCriteria="website" />
          </Tab>
        </Tabs>
      </section>
      
     
      <div className={projectStyles.nextHome}>
            <h5 className={projectStyles.next}>Connect with me</h5> <Link to={`/contact/1`}>
              <Lottie animationData={animationData} className={projectStyles.arrow}/></Link>
          </div> 
          
    </div>
  );
}

export default Projects;
