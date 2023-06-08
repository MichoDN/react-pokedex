import { createSlice } from '@reduxjs/toolkit';
import pokeAPI from '../../api/pokeAPI';
import { setFilteredPokemons } from './filteredPokemons.slice';
import axios from 'axios';

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: [],
  reducers: {
    setPokemons(state, actions) {
      const pokemons = actions.payload;
      return pokemons
    },
  }
})

export const getAllPokemonsThunk = () => async dispatch => {
  const res = await pokeAPI
    .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281");
    
  const pokemons = res.data.results;
  const pokemonNames = pokemons.map(pokemon => pokemon.name);
  dispatch(setPokemons(pokemonNames))
  dispatch(setFilteredPokemons({pokemons: pokemonNames}))
}

export const setPokemonsByTypeThunk = (url) => async dispatch => {
  const res = await axios.get(url);
  const pokemons = res.data.pokemon.map(pokemon => pokemon.pokemon.name)
  dispatch(setPokemons(pokemons))
  dispatch(setFilteredPokemons({pokemons}))
}

export const { setPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
