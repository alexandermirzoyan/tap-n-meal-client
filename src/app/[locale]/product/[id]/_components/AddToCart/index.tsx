'use client';

import { use, useState } from 'react';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations();

  const onAddToCartClick = () => {
    addProduct({ ...product, count: quantity, comment });
  };

  return (
    <>
      <TextArea label={t('commentTextArea.label')} placeholder={t('commentTextArea.placeholder')} onChange={(evt) => setComment(evt.target.value)} />
      <div className='product--actions-container'>
        <QuantitySelector max={max} onChange={(count) => setQuantity(count)} />
        <Button label={t('addToCart')} prefix={<CartIcon />} onClick={onAddToCartClick} />
      </div>
    </>
  );
};
