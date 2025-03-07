'use client';

import { use, useState } from 'react';

import { QuantitySelector } from '@/components/QuantitySelector';
import { Button } from '@/components/Button';
import { TextArea } from '@/components/TextArea';
import { CartContext } from '@/context/Cart';

import { IAddToCartProps } from './types';

import CartIcon from '../../../../../../../public/icons/cart.svg';

export const AddToCart = ({ max, product }: IAddToCartProps) => {
  const { addProduct } = use(CartContext);
  const [comment, setComment] = useState('');
  const [quantity, setQuantity] = useState(0);

  const onAddToCartClick = () => {
    addProduct({ ...product, count: quantity, comment });
  };

  return (
    <>
      <TextArea label='Write a comment' placeholder='Your comment to this order' onChange={(evt) => setComment(evt.target.value)} />
      <div className='product--actions-container'>
        <QuantitySelector max={max} onChange={(count) => setQuantity(count)} />
        <Button label='Add to Card' prefix={<CartIcon />} onClick={onAddToCartClick} />
      </div>
    </>
  );
};
