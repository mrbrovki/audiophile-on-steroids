import {createContext, Dispatch, useReducer } from 'react';
//  components
import Layout from '../components/Layout';

//  types
import {Action, State} from '../lib/Types';
import type { AppProps } from 'next/app';

//  styles
import '../styles/css/globals.css';

const initState: State= {
  products: [],
  total: {amount: 0, totalPrice: 0},
  isOverlay: false,
  navBarVisiblity: 'hidden',
  isCartVisible: false
};

export const Context = createContext<{state: State, dispatch: Dispatch<Action>}>({state: initState, dispatch: () => {}});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const reducer = <T extends State>(state: T, action: Action): T =>{
    const {type, payload} = action;
    switch(type){
      case "TOTAL":
        return {...state, total: {amount: payload.amount, totalPrice: payload.totalPrice}};
      case "ADD_PRODUCT":
        let isMatch = false;
        const newArr = state.products.map(product =>{
          if(product.id === payload.id){
            isMatch = true;
            return {...product, amount: product.amount + payload.amount};
          }
          else{
            return product;
          }
        });
        return isMatch? {...state, products: newArr} : {...state, products: [...state.products, payload]};
      case 'SET_PRODUCT_AMOUNT':
        const newProducts = state.products.map(product =>{
          if(product.id === payload.id){
            return {...product, amount: payload.amount};
          }
          else{
            return product;
          }
        });
        return {...state, products: newProducts};
      case "REMOVE_ALL_PRODUCTS":
        return {...state, products: payload};
      case 'OVERLAY':
        return {...state, isOverlay: payload};
      case "NAVBAR":
        return {...state, navBarVisiblity: payload};
      case "CART":
        return{...state, isCartVisible: payload};
    };
  };
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Context.Provider value={{state, dispatch}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context.Provider>
  );
};

export default MyApp;
