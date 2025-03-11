import classes from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vins from "./pages/Vins";
import Whisky from "./pages/Whisky";
import Rhum from "./pages/Rhum";
import Biere from "./pages/Biere";
import Liqueurs from "./pages/Liqueurs";
import Cocktails from "./pages/Cocktails";

function App() {
  return (
    <div className={classes.app}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/vins" element={<Vins />}></Route>
        <Route path="/whisky" element={<Whisky />}></Route>
        <Route path="/rhum" element={<Rhum />}></Route>
        <Route path="/biere" element={<Biere />}></Route>
        <Route path="/liqueurs" element={<Liqueurs />}></Route>
        <Route path="/cocktails" element={<Cocktails />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
