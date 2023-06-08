import { configureStore } from '@reduxjs/toolkit'

import pokemonsSlice from './slices/pokemons.slice'
import filteredPokemonsSlice from './slices/filteredPokemons.slice'
import paginationSlice from './slices/pokemonPagination.slice'
import userSlice from './slices/user.slice'

export default configureStore({
  reducer: {
    pokemons: pokemonsSlice,
    filteredPokemons: filteredPokemonsSlice,
    pagination: paginationSlice,
    user: userSlice
  }
})
