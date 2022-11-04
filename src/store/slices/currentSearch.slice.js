import { createSlice } from '@reduxjs/toolkit';

export const currentSearchSlice = createSlice({
    name: 'currentSearch',
    initialState: '',
    reducers: {
        setCurrentSearch: (state, actions) => actions.payload
    }
})

export const { setCurrentSearch } = currentSearchSlice.actions;

export default currentSearchSlice.reducer;
