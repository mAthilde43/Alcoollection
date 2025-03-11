import classes from "./Container.module.css";

const RightContainer = ({ children }) => {
  return <div className={classes.rightContainer}>{children}</div>;
};

export default RightContainer;
