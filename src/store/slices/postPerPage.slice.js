import { createSlice } from '@reduxjs/toolkit';

export const postPerPageSlice = createSlice({
    name: 'postPerPage',
    initialState: 12,
    reducers: {
        setPostPerPage: (state, actions) => actions.payload 
    }
})

export const { setPostPerPage } = postPerPageSlice.actions;

export default postPerPageSlice.reducer;
