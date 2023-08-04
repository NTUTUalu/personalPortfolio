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
            Leadership University.
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
      <div className={AboutStyles.wrapper}>
        <div className={AboutStyles.left}>
          <h3>About Me.</h3>
          <h5>
            My dream destination is Canada.
          </h5>
          <p>
            I have seen youtube videos of techies having jobs in Canada, their "Day in their lives as Software Engineers" videos on youtube are definitely a bomb! Their content really inspires me as an ever growing software developer. 
          </p>
        </div>
        <div className={AboutStyles.right}>
          <img
            className={AboutStyles.mood}
            src="../src/components/images/Canada-flag.jpg"
          />
        </div>
      </div>
      <div className={AboutStyles.wrapper}>
        <div className={AboutStyles.left}>
          <h3>About Me.</h3>
          <h5>
            Atomic habits. What a fantastic book! 
          </h5>
          <p>
            I am low-key interested in building an app that is in correlation to what I learnt from reading this book. It is a great book which I recommend for anyone trying to break bad habits, this book will definitely help them thrive. 
          </p>
        </div>
        <div className={AboutStyles.right}>
          <img
            className={AboutStyles.mood}
            src="../src/components/images/habits.jpg"
          />
        </div>
      </div>
      <div className={AboutStyles.wrapper}>
        <div className={AboutStyles.left}>
          <h3>About Me.</h3>
          <h5>
            {`( ^ ~ ^ ) -->`} Breakfast + Lunch = Brunch.
          </h5>
          <p>
            Rather than have breakfast then later, lunch. I prefer having a late breakfast at around 10 a.m which I refer to as "brunch." This is a habit that honestly comes from a budget stricken life of a college student. Lol, Tough times never last!
          </p>
        </div>
        <div className={AboutStyles.right}>
          <img
            className={AboutStyles.mood}
            src="../src/components/images/LetsDoBrunch.jpg"
          />
        </div>
      </div>
      <div className={AboutStyles.wrapper}>
        <div className={AboutStyles.left}>
          <h3>About Me.</h3>
          <h5>
            Kevin De Bruyne is my current favorite player in the English Premier League.
          </h5>
          <p>
          Being a supporter of great football, it goes without a doubt that my heart will gravitate towards favoritism of players that play the kind of style I like. Kevin De Bruyne is that magician for me. His ability to give fantastic assists to strikers is out of this world. He is the king of modern football.
          </p>
        </div>
        <div className={AboutStyles.right}>
          <img
            className={AboutStyles.mood}
            src="../src/components/images/kdb.jpg"
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
