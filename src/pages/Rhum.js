import Header from "../components/Header/Header";
import classes from "../components/Header/Header.module.css";
import LeftContainer from "../components/Container/LeftContainer";
import RightContainer from "../components/Container/RightContainer";
import PageContainer from "../components/Container/PageContainer";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const Rhum = () => {
  const [rhum, setRhum] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/rhum")
      .then((res) => res.json())
      .then((data) => setRhum(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  const renderVinsByCategory = (subcategory) => {
    return rhum
      .filter((rhum) => rhum.subcategory === subcategory)
      .map((rhum) => (
        <Card
          key={rhum.title}
          id={rhum.id}
          title={rhum.title}
          image={rhum.image}
          pays={rhum.pays}
          annee={rhum.annee}
          degre={rhum.degre}
          description={rhum.description}
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
            title={"Rhum"}
          />
        </LeftContainer>
        <RightContainer>
          <div className={classes.navSubCategory}>
            <ul>
              <li>
                <a href="#rhum-blanc">Blanc</a>
              </li>
              <li>
                <a href="#rhum-ambre">Ambré</a>
              </li>
              <li>
                <a href="#rhum-vieux">Vieux</a>
              </li>
              <li>
                <a href="#rhum-arrange">Arrangé</a>
              </li>
            </ul>
          </div>

          <div className={classes.content}>
            <section id="rhum-blanc">
              <h4>Rhum Blanc</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("rhum-blanc")}
              </div>
            </section>
            <section id="rhum-ambre">
              <h4>Rhum Ambré</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("rhum-ambre")}
              </div>
            </section>
            <section id="rhum-vieux">
              <h4>Rhum Vieux</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("rhum-vieux")}
              </div>
            </section>
            <section id="rhum-arrange">
              <h4>Rhum Arrangé</h4>
              <div className={classes.cardsContainer}>
                {renderVinsByCategory("rhum-arrange")}
              </div>
            </section>
          </div>
        </RightContainer>
      </PageContainer>
    </>
  );
};

export default Rhum;
