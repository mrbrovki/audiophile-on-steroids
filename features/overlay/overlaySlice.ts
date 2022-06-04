import { createSlice } from "@reduxjs/toolkit";
// types
import { OverlayInitState } from "../../lib/Types";

const initialState:OverlayInitState = {
 isOverlay: false,
};

const overlaySlice = createSlice({
 name: 'overlay',
 initialState,
 reducers: {
  setOverlayVisibility: (state,{payload}) =>{
   state.isOverlay = payload;
  },
 }
});

export const {setOverlayVisibility} = overlaySlice.actions;
export default overlaySlice.reducer;