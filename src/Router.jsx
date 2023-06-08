import { useEffect } from "react"

import Home from "./pages/Home"
import Pokemons from "./pages/Pokemons"
import PokemonDetails from "./pages/PokemonDetails"

import { useDispatch, useSelector } from "react-redux"
import { getAllPokemonsThunk } from "./store/slices/pokemons.slice"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

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
          <Route path="/pokemons" element={<Pokemons />} />
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
