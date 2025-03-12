import Header from "../components/Header/Header";
import classes from "../components/Header/Header.module.css";
import LeftContainer from "../components/Container/LeftContainer";
import RightContainer from "../components/Container/RightContainer";
import PageContainer from "../components/Container/PageContainer";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const Bieres = () => {
  const [biere, setBiere] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/bieres")
      .then((res) => res.json())
      .then((data) => setBiere(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  const renderVinsByCategory = (subcategory) => {
    return biere
      .filter((biere) => biere.subcategory === subcategory)
      .map((biere) => (
        <Card
          key={biere.title}
          id={biere.id}
          title={biere.title}
          image={biere.image}
          pays={biere.pays}
          annee={biere.annee}
          degre={biere.degre}
          description={biere.description}
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
            title={"Bières"}
          />
        </LeftContainer>
        <RightContainer>
          <div className={classes.navSubCategory}>
            <ul>
              <li>
                <a href="#biere-blonde">Blonde</a>
              </li>
              <li>
                <a href="#biere-brune">Brune</a>
              </li>
              <li>
                <a href="#biere-ambre">Ambré</a>
              </li>
              <li>
                <a href="#biere-ipa">IPA</a>
              </li>
            </ul>
          </div>

          <div className={classes.content}>
            <section id="biere-blonde">
              <h4>Bière Blonde</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("biere-blonde")}
              </div>
            </section>
            <section id="biere-brune">
              <h4>Bière Brune</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("biere-brune")}
              </div>
            </section>
            <section id="biere-ambre">
              <h4>Bière Ambré</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("biere-ambre")}
              </div>
            </section>
            <section id="biere-ipa">
              <h4>Bière IPA</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("biere-ipa")}
              </div>
            </section>
          </div>
        </RightContainer>
      </PageContainer>
    </>
  );
};

export default Bieres;
