import { createSlice } from '@reduxjs/toolkit';

export const currentPageSlice = createSlice({
    name: 'currentPage',
    initialState: 1,
    reducers: {
        setCurrentPage: (state, actions) => actions.payload
    }
})

export const { setCurrentPage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
