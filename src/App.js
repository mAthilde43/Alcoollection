import classes from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vins from "./pages/Vins";
import Whisky from "./pages/Whisky";
import Rhum from "./pages/Rhum";
import Bieres from "./pages/Biere";
import Liqueurs from "./pages/Liqueurs";
import Cocktails from "./pages/Cocktails";
import Footer from "./components/Footer/Footer";
import Details from "./pages/Details/Details";

function App() {
  return (
    <div className={classes.app}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/vins" element={<Vins />}></Route>
        <Route path="/whisky" element={<Whisky />}></Route>
        <Route path="/rhum" element={<Rhum />}></Route>
        <Route path="/bieres" element={<Bieres />}></Route>
        <Route path="/liqueurs" element={<Liqueurs />}></Route>
        <Route path="/cocktails" element={<Cocktails />}></Route>
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
