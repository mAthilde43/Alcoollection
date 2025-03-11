import classes from "./Container.module.css";

const LeftContainer = ({ children }) => {
  return <div className={classes.leftContainer}>{children}</div>;
};

export default LeftContainer;
