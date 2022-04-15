import { Product } from "./Types";

export const dot = (num: number) =>{
 const numStr = String(num);
 const numArr = numStr.split('');
 const newArr = [];
 for(let i = numArr.length - 1; i > 0; i--){
  newArr.unshift(numArr[i])
  if((numArr.length - i) % 3 == 0){
   newArr.unshift('.')
  }
 }
 newArr.unshift(numArr[0]);
 return newArr.join('');
}

export const getAmount = (products: Product[], id: number): number  =>{
 let amount = 0;
 products.forEach(product => {
  if(product.id === id){
   amount = product.amount;
  }
 });
 return amount;
}