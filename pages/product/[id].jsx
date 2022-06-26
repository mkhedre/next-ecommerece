import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Head from 'next/head';

const selectedProduct = ({ product }) => {
  const { image, title, description, price, category } = product;
  return (
    <div className="flex items-center justify-between py-10">
      <Head>
        <title>{title}</title>
      </Head>
      <Image src={image} width={600} height={600} alt={title} />
      <div className="flex flex-col justify-between p-5 space-y-6 text-xl capitalize ">
        <h2>
          <span className="text-xl text-amber-600">name:</span> {title}
        </h2>
        <h2>
          <span className="text-xl text-amber-600">category: </span>
          {category}
        </h2>
        <p>
          <span className="text-xl text-amber-600">description:</span>{' '}
          {description}
        </p>
        <h1 className="">
          <span className="text-xl text-amber-600 ">price:</span> {price},00$
        </h1>
      </div>
    </div>
  );
};

export default selectedProduct;

export async function getStaticPaths() {
  const req = await fetch(`https://fakestoreapi.com/products`);
  const products = await req.json();
  const paths = products.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return {
    props: { product },
  };
}
