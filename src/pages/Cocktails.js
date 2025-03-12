import Header from "../components/Header/Header";
import classes from "../components/Header/Header.module.css";
import LeftContainer from "../components/Container/LeftContainer";
import RightContainer from "../components/Container/RightContainer";
import PageContainer from "../components/Container/PageContainer";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/cocktails")
      .then((res) => res.json())
      .then((data) => setCocktails(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  const renderVinsByCategory = (subcategory) => {
    return cocktails
      .filter((cocktails) => cocktails.subcategory === subcategory)
      .map((cocktails) => (
        <Card
          key={cocktails.title}
          id={cocktails.id}
          title={cocktails.title}
          image={cocktails.image}
          pays={cocktails.pays}
          annee={cocktails.annee}
          degre={cocktails.degre}
          description={cocktails.description}
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
            title={"Cocktails"}
          />
        </LeftContainer>
        <RightContainer>
          <div className={classes.navSubCategory}>
            <ul>
              <li>
                <a href="#cocktails-classique">Classique</a>
              </li>
              <li>
                <a href="#cocktails-short-drinks">Short Drinks</a>
              </li>
              <li>
                <a href="#cocktails-long-drinks">Long Drinks</a>
              </li>
              <li>
                <a href="#cocktails-sans-alcool">Sans Alcool</a>
              </li>
            </ul>
          </div>

          <div className={classes.content}>
            <section id="cocktails-classique">
              <h4>Cocktails Classique</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("cocktails-classique")}
              </div>
            </section>
            <section id="cocktails-short-drinks">
              <h4>Cocktails Short Drinks</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("cocktails-short-drinks")}
              </div>
            </section>
            <section id="cocktails-long-drinks">
              <h4>Cocktails Long Drinks</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("cocktails-long-drinks")}
              </div>
            </section>
            <section id="cocktails-sans-alcool">
              <h4>Cocktails Sans Alcool</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("cocktails-sans-alcool")}
              </div>
            </section>
          </div>
        </RightContainer>
      </PageContainer>
    </>
  );
};

export default Cocktails;
