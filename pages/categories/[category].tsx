import React from 'react';
import type { NextPage, GetStaticProps, GetStaticPaths} from 'next';
import { categories } from '../../public/categories';
import { ParsedUrlQuery } from 'querystring';

interface ContextParams extends ParsedUrlQuery{
  category: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = categories.map(ctg =>{
    return{
       params: {category: ctg}
    };
  });
  return{
    paths,
    fallback: false
  };
};

export const getStaticProps:GetStaticProps = async (context) => {
  const {category} = context.params as ContextParams;
  const res = await fetch('https://api.jsonbin.io/b/623b3788a703bb674932d94f');
  const data = await res.json() as Array<{category: string}>;
  const catProducts = data.filter(product => product.category === category);
  return {props: {data: catProducts}}
};

const Category:NextPage<{data:string}> = ({data}) => {
  return (
    <>

    </>
  );
};

export default Category;