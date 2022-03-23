import React from 'react';
import type { NextPage, GetStaticProps, GetStaticPaths} from 'next';
import { categories } from '../../public/categories';
import { ParsedUrlQuery } from 'querystring';
import styles from '../../styles/css/category.module.css';

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
  const res = await fetch('https://jsonkeeper.com/b/H28U');
  const data = await res.json() as Array<{category: string}>;
  const catProducts = data.filter(product => product.category === category);
  return {props: {data: catProducts, category: category}}
};

const Category:NextPage<{data: CategoryProduct[], category: string}> = ({data, category}) => {
  return (
    <main>
      <h1 className={styles.category_h1}>
        {category}
      </h1>
      <div className={styles.lorem}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eaque quod quas vel quis labore at aut amet nemo sapiente, ratione adipisci sunt nostrum sit modi nihil quaerat ullam autem quam. Doloremque quisquam odio porro, nemo odit vitae voluptates sint mollitia libero dolor repellat magni vel architecto distinctio quae a nulla officia iste eaque praesentium in debitis laudantium eveniet. Aspernatur, ipsam dolorem. Mollitia praesentium culpa voluptate dolorem, porro repudiandae nam eligendi. Possimus, similique ratione. Voluptatum nisi debitis nemo. Unde enim molestias dolore odio optio quibusdam impedit aliquam voluptas beatae recusandae sunt, inventore, porro, provident illo et necessitatibus corrupti iste ullam?
      </div>
    </main>
  );
};

export default Category;