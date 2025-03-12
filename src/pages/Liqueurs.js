import Header from "../components/Header/Header";
import classes from "../components/Header/Header.module.css";
import LeftContainer from "../components/Container/LeftContainer";
import RightContainer from "../components/Container/RightContainer";
import PageContainer from "../components/Container/PageContainer";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const Liqueurs = () => {
  const [liqueurs, setLiqueurs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/liqueurs")
      .then((res) => res.json())
      .then((data) => setLiqueurs(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  const renderVinsByCategory = (subcategory) => {
    return liqueurs
      .filter((liqueurs) => liqueurs.subcategory === subcategory)
      .map((liqueurs) => (
        <Card
          key={liqueurs.title}
          id={liqueurs.id}
          title={liqueurs.title}
          image={liqueurs.image}
          pays={liqueurs.pays}
          annee={liqueurs.annee}
          degre={liqueurs.degre}
          description={liqueurs.description}
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
            title={"Liqueurs"}
          />
        </LeftContainer>
        <RightContainer>
          <div className={classes.navSubCategory}>
            <ul>
              <li>
                <a href="#liqueurs-anisees">Anisées</a>
              </li>
              <li>
                <a href="#liqueurs-fruitees">Fruitées</a>
              </li>
              <li>
                <a href="#liqueurs-creme">Crème</a>
              </li>
              <li>
                <a href="#liqueurs-epicees">Épicées</a>
              </li>
            </ul>
          </div>

          <div className={classes.content}>
            <section id="liqueurs-anisees">
              <h4>Liqueurs Anisées</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("liqueurs-anisees")}
              </div>
            </section>
            <section id="liqueurs-fruitees">
              <h4>Liqueurs Fruitées</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("liqueurs-fruitees")}
              </div>
            </section>
            <section id="liqueurs-creme">
              <h4>Liqueurs Crème</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("liqueurs-creme")}
              </div>
            </section>
            <section id="liqueurs-epicees">
              <h4>Liqueurs Épicées</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("liqueurs-epicees")}
              </div>
            </section>
          </div>
        </RightContainer>
      </PageContainer>
    </>
  );
};

export default Liqueurs;
