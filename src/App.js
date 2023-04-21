import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ConsultaLibros from "./components/ConsultaLibros/ConsultaLibros";
import SolicitarLibro from "./components/SolicitarLibro/SolicitarLibro";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/consultarlibro" element={<ConsultaLibros />} />
          <Route path="/solicitarlibro" element={<SolicitarLibro />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
