import type { NextPage, GetStaticProps, GetStaticPaths} from 'next';
import { categories } from '../../public/categories';
import React from 'react';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = categories.map(ctg =>{
    return{
       params: {category: ctg}
    }
  })
  return{
    paths,
    fallback: false
    
  }
}
export const getStaticProps:GetStaticProps = async () => {
  // const response = await fetch('/assets/data.json');
  // const data = await response.json();
  // return {
  //   props: {data}
  // }
  return{
    props: {data: "fuck"}
  }
}

const Category:NextPage<{data:string}> = ({data}) => {
 console.log(data)
  return (
    <div>{}</div>
  )
}

export default Category;