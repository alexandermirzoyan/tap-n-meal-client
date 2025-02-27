'use client';

import { use } from 'react';
import Link from 'next/link';

import { CartContext } from '@/context/Cart';
import { Typography } from '@/components/Typography';

import CartIcon from '../../../public/icons/cart.svg';

import './styles.scss';

export const CartButton = () => {
  const { count } = use(CartContext);

  return (
    <Link href='/cart' className='cart-button'>
      <CartIcon />
      {count ? (
        <div className='cart-button--total-container'>
          <Typography tag='span' size='xxs'>{count}</Typography>
        </div>
      ) : null}
    </Link>
  );
};
