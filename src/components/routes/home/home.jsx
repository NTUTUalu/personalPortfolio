import "../home/home.module.css";
import lightIcon from "../../images/icons8-sun.svg";
import darkIcon from "../../images/icons8-code.svg";
import "./home.module.css";
import { Outlet,  Link} from "react-router-dom";


function Home() {
  
  return (
    <>
      <nav className="Navigation">
        <img src={darkIcon} />
        <div className="navLinks">
          <ul>
          <li>
              <Link to={`/`}>Home</Link>

            </li>
            <li>
              <Link to={`about/1`}>About</Link>

            </li>

            <li><Link to={`projects/1`}>Projects</Link></li>
            <li><Link to={`contact/1`}>Contact</Link></li>
          </ul>
          <img src={lightIcon} />
        </div>
      </nav>
      <h3>This is our landing page/home page</h3>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Home;
