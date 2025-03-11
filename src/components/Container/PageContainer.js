import classes from "./Container.module.css";

const PageContainer = ({ children }) => {
  return <div className={classes.pageContainer}>{children}</div>;
};

export default PageContainer;
