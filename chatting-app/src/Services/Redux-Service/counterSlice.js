// store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    loginPopup: false,
    signupPopup: false,
    friend: null, // New state for selected friend
  },
  reducers: {
    setLogin: (state, action) => {
      state.loginPopup = action.payload;
    },
    setSignup: (state, action) => {
      state.signupPopup = action.payload;
    },
    setFriend: (state, action) => {
      state.friend = action.payload;
    },
    clearFriend: (state) => {
      state.friend = null;
    },
  },
});

export const { setLogin, setSignup, setFriend, clearFriend } = counterSlice.actions;
export default counterSlice.reducer;
