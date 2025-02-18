import { ProductCard } from '@/components/ProductCard';

import { IProductsProps } from './types';

import './styles.scss';

export const Products = ({ data }: IProductsProps) => (
  <div className='products--container'>
    {data.map((product) => (
      <ProductCard key={product.id} title={product.name} available={product.quantity} price={product.price} />
    ))}
  </div>
);
