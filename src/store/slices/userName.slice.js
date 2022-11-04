import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
    name: 'username',
    initialState: "",
    reducers: {
        setName: (state, action) => {
            return action.payload
        }
    }
})

export const { setName } = userNameSlice.actions;

export default userNameSlice.reducer;
