import classes from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import imageFooter from "../../images/footer.jpg";

const Footer = () => {
  const linkActive = ({ isActive }) => {
    return isActive ? "active" : "";
  };

  return (
    <div className={classes.footer}>
      <div className={classes.footerInfos}>
        <div className={classes.logo}>
          <NavLink to="/" className={linkActive}>
            L'Alcoollection
          </NavLink>
          <p>By Mathilde Schmid</p>
        </div>

        <div className={classes.page}>
          <p>Pages</p>
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
    </div>
  );
};

export default Footer;
