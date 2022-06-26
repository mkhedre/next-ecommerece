import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
const Product = ({ product }) => {
  const { id, image, title, price } = product;
  return (
    <div className="py-3 ">
      <Link href={`/product/${id}`}>
        <a>
          <Image
            src={image}
            width={200}
            height={200}
            alt={title}
            className="transition-all hover:scale-105"
          />
          <h1 className="max-w-[250px] mx-auto py-3 text-xl ">{title}</h1>
          <p className="text-2xl ">{price} $</p>
        </a>
      </Link>
    </div>
  );
};

export default Product;
