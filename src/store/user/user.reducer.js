import { createSlice } from '@reduxjs/toolkit';


const INITIAL_STATE = {
  currentUser: null,
  test: { a: 1 },
};

//create reducer, actions and their types
export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      //generate new state object with new changes
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;


