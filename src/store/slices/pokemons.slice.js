import { createSlice } from '@reduxjs/toolkit';
import { setFilteredPokemons } from './filteredPokemons.slice';

import axios from 'axios';
import pokeAPI from '../../api/pokeAPI';

import PokemonList from '../../models/PokemonList.models';

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

  const pokemonList = new PokemonList(res);
  
  dispatch(setPokemons(pokemonList));
  dispatch(setFilteredPokemons({ pokemons: pokemonList }));
}

export const setPokemonsByTypeThunk = (url) => async dispatch => {
  const res = await axios.get(url);
  console.log(url)
  const pokemons = res.data.pokemon.map(pokemon => pokemon.pokemon.name)
  dispatch(setPokemons(pokemons));
  dispatch(setFilteredPokemons({ pokemons }));
}

export const { setPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
