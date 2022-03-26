import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import Main from '../../components/Main';
import Image from 'next/image';
// styles
import styles from '../../styles/css/product.module.css';
import Counter from '../../components/Counter';


interface ContextParams extends ParsedUrlQuery{
  slug: string;
  category: string;
};

interface ProductProps{
  name: string;
  image: {desktop: string;};
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
 const res = await fetch('https://api.jsonbin.io/b/623e21e2a703bb674934a6cb');
 const data = await res.json() as ContextParams[];
 const index = data.findIndex(product => product.slug === slug);
 return {props: {product: data[index]}};
};

const Product:NextPage<{product: ProductProps}> = ({product}) => {
  const router = useRouter();

  return (
    <Main marginTop='0rem'>
    <div className={styles.product_container}>
      <button onClick={router.back} className={styles.go_back_btn}>Go Back</button>
      <section className={styles.grid_container}>
        <div className={styles.image}>
          <Image src={product.image.desktop} layout='fill' objectFit='contain' alt='item' quality={70} priority={true}/>
        </div>
        <div className={styles.info}>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>
          <Counter />
        </div>
      </section>
    </div>
    </Main>
  )
}

export default Product