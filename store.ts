import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice';
import overlayReducer from './features/overlay/overlaySlice';
import navReducer from './features/navigation/navSlice';

export const store = configureStore({
 reducer: {
  cart: cartReducer,
  overlay: overlayReducer,
  navigation: navReducer,
 },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;