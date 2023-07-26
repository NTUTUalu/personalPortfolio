import styles from "../about/about.module.css";
import NavSlider from "../navslider/navSlider";
import skillSet from "../../images/skillComposition.svg";
import books from "../../images/favbooks.svg";
import random from "../../images/randomFacts.json";
import Lottie from "lottie-react";
import animationData from "../../images/arrow.json"

function About() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h3>About Me.</h3>
          <h5>
            I am a frontend developer currently studying at the African
            Leadership University
          </h5>
          <p>
            Since beggining my coding journey 2 years ago, it has really been
            more about discovery and enhancing my skills using Javascript
            frameworks
          </p>
        </div>
        <div className={styles.right}>
          <img
            className={styles.mood}
            src="../src/components/images/React.png"
          />
        </div>
      </div>
      <NavSlider />
      <div className={styles.skills}>
        <div className={styles.leftskills}>
          <h3>Frontend developer</h3>
          <h5>Vanilla Javascript</h5>
          <h5>React JS</h5>
          <h5>Next JS</h5>
          <h5>Flutter</h5>
        </div>
        <div className={styles.middle}>
          <img src={skillSet} className={styles.skillset} />
        </div>
        <div className={styles.rightskills}>
          <h3>Designer</h3>
          <h5>UX Research</h5>
          <h5>UI Design</h5>
          <h5>Interaction Design</h5>
        </div>
      </div>
      <section>
        <div className={styles.leftAnimation}>
          <Lottie className={styles.lottie} animationData={random} />
        </div>
        <div className={styles.rightAnimations}>
          <h1>Random facts</h1>
          <h5>I prefer brunch over breakfast</h5>
          <h5>Big fan of Jigga / Hov</h5>
          <h5>Prefer movies over series</h5>
          <h5>Religiously into quotes to uplift my mood</h5>
          <h5>Recently got hooked to reading books</h5>
        </div>
      </section>
      <section className={styles.graph}>
        <img src={books} className={styles.books} />
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

export default About;
