import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const category:NextPage = () => {
 const router = useRouter();
  return (
    <div>{router.query.category}</div>
  )
}

export default category;