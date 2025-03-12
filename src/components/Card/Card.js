import { NavLink } from "react-router-dom";
import classes from "./Card.module.css";
const Card = ({ title, image, pays, annee, degre, description, id }) => {
  return (
    <div className={classes.card}>
      <img src={image} alt={title} className={classes.cardImage} />
      <div className={classes.cardContent}>
        <h3>{title}</h3>
        <p>
          {pays} - {annee} - {degre}
        </p>
        <p>{description}</p>
        <NavLink to={`/details/${id}`} className={classes.learnMoreButton}>
          En savoir plus
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
