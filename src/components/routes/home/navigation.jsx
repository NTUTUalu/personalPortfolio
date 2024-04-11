import NavigationStyles from "./navigation.module.css";
import lightIcon from "../../../../public/icons8-sun.svg";
import darkIcon from "../../../../public/icons8-code.svg";
import openNav from "../../../../public/x-menu.png";
import closeNav from "../../../../public/menu.png";
import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from '../footer/footer';

function Navigation() {
  // Get the current location using useLocation hook from react-router-dom
  const location = useLocation();

  return (
    <>
      <nav className={NavigationStyles.Navigation}>
        <Link to={'/'}><img src={darkIcon} style={{width:'40px', height:'40px'}} className={NavigationStyles.goingHome}/></Link>
        <div className={NavigationStyles.navLinks}>
          <ul>
            <li>
              <Link to={`about/1`} className={`${NavigationStyles.links} ${location.pathname === '/about/1' ? NavigationStyles.activeLink : ''}`}>About</Link>
            </li>
            <li>
              <Link to={`projects/1`} className={`${NavigationStyles.links} ${location.pathname === '/projects/1' ? NavigationStyles.activeLink : ''}`}>Projects</Link>
            </li>
            <li>
              <Link to={`contact/1`} className={`${NavigationStyles.links} ${location.pathname === '/contact/1' ? NavigationStyles.activeLink : ''}`}>Contact</Link>
            </li>
          </ul>
          <img src={lightIcon} />
        </div>
        <img className={NavigationStyles.openNav} src={openNav}/>
        <img className={NavigationStyles.closeNav} src={closeNav}/>
      </nav>
      
      <div id="detail">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}

export default Navigation;
