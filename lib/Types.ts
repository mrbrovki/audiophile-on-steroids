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
  new: boolean;
};

export interface ProductProps{
  id: number;
  name: string;
  image: {desktop: string, mobile: string};
  description: string;
  new: boolean;
  price: number;
  features: string;
  includes: InTheBox;
  gallery: ProductGallery;
  others: Others;
};

export interface CartProductProps{
  id: number;
  name: string;
  image: {mobile: string};
  price: number;
};

export interface ProductGallery{
  first:{
    desktop: string;
  };
  second:{
    desktop: string;
  };
  third:{
    desktop: string;
  };
};

export type InTheBox = {quantity: number, item: string}[];

export type Others = {
  category: string;
  slug: string;
  name: string;
  image:{desktop: string};
}[];

export interface CartProps{
  toggleCart: () => void;
  closeCart: () => void;
  showCart: boolean;
};

export type Action = 
| {type: "TOTAL", payload: {amount: number, totalPrice: number}}
| {type: "ADD_PRODUCT", payload: Product}
| {type: "SET_PRODUCT_AMOUNT", payload: {amount: number, id: number}}
| {type: 'REMOVE_ALL_PRODUCTS', payload: []}
| {type: "OVERLAY", payload: boolean}
| {type: "NAVBAR", payload: string}
| {type: "CART", payload: boolean}
| {type: "SUBMIT_ORDER", payload: boolean}


export interface Product{
  id: number;
  name: string;
  amount: number;
  price: number;
  image: string;
};

export interface NavProps{
  navType: string;
};

export type HeroType = 'home' | 'category';

export interface CounterProps{
  addToCart?: (amount: number) => void;
  id: number;
  type:string;
};

export interface MainProps{
  children: React.ReactNode;
  marginTop: string;
  backgroundColor: string;
};

export interface PaymentInputRef{
  e_money: HTMLInputElement | null;
  cash: HTMLInputElement | null;
};

export interface CartInitState{
  products: Array<Product>;
  total: {amount: number, totalPrice: number};
  isCartVisible: boolean;
  isOrderComplete: boolean;
};

export interface OverlayInitState{
  isOverlay: boolean;
};

export interface NavInitState{
  navBarVisiblity: 'hidden' | 'shown';
}