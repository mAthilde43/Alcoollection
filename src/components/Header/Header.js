import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";

const Header = ({ isHome, title, subtitle }) => {
  const linkActive = ({ isActive }) => (isActive ? "active" : "");

  return (
    <Wrapper>
      <div
        className={`${classes.header} ${
          isHome ? classes.homeHeader : classes.pageHeader
        }`}
      >
        <div className={classes.logo}>
          <NavLink to="/" className={linkActive}>
            L'Alcoollection
          </NavLink>
        </div>

        <div className={classes.hero}>
          <h2 className={isHome ? classes.largeTitle : classes.smallTitle}>
            {subtitle}
          </h2>
          <h1 className={isHome ? classes.largeTitle : classes.smallTitle}>
            {title}
          </h1>
          {isHome && (
            <h3>where every sip tells a story of craftsmanship and passion.</h3>
          )}
        </div>

        <div className={classes.navbar}>
          <ul>
            <li>
              <NavLink to="/vins" className={linkActive}>
                Vins
              </NavLink>
            </li>
            <li>
              <NavLink to="/whisky" className={linkActive}>
                Whisky
              </NavLink>
            </li>
            <li>
              <NavLink to="/rhum" className={linkActive}>
                Rhum
              </NavLink>
            </li>
            <li>
              <NavLink to="/biere" className={linkActive}>
                Bière
              </NavLink>
            </li>
            <li>
              <NavLink to="/liqueurs" className={linkActive}>
                Liqueurs
              </NavLink>
            </li>
            <li>
              <NavLink to="/cocktails" className={linkActive}>
                Cocktails
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
