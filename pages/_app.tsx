import {createContext, Dispatch, useReducer } from 'react';
import Layout from './layout';
import type { AppProps } from 'next/app';
import '../styles/css/globals.css';

type Action = 
| {type: "TOTAL", value: number}
| {type: "PRODUCTS", value: Products};

interface Products{
  index: number;
  amount: number;
};

interface State{
  products: Array<Products>;
  total: number;
};

export const Context = createContext<{state: State, dispatch: Dispatch<Action>} | null>(null);
  
  
function MyApp({ Component, pageProps }: AppProps) {
  const initState: State= {
    products: [],
    total: 0
  };
  const reducer = <T extends State>(state: T, action: Action): T =>{
    switch(action.type){
      case "TOTAL":
        return {...state, total: state.total};
      case "PRODUCTS":
        return {...state, products: [...state.products, action.value]};
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
}

export default MyApp;
