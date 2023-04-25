import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ConsultaLibros from "./components/ConsultaLibros/ConsultaLibros";
import SolicitarLibro from "./components/SolicitarLibro/SolicitarLibro";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginAdmin/Login";

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
        {/*  */}
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
