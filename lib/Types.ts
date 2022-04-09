import { ParsedUrlQuery } from 'querystring';

export interface CategoryContext extends ParsedUrlQuery{
  category: string;
};

export interface ProductContext extends CategoryContext{
  slug: string;
  category: string;
};

export interface CategoryProduct{
  id: number;
  slug: string;
  name: string;
  image: {desktop: string;};
  description: string;
  category: string;
};

export interface ProductProps{
  name: string;
  image: {desktop: string};
  description: string;
  new: boolean;
  price: number;
  features: string;
  includes: {quantity: number, item: string}[];
  gallery:{
    first:{
      desktop: string;
    },
    second:{
      desktop: string;
    }
    third:{
      desktop: string;
    }
  };
  others:{
    slug: string;
    name: string;
    image:{desktop: string};
  }[];
};

export interface CartProps{
  toggleCart: () => void;
  closeCart: () => void;
  showCart: boolean;
};

export type Action = 
| {type: "TOTAL", payload: number}
| {type: "PRODUCTS", payload: Products}
| {type: "OVERLAY", payload: boolean}
| {type: "NAVBAR", payload: string}
| {type: "CART", payload: string}

export interface Products{
  index: number;
  amount: number;
};

export interface State{
  products: Array<Products>;
  total: number;
  isOverlay: boolean;
  navBarVisiblity: string;
  cartItemsVisibility: string;
};

export interface NavProps{
  navType: string;
}