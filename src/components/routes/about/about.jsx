import AboutStyles from "./about.module.css";
import NavSlider from "../navslider/navSlider";
import skillSet from "../../images/skillComposition.svg";
import books from "../../images/favbooks.svg";
import random from "../../images/randomFacts.json";
import Lottie from "lottie-react";
import animationData from "../../images/arrow.json";
import {Outlet, Link} from "react-router-dom";

function About() {
  return (
    <div className={AboutStyles.color}>
      <div className={AboutStyles.wrapper}>
        <div className={AboutStyles.left}>
          <h3>About Me.</h3>
          <h5>
            I am a frontend developer currently studying at the African
            Leadership University
          </h5>
          <p>
            Since beggining my coding journey 2 years ago, it has really been
            more about discovery and enhancing my skills using Javascript
            frameworks. For the year 2023 to 2024, I will be nurturing my mental muscles in using React JS and Next JS to build web applications. 
          </p>
        </div>
        <div className={AboutStyles.right}>
          <img
            className={AboutStyles.mood}
            src="../src/components/images/React.png"
          />
        </div>
      </div>
      <NavSlider />
      <div className={AboutStyles.skills}>
        <div className={AboutStyles.leftskills}>
          <h3>Frontend developer</h3>
          <h5>Vanilla Javascript</h5>
          <h5>React JS</h5>
          <h5>Next JS</h5>
          <h5>Flutter</h5>
        </div>
        <div className={AboutStyles.middle}>
          <img src={skillSet} className={AboutStyles.skillset} />
        </div>
        <div className={AboutStyles.rightskills}>
          <h3>Designer</h3>
          <h5>UX Research</h5>
          <h5>UI Design</h5>
          <h5>Interaction Design</h5>
        </div>
      </div>
      <section className={AboutStyles.randomFacts}>
        <div className={AboutStyles.leftAnimation}>
          <Lottie  animationData={random} />
        </div>
        <div className={AboutStyles.rightAnimation}>
          <h1>Random facts</h1>
          <h5>I prefer brunch over breakfast</h5>
          <h5>Big fan of Jigga / Hov</h5>
          <h5>Prefer movies over series</h5>
          <h5>Religiously into quotes to uplift my mood</h5>
          <h5>Recently got hooked to reading books</h5>
        </div>
      </section>
      <section className={AboutStyles.graph}>
        <img src={books} className={AboutStyles.books} />
      </section>
    
       <div className={AboutStyles.nextHome}>
            <h5 className={AboutStyles.next}>Projects Page</h5>
            <Link to={`/projects/1`}><Lottie animationData={animationData} className={AboutStyles.arrow}/></Link>
          </div>
     
    </div>
  );
}

export default About;
