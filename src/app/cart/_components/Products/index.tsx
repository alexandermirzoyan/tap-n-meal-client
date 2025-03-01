'use client';

import { use } from 'react';
import Image from 'next/image';

import { CartContext } from '@/context/Cart';
import { Typography } from '@/components/Typography';
import { QuantitySelector } from '@/components/QuantitySelector';
import { getImageSrc } from '@/utils/getImageSrc';
import { formatNumber } from '@/utils/formatNumber';

import TrashIcon from '../../../../../public/icons/trash.svg';

import './styles.scss';

export const Products = () => {
  const { products, removeProduct } = use(CartContext);

  return products.map((product) => (
    <div key={product.id} className='product-cart--container'>
      <div className='product-cart--image-container'>
        <Image src={getImageSrc(product.image.path)} width={100} height={100} alt='Image' />
      </div>
      <div className='product-cart--info-container'>
        <div className='product-cart--title-container'>
          <Typography size='xs' weight='semibold' className='product-cart--title'>{product.name}</Typography>
          <button onClick={() => removeProduct(product.id)} className='product-cart--remove-btn'>
            <TrashIcon />
          </button>
        </div>
        <Typography size='md' weight='semibold' className='product-cart--price'>{`${formatNumber(product.price)} ֏`}</Typography>
        <QuantitySelector defaultQuantity={product.count} max={product.quantity} />
      </div>
    </div>
  ));
};
