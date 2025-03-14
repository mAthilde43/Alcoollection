import React from "react";
import classes from "./RegionCard.module.css";

const RegionCard = ({ name, image, onClick }) => {
  return (
    <div className={classes.regionCard} onClick={() => onClick(name)}>
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${image})` }}
      >
        <h3 className={classes.regionName}>{name}</h3>
      </div>
    </div>
  );
};

export default RegionCard;
