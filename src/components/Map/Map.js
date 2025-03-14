import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import classes from "./Map.module.css";
import RegionCard from "../RegionCard/RegionCard";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const REGIONS = [
  {
    name: "Auvergne-Rhône-Alpes",
    lat: 45.76,
    lng: 4.8357,
    image:
      "https://www.visitfrenchwine.com/sites/default/files/vallee-du-rhone-photo-christophe-grilhe_0.jpg",
  },
  {
    name: "Bourgogne-Franche-Compté",
    lat: 47.0522,
    lng: 4.3832,
    image:
      "https://www.myluxurytravel.fr/wp-content/uploads/2020/09/escapade-vignobles-bourgogne.jpg",
  },
  {
    name: "Bretagne",
    lat: 49.1829,
    lng: -0.3707,
    image:
      "https://www.falaise-suissenormande.com/wp-content/uploads/2022/04/Vignoble_Arpents_du_Soleil-1.jpg",
  },
  {
    name: "Centre-Val de Loire",
    lat: 47.3215,
    lng: 0.7074,
    image:
      "https://www.enpaysdelaloire.com/sites/default/files/styles/slide_640x360/public/mediatheque/images/sem_0020747_MD-petit.jpg?h=e5aec6c8&itok=EajqtDwn",
  },
  {
    name: "Corse",
    lat: 41.9192,
    lng: 8.7386,
    image: "https://cache.larvf.com/data/photo/w1000_ci/5i/vin-cap-corse.jpg",
  },
  {
    name: "Grand-Est",
    lat: 48.3182,
    lng: 7.4416,
    image:
      "https://b1666302.smushcdn.com/1666302/wp-content/uploads/2019/08/Principale-1.jpg?lossy=0&strip=1&webp=1",
  },
  {
    name: "Ile de France",
    lat: 48.8566,
    lng: 2.3522,
    image:
      "https://www.voyageursdumonde.fr/voyage-sur-mesure/magazine-voyage/ShowPhoto/1349/0",
  },
  {
    name: "Nouvelle Aquitaine",
    lat: 45.7,
    lng: -0.3333,
    image:
      "https://arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/SNVEAARNOHWRFP52CIDERN2PMM.jpg",
  },
  {
    name: "Occitanie",
    lat: 43.395999,
    lng: 3.096,
    image:
      "https://dico-du-vin.com/wp-content/uploads/2015/09/languedoc-vignoble_du_chateau_hospitalet_narbonne_aude_aoc_languedoc_la_clape-1.jpg",
  },
  {
    name: "Provence-Alpes-Côte d'Azur",
    lat: 43.2965,
    lng: 5.3698,
    image: "https://www.peretranquille.com/resources/vignoble-provence.jpg",
  },
];

const MapComponent = ({ selectedRegion }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedRegion) {
      const regionData = REGIONS.find(
        (region) => region.name === selectedRegion
      );
      if (regionData) {
        map.setView([regionData.lat, regionData.lng], 10); // Zoom sur la région
      }
    }
  }, [selectedRegion, map]);

  return null;
};

const Map = () => {
  const [producers, setProducers] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [resetMap, setResetMap] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:5001/producers")
      .then((response) => response.json())
      .then((data) => setProducers(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  //   const filteredProducers = selectedRegion
  //     ? producers.filter((producer) => producer.region === selectedRegion)
  //     : [];
  const filteredProducers = producers.filter((producer) => {
    const matchesRegion = selectedRegion
      ? producer.region === selectedRegion
      : true;
    const matchesCategory = selectedCategory
      ? producer.category === selectedCategory
      : true;
    return matchesRegion && matchesCategory;
  });

  const handleBackToRegions = () => {
    setSelectedRegion(null);
    setResetMap(true);
  };

  const ResetMapView = ({ reset }) => {
    const map = useMap();

    useEffect(() => {
      if (reset) {
        map.flyTo([47, 2], 6);
      }
    }, [reset, map]);

    return null;
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Carte des producteurs</h1>
        <p>
          Explorez les régions viticoles et découvrez les producteurs locaux.
        </p>
      </div>
      <div className={classes.filterContainer}>
        <button onClick={() => setSelectedCategory(null)}>Tout</button>
        <button onClick={() => setSelectedCategory("cave")}>
          Caves à Vins
        </button>
        <button onClick={() => setSelectedCategory("brasserie")}>
          Brasserie
        </button>
        <button onClick={() => setSelectedCategory("distillerie")}>
          Distillerie
        </button>
      </div>
      <div className={classes.mapAndInfo}>
        <div className={classes.mapContainer}>
          <MapContainer
            center={[47, 2]}
            zoom={6}
            className={classes.map}
            whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <ResetMapView reset={resetMap} />
            <MapComponent selectedRegion={selectedRegion} />
            {filteredProducers.map((producer) => (
              <Marker
                key={producer.id}
                position={[producer.lat, producer.lng]}
                icon={customIcon}
              >
                <Popup>{producer.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className={classes.infoContainer}>
          {!selectedRegion ? (
            <div className={classes.regionGrid}>
              {REGIONS.map((region) => (
                <RegionCard
                  key={region.name}
                  name={region.name}
                  image={region.image}
                  onClick={setSelectedRegion}
                />
              ))}
            </div>
          ) : (
            <>
              <button
                onClick={handleBackToRegions}
                className={classes.backButton}
              >
                Retour aux régions
              </button>
              {filteredProducers.map((producer) => (
                <div key={producer.id} className={classes.producerCard}>
                  <img
                    src={producer.image}
                    alt={producer.name}
                    className={classes.producerImage}
                  />
                  <div>
                    <h3 className={classes.producerName}>{producer.name}</h3>
                    <p className={classes.producerAddress}>
                      {producer.address}
                    </p>
                    <p>
                      {producer.site && (
                        <a
                          href={producer.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.producerLink}
                        >
                          Visiter le site
                        </a>
                      )}
                    </p>
                    <span className={classes.producerCategory}>
                      {producer.category}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Map;
