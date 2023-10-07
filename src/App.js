import { Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Accueil from "./pages/Accueil/Accueil";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";
import Error from "./pages/Error/Error";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/logements/:logementID" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
