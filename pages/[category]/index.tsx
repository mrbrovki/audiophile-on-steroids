import React from 'react';
import type { NextPage, GetStaticProps, GetStaticPaths} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { categories } from '../../public/categories';
import Main from '../../components/Main';
import Image from 'next/image';
// styles
import styles from '../../styles/css/category.module.css';
import SeeProduct from '../../components/SeeProduct';

//types
interface ContextParams extends ParsedUrlQuery{
  category: string;
};

interface CategoryProduct{
  slug: string;
  name: string;
  image: {desktop: string;};
  description: string;
  category: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = categories.map(category =>{
    return{params: {category: category}};
  });
  return{
    paths,
    fallback: false
  };
};

export const getStaticProps:GetStaticProps = async (context) => {
  const res = await fetch('https://api.jsonbin.io/b/623e21e2a703bb674934a6cb');
  const data:Array<ContextParams> = await res.json();
  const {category} = context.params as ContextParams;
  const filtData = data.filter(product => product.category === category);
  return {props: {data: filtData, category: category}};
};

const Category:NextPage<{data: CategoryProduct[]} & ContextParams> = ({data, category}) => {
  const products = data.map(product =>{
    return(
      <div className={styles.grid_container}>
            <div className={styles.image}>
              <Image src={product.image.desktop} layout='fill' objectFit='contain'/>
            </div>
            <div className={styles.info}>
              <p className={styles.new_product}>new product</p>
              <h2 className={styles.name}>{product.name}</h2>
              <p className={styles.description}>{product.description}</p>
              <SeeProduct href={'/headphones/xx59-headphones'} bg={'orange'}/>
            </div>
      </div>
    );
  });
  return (
    <>
      <h1 className={styles.category_h1}>
        {category}
      </h1>
      <Main>
        <section>
          {products}
        </section>
      </Main>
    </>
  );
};

export default Category;