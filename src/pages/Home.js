import Header from "../components/Header/Header";
import Map from "../components/Map/Map";

const Home = () => {
  return (
    <>
      <Header isHome={true} title="Tradition" subtitle="The essence of" />
      <Map />
    </>
  );
};

export default Home;
