import './styles.css'
import { useEffect } from "react"

import Home from "./pages/home/Home.jsx"
import Pokedex from "./pages/pokedex/Pokedex.jsx"
import PokemonDetails from "./pages/pokemonDetails/PokemonDetails.jsx"

import { useDispatch, useSelector } from "react-redux"
import { getAllPokemonsThunk } from "./store/slices/pokemons.slice"

import NavBar from "./components/navbar/Navbar.jsx"
import Footer from "./components/footer/Footer.jsx"

import { Route, HashRouter, Routes, Navigate, Outlet } from "react-router-dom"

function Router() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPokemonsThunk());
  }, [])

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokemons" element={<Pokedex />} />
          <Route path="/pokemons/:name" element={<PokemonDetails />} />
        </Route>
      </Routes>
      <Footer />
    </HashRouter>
  )
}

const ProtectedRoutes = () => {
  const { username } = useSelector(state => state.user);
  if (username !== "") {
    return <Outlet />
  } else {
    return < Navigate to={'/'} />
  }
};


export default Router
