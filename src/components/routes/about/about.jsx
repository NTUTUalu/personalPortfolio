import AboutStyles from "./about.module.css";
import NavSlider from "../navslider/navSlider";
import skillSet from "../../../../public/skillComposition.svg";
import books from "../../../../public/favbooks.svg";
import random from "../../../../public/randomFacts.json";
import Lottie from "lottie-react";
import animationData from "../../../../public/arrow.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Helmet } from "react-helmet-async";

function About() {
  const [intro, newIntro] = useState(aboutList[0].intro);
  const [details, newDetails] = useState(aboutList[0].details);
  const [image, newImage] = useState(aboutList[0].image);
  const [activeIndex, setActiveIndex] = useState(0);


  //FIXME:
  //NOTE:
  //DEBUG:
  function changeUI(index) {
    newIntro(aboutList[index].intro);
    newDetails(aboutList[index].details);
    newImage(aboutList[index].image);
    setActiveIndex(index);
  }

  const [isMobile, setIsMobile] = useState(false);

  // Check if the viewport width is below the mobile threshold
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
  };

  useEffect(() => {
    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    
    <div className={AboutStyles.color}>
       <Helmet>
        <title>About Page</title>
        <meta name="description" content="learn more about me here"/>
        <link rel="canonical" href="about/:aboutId"/>
       </Helmet>
      {isMobile ? (
        <div className={AboutStyles.wrapper2}>
        {/* Create a separate div for the text content */}
        <h3>About Me.</h3>
        <Carousel activeIndex={activeIndex} onSelect={changeUI}>
          {aboutList.slice(0, 5).map((item, index) => (
            <Carousel.Item key={index} interval={18000}>
              {/* Render the image in the carousel */}
              <img
                className={AboutStyles.mood2}
                src={item.image}
                alt={`Slide ${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className={AboutStyles.textContainer}>
          <h5>{intro}</h5>
          <p>{details}</p>
        </div>
      </div>
      ) : (
        // If not on mobile, render your existing content
        <div className={AboutStyles.wrapper}>
          <div className={AboutStyles.left}>
            <h3>About Me.</h3>
            <h5>{intro}</h5>
            <p>{details}</p>
          </div>
          
          <div className={AboutStyles.right}>
            <img className={AboutStyles.mood} src={image}  />
          </div>
        </div>
      )}

      <NavSlider changeDetails={changeUI} aboutList={aboutList} />
      
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
          <Lottie className={AboutStyles.lottie} animationData={random} />
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
         <img className={AboutStyles.books} src={books} alt="Favorite Books" />
      {/* <img src={process.env.PUBLIC_URL + '/favbooks.svg'} alt="Favorite Books" /> */}
      </section>

      <div className={AboutStyles.nextHome}>
        <h5 className={AboutStyles.next}>Projects Page</h5>
        <Link to={`/projects/1`}>
          <Lottie animationData={animationData} className={AboutStyles.arrow} />
        </Link>
      </div>
    </div>
  );
}

const aboutList = [
  {
    intro:
      "I am a frontend developer currently studying at the African Leadership University",
    details:
      "Since beginning my coding journey 2 years ago, it has really been more about discovery and enhancing my skills using Javascript frameworks. For the year 2023 to 2024, I will be nurturing my mental muscles in using React JS and Next JS to build web applications.",
    image: "/React.png",
  },
  {
    intro: "My dream destination is Canada.",
    details:
      ' I have seen youtube videos of techies having jobs in Canada, their "Day in their lives as Software Engineers" videos on youtube are definitely a bomb! Their content really inspires me as an ever growing software developer.',
    image: "/Canada-flag.jpg",
  },
  {
    intro: "   Atomic habits. What a fantastic book! ",
    details:
      "I am low-key interested in building an app that is in correlation to what I learnt from reading this book. It is a great book which I recommend for anyone trying to break bad habits, this book will definitely help them thrive.",
    image: "/habits.jpg",
  },
  {
    intro: "Breakfast + Lunch = Brunch.",
    details:
      '    Rather than have breakfast then later, lunch. I prefer having a late breakfast at around 10 a.m which I refer to as "brunch." This is a habit that honestly comes from a budget stricken life of a college student. Lol, Tough times never last!',
    image: "/LetsDoBrunch.jpg",
  },
  {
    intro:
      "Kevin De Bruyne is my current favorite player in the English Premier League.",
    details:
      "   Being a supporter of great football, it goes without a doubt that my heart will gravitate towards favoritism of players that play the kind of style I like. Kevin De Bruyne is that magician for me. His ability to give fantastic assists to strikers is out of this world. He is the king of modern football.",
    image: "/kdb.jpg",
  },
];

export default About;
