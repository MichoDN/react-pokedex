import { HashRouter, Routes, Route, } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PokemonDetail from "./pages/PokemonDetails";
import Pokemons from "./pages/Pokemons";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:name" element={<PokemonDetail />} />
        </Route>
      </Routes>
      <BottomNav/>
    </HashRouter>
  )
}

export default App
