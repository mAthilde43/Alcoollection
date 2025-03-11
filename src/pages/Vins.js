import Header from "../components/Header/Header";
import classes from "../components/Header/Header.module.css";

const Vins = () => {
  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.leftContainer}>
          <Header
            isHome={false}
            subtitle={"Les meilleurs sélections de"}
            title={"Vins"}
          />
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.navSubCategory}>
            <ul>
              <li>
                <a href="#vin-rouge">Rouge</a>
              </li>
              <li>
                <a href="#vin-blanc">Blanc</a>
              </li>
              <li>
                <a href="#vin-rose">Rosé</a>
              </li>
              <li>
                <a href="#vin-effervescent">Effervescent</a>
              </li>
            </ul>
          </div>

          <div className={classes.content}>
            <section id="vin-rouge">
              <h4>Vin Rouge</h4>
            </section>
            <section id="vin-blanc">
              <h4>Vin Blanc</h4>
            </section>
            <section id="vin-rose">
              <h4>Vin Rosé</h4>
            </section>
            <section id="vin-effervescent">
              <h4>Vin Effervescent</h4>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default Vins;
