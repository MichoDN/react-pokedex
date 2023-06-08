import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { username: "" },
  reducers: {
    setUsername(state, actions) {
      const username = actions.payload;
      return { ...state, username }
    }
  }
})

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;
