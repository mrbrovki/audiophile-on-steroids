import {createContext, Dispatch, useReducer } from 'react';
import type { AppProps } from 'next/app';
//  components
import Layout from '../components/Layout';

//  types
import {Action, State} from '../lib/Types';

//  styles
import '../styles/css/globals.css';


const initState: State= {
  products: [],
  total: 0,
  isOverlay: false,
  navBarVisiblity: 'hidden',
  cartItemsVisibility: 'hidden'
};

export const Context = createContext<{state: State, dispatch: Dispatch<Action>}>({state: initState, dispatch: () => {}});

const MyApp = ({ Component, pageProps }: AppProps) => {
  
  const reducer = <T extends State>(state: T, action: Action): T =>{
    const {type, payload} = action;
    switch(type){
      case "TOTAL":
        return {...state, total: state.total};
      case "PRODUCTS":
        return {...state, products: [...state.products, payload]};
      case 'OVERLAY':
        console.log('trigger')
        return {...state, isOverlay: payload};
      case "NAVBAR":
        return {...state, navBarVisiblity: payload};
      case "CART":
        return{...state, cartItemsVisibility: payload};
    }
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
