import Lottie from "lottie-react";
import animationData from "../../images/arrow.json";
import styles from "../projects/projects.module.css";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// // import 'bootstrap/dist/js/bootstrap.bundle.min';

function Projects() {
  return (
    <>
      <h3 className={styles.pHeading}>Projects.</h3>
      <section>
        <div>
          <ul  className={styles.miniNavs} >
                    <li>All</li>
                    <li>Designs</li>
                    <li>Dev Projects</li>
                </ul>
          {/* <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-bs-toggle="tab" href="#all">
                All
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#designs">
                Designs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#devProjects">
                Dev Projects
              </a>
            </li>
          </ul>{" "}
          <div class="tab-content">
            <div id="all" class="container tab-pane active">
              <br />
              <h3>HOME</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div id="designs" class="container tab-pane fade">
              <br />
              <h3>Menu 1</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div id="devProjects" class="container tab-pane fade">
              <br />
              <h3>Menu 2</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </div> */}
        </div>
      </section>
      <div className={styles.next}>
        <h5>See My Recent Work</h5>
        <div className={styles.lottieDir}>
          <Lottie animationData={animationData} />
        </div>
      </div>
    </>
  );
}

export default Projects;
