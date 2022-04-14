import type { NextPage, GetStaticProps, GetStaticPaths} from 'next';
import Image from 'next/image';
import React from 'react';

// types
import {CategoryContext, CategoryProduct} from '../../lib/Types';

//  components 
import { categories } from '../../public/categories';
import Main from '../../components/Layout/Main';
import Hero from '../../components/Hero';
import SeeProduct from '../../components/SeeProduct';

//  styles
import styles from '../../styles/css/category.module.css';



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
  const {category} = context.params as CategoryContext;
  const res = await fetch(`https://my-json-server.typicode.com/mrbrovki/demo/${category}`);
  const data = await res.json();
  return {props: {data}};
};



const Category:NextPage<{data: CategoryProduct[]}> = ({data}) => {
  const products = data.map(product =>{
    return(
      <div className={styles.grid_container} key={product.id}>
            <div className={styles.image}>
              <Image src={product.image.desktop} layout='fill' objectFit='contain' alt='item'/>
            </div>
            <div className={styles.info}>
              <p className={styles.new}>{product.new && 'NEW PRODUCT'}</p>
              <h2 className={styles.name}>{product.name}</h2>
              <p className={styles.description}>{product.description}</p>
              <SeeProduct href={`/${[product.category]}/${product.slug}`} bg={'orange'}/>
            </div>
      </div>
    );
  });
  return (
    <>
      <Hero type='category'>
        {data[0].category}
      </Hero>
      <Main marginTop='21rem'>
          <section>
            {products}
          </section>
      </Main>
    </>
  );
};

export default Category;