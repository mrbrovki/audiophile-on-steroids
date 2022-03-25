import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { ParsedUrlQuery } from 'querystring';

interface ContextParams extends ParsedUrlQuery{
  slug: string;
  category: string;
};

export const getStaticPaths:GetStaticPaths = async () =>{
 const res = await fetch('https://api.jsonbin.io/b/623e21e2a703bb674934a6cb');
 const data = await res.json() as ContextParams[];
 const paths = data.map(product =>{
  return{
    params: {slug: product.slug, category: product.category}
  }
 });
 return{
   paths,
   fallback:false
 }
};

export const getStaticProps:GetStaticProps= async (context) =>{
 const {slug} = context.params as ContextParams;
 return {props: {slug}};
};

const Product:NextPage= () => {
console.log('trigger')
  return (
    <div>Product</div>
  )
}

export default Product