import styles from "../home/home.module.css";
// import { Lottie } from "@lottiefiles/react-lottie-player"
import Lottie from "lottie-react"
import animationData from "../../images/arrow.json"


function Home() { 
  return (
    <>
    <div className={styles.container}>
      <div className={styles.front}>
        <div>
        <h2>Hi, {`I'm`} Ntutu Sekonyela.</h2>
      <h3>Frontend Developer</h3>
      <p>Build robust web applications with clean elegant and robust code</p>
        </div>
        <div className={styles.next}>
          <h5>See More About Me</h5>
          <div className={styles.lottieDir}>
                <Lottie animationData={animationData} />
          </div>
        </div>
      </div>
      <div className={styles.designer}>
        <h3>Designer</h3>
        <p>Product designer specializing in UX research and beautiful UI designs</p>
      </div>
    </div>
  </>
  );
}

export default Home;
