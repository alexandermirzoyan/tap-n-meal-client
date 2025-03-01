'use client';

import { use, useState } from 'react';

import { QuantitySelector } from '@/components/QuantitySelector';
import { Button } from '@/components/Button';
import { CartContext } from '@/context/Cart';

import { IAddToCartProps } from './types';

import CartIcon from '../../../../../../public/icons/cart.svg';

export const AddToCart = ({ max, product }: IAddToCartProps) => {
  const { addProduct } = use(CartContext);
  const [quantity, setQuantity] = useState(0);

  const onAddToCartClick = () => {
    addProduct({ ...product, count: quantity });
  };

  return (
    <div className='product--actions-container'>
      <QuantitySelector max={max} onChange={(count) => setQuantity(count)} />
      <Button label='Add to Card' prefix={<CartIcon />} onClick={onAddToCartClick} />
    </div>
  );
};
