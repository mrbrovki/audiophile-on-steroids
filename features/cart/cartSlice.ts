import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartInitState, Product } from "../../lib/Types";

const initialState:CartInitState = {
 products: [],
 total: {amount: 0, totalPrice: 0},
 isOrderComplete: false,
 isCartVisible: false,
};

const cartSlice = createSlice({
 name: 'cart',
 initialState,
 reducers: {
  addProduct: (state, action:PayloadAction<Product>) => {
   const {payload} = action;
   const matchedProduct = state.products.find(product => product.id === payload.id);
   if(matchedProduct){
    matchedProduct.amount += payload.amount;
   }else{
    state.products.push(payload);
   }
  },
  setProductAmount: (state, action:PayloadAction<{id: number, amount: number}>) => {
   const {payload} = action;
   const product = state.products.find(product => product.id === payload.id) as Product;
   product.amount = payload.amount;
  },
  removeAllProducts: (state) => {
   state.products = [];
  },
  removeProduct: (state, action: PayloadAction<number>) => {
   const productId = action.payload;
   state.products = state.products.filter(product => product.id !== productId);
  },
  submitOrder: (state, action: PayloadAction<boolean>) => {
   state.isOrderComplete = action.payload;
  },
  calculateTotal: (state) => {
   state.total = state.products.reduce((total, {amount, price})=>{
   total.amount += amount;
   total.totalPrice += amount * price;
   return total;
   },{amount: 0, totalPrice: 0});
  },
  setCartVisibility: (state, action: PayloadAction<boolean>) => {
   const {payload} = action;
   state.isCartVisible = payload;
  }
 }
});

export const {addProduct, calculateTotal, removeAllProducts, submitOrder, removeProduct, setProductAmount, setCartVisibility} = cartSlice.actions
export default cartSlice.reducer;