'use client';

import { use, useState } from 'react';
import { useTranslations } from 'next-intl';

import { QuantitySelector } from '@/components/QuantitySelector';
import { Button } from '@/components/Button';
import { TextArea } from '@/components/TextArea';
import { CartContext } from '@/context/Cart';
import { ADD_TO_CART_SUCCESS_STATE_DURATION } from '@/constants/addToCartSuccessDuration';

import { IAddToCartProps } from './types';

import CartIcon from '../../../../../../../public/icons/cart.svg';
import CheckMarkIcon from '../../../../../../../public/icons/checkmark.svg';

import './styles.scss';

export const AddToCart = ({ max, product }: IAddToCartProps) => {
  const { addProduct } = use(CartContext);
  const [comment, setComment] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const t = useTranslations();

  const onAddToCartClick = () => {
    setIsAddedToCart(true);
    addProduct({ ...product, count: quantity, comment });

    setTimeout(() => {
      setIsAddedToCart(false);
    }, ADD_TO_CART_SUCCESS_STATE_DURATION);
  };

  return (
    <>
      <TextArea label={t('commentTextArea.label')} placeholder={t('commentTextArea.placeholder')} onChange={(evt) => setComment(evt.target.value)} />
      <div className='product--actions-container'>
        <QuantitySelector max={max} onChange={(count) => setQuantity(count)} />
        <Button
          disabled={isAddedToCart}
          label={t('addToCart')}
          className={isAddedToCart ? 'add-to-cart-success' : ''}
          prefix={isAddedToCart ? <CheckMarkIcon /> : <CartIcon />}
          onClick={onAddToCartClick}
        />
      </div>
    </>
  );
};
