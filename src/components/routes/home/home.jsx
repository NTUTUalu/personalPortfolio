import homeStyles from "./home.module.css";
// import { Lottie } from "@lottiefiles/react-lottie-player"
import Lottie from "lottie-react"
import animationData from "../../../../public/arrow.json"
import {Link} from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() { 
  return (
    <>
    <div className={homeStyles.container}>
    <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Here is my introduction overview"/>
        <link rel="canonical" href="/"/>
       </Helmet>
      <div className={homeStyles.front}>
        <div>
        <h2>Hi, {`I'm`} Ntutu Sekonyela.</h2>
      <h3>Frontend Developer</h3>
      <p>I build robust web applications with clean, elegant and robust code. Change is inevitable in a project's life span, hence creating projects with easily maintainable code is mandatory.</p>
        </div>
       
        <div className={homeStyles.nextHome}>
            <h5 className={homeStyles.next}>See More About Me</h5>
            <Link to={`about/1`} > <Lottie animationData={animationData} className={homeStyles.arrow}/>  </Link>
          </div>
        
      </div>
      <div className={homeStyles.designer}>
        <h3>Designer</h3>
        <p>Product designer specializing in UX research and beautiful UI designs</p>
      </div>
    </div>
  </>
  );
}

export default Home;
