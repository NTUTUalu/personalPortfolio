import NavigationStyles from  "./navigation.module.css";
import "../home/navigation.module.css";
import lightIcon from "../../images/icons8-sun.svg";
import darkIcon from "../../images/icons8-code.svg";
import "./home.module.css";
import { Outlet,  Link} from "react-router-dom";
import Footer from '../footer/footer';

function Navigation() {

  return (
    <>
    <nav className={NavigationStyles.Navigation}>
      <Link to={'/'}><img src={darkIcon} style={{width:'40px', height:'40px'}}/></Link>
      <div className={NavigationStyles.navLinks}>
        <ul>
          <li>
            <Link to={`about/1`} className={NavigationStyles.links}>About</Link>
          </li>
          <li><Link to={`projects/1`}className={NavigationStyles.links}>Projects</Link></li>
          <li><Link to={`contact/1`} className={NavigationStyles.links}>Contact</Link></li>
        </ul>
        <img src={lightIcon} />
      </div>
    </nav>
    
    <div id="detail">
      <Outlet />
    </div>
    <Footer/>
  </>
  );
}

export default Navigation;
