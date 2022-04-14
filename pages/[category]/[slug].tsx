import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { dot } from '../../lib/dot';
//  components
import Main from '../../components/Layout/Main';

//  types
import {ProductContext, ProductProps} from '../../lib/Types';

//  styles
import styles from '../../styles/css/product.module.css';
import Counter from '../../components/Counter';
import { Context } from '../_app';
import Gallery from '../../components/Gallery';
import Others from '../../components/Others';
import ProductDetails from '../../components/Product/ProductDetails';
import Gear from '../../components/Gear';
import CategoryLinks from '../../components/CategoryLinks';

export const getStaticPaths:GetStaticPaths = async () =>{
 const res = await fetch('https://my-json-server.typicode.com/mrbrovki/demo/all');
 const data = await res.json() as ProductContext[];
 const paths = data.map(product =>{
  return{
    params: {slug: product.slug, category: product.category}
  }
 });
 return{
   paths,
   fallback:false
 };
};

export const getStaticProps:GetStaticProps= async (context) =>{
 const {slug, category} = context.params as ProductContext;
 const res = await fetch(`https://my-json-server.typicode.com/mrbrovki/demo/${category}?slug=${slug}`);
 const productProps = await res.json();
 return{
   props: {productProps: productProps[0]}
 };
};



const Product:NextPage<{productProps: ProductProps}> = ({productProps}) => {
  const router = useRouter();
  const {state: {products}, dispatch} = useContext(Context);
  const addToCart = (amount: number) =>{
    dispatch({type: 'ADD_PRODUCT', payload: {id: productProps.id, amount: amount, price: productProps.price}});
  };
  return (
    <Main>
      <div className={styles.product_container}>
        <button onClick={router.back} className={styles.go_back_btn}>Go Back</button>
        <section className={styles.grid_container}>
          <div className={styles.image}>
            <Image src={productProps.image.desktop} layout='fill' objectFit='contain' alt='item' quality={70} priority={true}/>
          </div>
          <div className={styles.info}>
            <p className={styles.new}>{productProps.new && 'NEW PRODUCT'}</p>
            <h1 className={styles.name}>{productProps.name}</h1>
            <p className={styles.description}>{productProps.description}</p>
            <p className={styles.price}>${dot(productProps.price)}</p>
            <Counter addToCart={(amount) => addToCart(amount)}/>
          </div>
        </section>
        <ProductDetails features={productProps.features} includes={productProps.includes}/>
        <Gallery gallery={productProps.gallery}/>
        <Others others={productProps.others}/>
        <CategoryLinks />
        <Gear />
      </div>
    </Main>
  );
};

export default Product;