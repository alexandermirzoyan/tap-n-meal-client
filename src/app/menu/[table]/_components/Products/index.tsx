import { ProductCard } from '@/components/ProductCard';
import { getImageSrc } from '@/utils/getImageSrc';

import { IProductsProps } from './types';

import './styles.scss';

export const Products = ({ data }: IProductsProps) => (
  <div className='products--container'>
    {data.map((product) => (
      <ProductCard
        id={product.id}
        key={product.id}
        title={product.name}
        available={product.quantity}
        price={product.price}
        imageSrc={getImageSrc(product.image.path)}
      />
    ))}
  </div>
);
