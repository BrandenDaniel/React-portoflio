import { Route, Routes } from "react-router-dom";
import "./assets/js/main.js";
import "./assets/font/stylesheet.css";
import "../src/assets/sass/base.scss";

import Nav from "./component/Nav";
import ScrollToTop from "./component/ScrollToTop";

import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import ProfilePage from "./pages/ProfilePage";

import MyBlindSpots from "./work-pages/my-blind-spots";
import Boxti from "./work-pages/boxti";
import AllWestEngineering from "./work-pages/all-west-engineering";
import AnniePirotta from "./work-pages/annie-pirotta";
import KaderBootCo from "./work-pages/kader-boot-co";
import PerfectCotton from "./work-pages/perfect-cotton";
import PrintStrategyManagement from "./work-pages/print-strategy-management";

function App() {
  return (
    <div className="container">
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my-blind-spots" element={<MyBlindSpots />} />
        <Route path="/boxti" element={<Boxti />} />
        <Route path="/all-west-engineering" element={<AllWestEngineering />} />
        <Route path="/annie-pirotta" element={<AnniePirotta />} />
        <Route path="/kader-boot-co" element={<KaderBootCo />} />
        <Route path="/perfect-cotton" element={<PerfectCotton />} />
        <Route
          path="/print-strategy-management"
          element={<PrintStrategyManagement />}
        />
      </Routes>
    </div>
  );
}

export default App;
