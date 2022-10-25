import { createSlice } from "@reduxjs/toolkit";
// types
import { NavInitState } from "../../lib/Types";

const initialState:NavInitState = {
 navBarVisiblity: 'hidden',
};

const navSlice = createSlice({
 name: 'navigation',
 initialState,
 reducers: {
  setNavBarVisibility: (state, {payload}) => {
   state.navBarVisiblity = payload;
  }, 
 }
});

export const {setNavBarVisibility} = navSlice.actions;
export default navSlice.reducer;