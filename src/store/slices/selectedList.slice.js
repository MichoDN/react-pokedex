import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCurrentPage } from './currentPage.slice';

export const selectedListSlice = createSlice({
    name: 'selectedList',
    initialState: [],
    reducers: {
        setSelectedList: (state, actions) => actions.payload
    }
})

export const getPokemonsThunk = (url, searchType, browserInput) => (dispatch) => {
    //Set pagination in page one
    dispatch(setCurrentPage(1));
    axios.get(`${url}`)
        .then(res => {
            switch (searchType) {
                case "pokeType":
                    dispatch(setSelectedList(res.data.pokemon))
                    break;

                default:
                    dispatch(setSelectedList(res.data.results))
                    break;
            }
        })

}

export const { setSelectedList } = selectedListSlice.actions;

export default selectedListSlice.reducer;