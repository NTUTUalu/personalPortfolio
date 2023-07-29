import Lottie from "lottie-react";
import animationData from "../../images/arrow.json";
// import projectStyles from "../projects/projects.module.css";

import projectStyles from "./projects.module.css";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProjectPortfolio from "../projectPortfolio/projectPortfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {Link} from "react-router-dom";


function Projects() {
  return (
    <div className={projectStyles.color}>
      <h3 className={projectStyles.pHeading}>Projects.</h3>

      <section className={projectStyles.tabWrapper}>
        <Tabs
          defaultActiveKey="all"
          id="uncontrolled-tab-example"
          // className="mb-3"
        >
          <Tab eventKey="all" title="All" className={projectStyles.Tab}>
            <ProjectPortfolio />
          </Tab>
          <Tab eventKey="designs" title="Designs"className={projectStyles.Tab}>
            <ProjectPortfolio />
          </Tab>
          <Tab eventKey="Dev Projects" title="Dev Projects"className={projectStyles.Tab}>
            <ProjectPortfolio />
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
