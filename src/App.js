import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import { AppRouter } from "./components/Router/AppRouter";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
