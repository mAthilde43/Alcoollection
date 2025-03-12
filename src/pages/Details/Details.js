import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Details.module.css";

const Details = () => {
  const { id } = useParams();
  const [vin, setVin] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/vins/${id}`)
      .then((res) => res.json())
      .then((data) => setVin(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, [id]);

  if (!vin) {
    return <p className={classes.loading}>Chargement...</p>;
  }

  return (
    <div className={classes.detailsContainer}>
      <h2 className={classes.detailsTitle}>{vin.title}</h2>

      <div className={classes.detailsContent}>
        <img className={classes.detailsImage} src={vin.image} alt={vin.title} />

        <div className={classes.detailsText}>
          <p>Pays : {vin.pays}</p>
          <p>Année : {vin.annee}</p>
          <p>Degré : {vin.degre}</p>
          <p>Description : {vin.description}</p>

          <div>
            <p>Prix : {vin.prix} €</p>
            <p>Origine : {vin.origine}</p>
            <p>Distillation : {vin.distillation}</p>
            <p>Accord mets & boissons : {vin.accord}</p>
          </div>
        </div>
      </div>

      <a href="/" className={classes.backButton}>
        Retour
      </a>
    </div>
  );
};

export default Details;
