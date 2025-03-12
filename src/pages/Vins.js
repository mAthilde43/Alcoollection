import Header from "../components/Header/Header";
import classes from "../components/Header/Header.module.css";
import LeftContainer from "../components/Container/LeftContainer";
import RightContainer from "../components/Container/RightContainer";
import PageContainer from "../components/Container/PageContainer";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const Vins = () => {
  const [vins, setVins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/vins")
      .then((res) => res.json())
      .then((data) => setVins(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  const renderVinsByCategory = (subcategory) => {
    return vins
      .filter((vin) => vin.subcategory === subcategory)
      .map((vin) => (
        <Card
          key={vin.title}
          id={vin.id}
          title={vin.title}
          image={vin.image}
          pays={vin.pays}
          annee={vin.annee}
          degre={vin.degre}
          description={vin.description}
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
            title={"Vins"}
          />
        </LeftContainer>
        <RightContainer>
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
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("vin-rouge")}
              </div>
            </section>
            <section id="vin-blanc">
              <h4>Vin Blanc</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("vin-blanc")}
              </div>
            </section>
            <section id="vin-rose">
              <h4>Vin Rosé</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("vin-rose")}
              </div>
            </section>
            <section id="vin-effervescent">
              <h4>Vin Effervescent</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("vin-effervescent")}
              </div>
            </section>
          </div>
        </RightContainer>
      </PageContainer>
    </>
  );
};

export default Vins;
