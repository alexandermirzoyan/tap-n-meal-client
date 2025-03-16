'use client';

import { useRef, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { ProductCard } from '@/components/ProductCard';
import { request } from '@/service/request';

import { IProduct } from './types';

import './styles.scss';

const PRODUCTS_PER_PAGE = 10;

export const Products = () => {
  const observerRef = useRef(null);

  const searchParams = useSearchParams();
  const categoryId = searchParams.get('category');
  const search = searchParams.get('search');

  const [page, setPage] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    const data = await request({ url: `/products?page=${page}&category=${categoryId}&search=${search || ''}` });
    setProducts((prevProducts) => [...prevProducts, ...data]);
    setHasMorePages(data.length >= PRODUCTS_PER_PAGE);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isEndReached = entries[0].isIntersecting;
        if (isEndReached) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setPage(1);
    setProducts([]);
    setHasMorePages(true);
  }, [categoryId, search]);

  useEffect(() => {
    if (!categoryId || !hasMorePages) {
      return;
    }

    fetchProducts();
  }, [page, categoryId, hasMorePages]);

  return (
    <>
      <div className='products--container'>
        {products.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            title={product.name}
            available={product.quantity}
            price={product.price}
            imagePath={product.image.path}
          />
        ))}
      </div>
      <div ref={observerRef} style={{ height: '20px' }} />
    </>
  );
};
