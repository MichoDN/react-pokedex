import { createSlice } from '@reduxjs/toolkit';

export const filteredPokemonsSlice = createSlice({
  name: 'filteredPokemons',
  initialState: [],
  reducers: {
    setFilteredPokemons(state, actions) {
      const filter = actions.payload.inputValue;
      const pokemons = actions.payload.pokemons;
      if (filter) {
        const filteredPokemons = pokemons.filter(pokemon => pokemon.includes(filter))
        return filteredPokemons
      } else {
        return pokemons
      }
    }
  }
})

export const { setFilteredPokemons } = filteredPokemonsSlice.actions;

export default filteredPokemonsSlice.reducer;
