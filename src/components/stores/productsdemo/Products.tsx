'use client';

import Image from 'next/image';
import { productState } from '@/states/atoms/storeState';
import { fetchProducts } from '@/utilities/axios/getProductsData';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function Products() {
  const [products, setProducts] = useRecoilState(productState);

  useEffect(() => {
    async function fetchProductsData() {
      try {
        const data = await fetchProducts();

        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProductsData();
  }, [setProducts]);

  return (
    <div className="grid grid-cols-1 md:grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 mx-4 gap-y-2 overflow-x-hidden">
      {products.map(product => (
        <div key={product.id}>
          <div className="container text-center border rounded-md border-lime-300 py-2 px-1">
            <Image
              src={product.image}
              alt="product image"
              width={300}
              height={300}
              className="object-contain object-center w-1/2 h-1/2 md:w-2/3 md:h-2/3 mx-auto"
            />

            <div className="space-y-2">
              <h2 className="text-sm font-semibold sm:text-lg">
                {product.title}
              </h2>
              <p className="text-sm">{product.description}</p>
              <p className="text-xs text-red-500">Price: ${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
