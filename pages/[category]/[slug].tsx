import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
//  functions
import { dot } from '../../lib/MyFunctions';
//  components
import Main from '../../components/Layout/Main';
import Counter from '../../components/Counter';
import Gallery from '../../components/Gallery';
import Others from '../../components/Others';
import ProductDetails from '../../components/Product/ProductDetails';
import Gear from '../../components/Gear';
import CategoryLinks from '../../components/CategoryLinks';
import GoBackButton from '../../components/GoBackButton';
//  types
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {ProductContext, ProductProps} from '../../lib/Types';
//  styles
import styles from '../../styles/css/product.module.css';
//  features
import {addProduct, setCartVisibility} from '../../features/cart/cartSlice';
import { setOverlayVisibility } from '../../features/overlay/overlaySlice';
//  hooks
import { useAppDispatch } from '../../hooks';
import { useRouter } from 'next/router';


export const getStaticPaths:GetStaticPaths = async () =>{
 const res = await fetch('https://my-json-server.typicode.com/mrbrovki/demo/all');
 const data = await res.json() as ProductContext[];
 const paths = data.map(product =>{
  return{
    params: {slug: product.slug, category: product.category}
  };
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
  const dispatch = useAppDispatch();
  const addToCart = (amount: number) => {
    dispatch(addProduct({id: productProps.id, name: productProps.name, amount: amount, price: productProps.price, image: productProps.image.mobile}))
    if(amount){
      dispatch(setCartVisibility(true));
      dispatch(setOverlayVisibility(true));
    }
  };
  return (
    <>
    <Head>
      <title>{productProps.name.toUpperCase()}</title>
    </Head>
    <Main marginTop='0' backgroundColor='#fff'>
      <div className={styles.product_container}>
        <GoBackButton router={router} marginTop='0rem'/>
        <section className={styles.grid_container}>
          <div className={styles.image}>
            <Image src={productProps.image.desktop} layout='fill' objectFit='contain' alt='item' quality={70} priority={true}/>
          </div>
          <div className={styles.info}>
            <p className={styles.new}>{productProps.new && 'NEW PRODUCT'}</p>
            <h1 className={styles.name}>{productProps.name}</h1>
            <p className={styles.description}>{productProps.description}</p>
            <p className={styles.price}>${dot(productProps.price)}</p>
            <Counter addToCart={(amount) => addToCart(amount)} type='ProductPage' id={productProps.id}/>
          </div>
        </section>
        <ProductDetails features={productProps.features} includes={productProps.includes}/>
        <Gallery gallery={productProps.gallery}/>
        <Others others={productProps.others}/>
        <CategoryLinks />
        <Gear />
      </div>
    </Main>
    </>
  );
};

export default Product;