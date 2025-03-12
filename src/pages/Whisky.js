import Header from "../components/Header/Header";
import classes from "../components/Header/Header.module.css";
import LeftContainer from "../components/Container/LeftContainer";
import RightContainer from "../components/Container/RightContainer";
import PageContainer from "../components/Container/PageContainer";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const Whisky = () => {
  const [whisky, setWhisky] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/whisky")
      .then((res) => res.json())
      .then((data) => setWhisky(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  const renderVinsByCategory = (subcategory) => {
    return whisky
      .filter((whisky) => whisky.subcategory === subcategory)
      .map((whisky) => (
        <Card
          key={whisky.title}
          id={whisky.id}
          title={whisky.title}
          image={whisky.image}
          pays={whisky.pays}
          annee={whisky.annee}
          degre={whisky.degre}
          description={whisky.description}
        />
      ));
  };

  return (
    <>
      <PageContainer>
        <LeftContainer>
          <Header
            isHome={false}
            subtitle={"Les meilleures sélections de"}
            title={"Whysky"}
          />
        </LeftContainer>
        <RightContainer>
          <div className={classes.navSubCategory}>
            <ul>
              <li>
                <a href="#whisky-single-malt">Single Malt</a>
              </li>
              <li>
                <a href="#whisky-blended">Blended</a>
              </li>
              <li>
                <a href="#whisky-bourbon">Bourbon</a>
              </li>
              <li>
                <a href="#whisky-rye">Rye</a>
              </li>
            </ul>
          </div>

          <div className={classes.content}>
            <section id="whisky-single-malt">
              <h4>Single Malt</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("whisky-single-malt")}
              </div>
            </section>
            <section id="whisky-blended">
              <h4>Blended</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("whisky-blended")}
              </div>
            </section>
            <section id="whisky-bourbon">
              <h4>Bourbon</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("whisky-bourbon")}
              </div>
            </section>
            <section id="whisky-rye">
              <h4>Rye</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("whisky-rye")}
              </div>
            </section>
          </div>
        </RightContainer>
      </PageContainer>
    </>
  );
};

export default Whisky;
