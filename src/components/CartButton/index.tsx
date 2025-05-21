'use client';

import { use } from 'react';
import { useParams } from 'next/navigation';

import { CartContext } from '@/context/Cart';
import { Typography } from '@/components/Typography';
import { Link } from '@/i18n/navigation';

import CartIcon from '../../../public/icons/cart.svg';

import './styles.scss';

export const CartButton = () => {
  const { count } = use(CartContext);
  const { table } = useParams();

  return (
    <Link href={`/${table}/cart`} className='cart-button'>
      <CartIcon />
      {count ? (
        <div className='cart-button--total-container'>
          <Typography tag='span' size='xxs'>{count}</Typography>
        </div>
      ) : null}
    </Link>
  );
};
