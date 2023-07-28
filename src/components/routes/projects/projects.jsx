import Lottie from "lottie-react";
import animationData from "../../images/arrow.json";
// import styles from "../projects/projects.module.css";

import styles from "./projects.module.css";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProjectPortfolio from "../projectPortfolio/projectPortfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Projects() {
  return (
    <div className={styles.color}>
      <h3 className={styles.pHeading}>Projects.</h3>

      <section>
        <Tabs
          defaultActiveKey="all"
          id="uncontrolled-tab-example"
          // className="mb-3"
        >
          <Tab eventKey="all" title="All" className={styles.Tab}>
            <ProjectPortfolio />
          </Tab>
          <Tab eventKey="designs" title="Designs"className={styles.Tab}>
            <ProjectPortfolio />
          </Tab>
          <Tab eventKey="Dev Projects" title="Dev Projects"className={styles.Tab}>
            <ProjectPortfolio />
          </Tab>
        </Tabs>
      </section>
      <div className={styles.next}>
        <h5>See My Recent Work</h5>
        <div className={styles.lottieDir}>
          <Lottie animationData={animationData} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
