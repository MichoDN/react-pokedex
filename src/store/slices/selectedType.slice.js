import { createSlice } from '@reduxjs/toolkit';
import { setCurrentSearch } from './currentSearch.slice';
import { getPokemonsThunk } from './selectedList.slice';
export const selectedTypeSlice = createSlice({
    name: 'selectedType',
    initialState: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154',
    reducers: {
        selectType: (state, actions) => actions.payload,
        allPokemonsType: () => 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
    }
})

export const selectedTypeThunk = (searchedValue, browserInput) => (dispatch) => {
    dispatch(selectType(searchedValue))
    switch (searchedValue) {
        case 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154':
            dispatch(getPokemonsThunk(searchedValue, "all"))
            break;

        default:
            dispatch(getPokemonsThunk(searchedValue, "pokeType"))
            break;
    }

}

export const { selectType, allPokemonsType } = selectedTypeSlice.actions;

export default selectedTypeSlice.reducer;
