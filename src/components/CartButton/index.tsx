import Link from 'next/link';

import { Typography } from '@/components/Typography';

import { ICartButtonProps } from './types';
import CartIcon from '../../../public/icons/cart.svg';

import './styles.scss';

export const CartButton = ({ total }: ICartButtonProps) => (
  <Link href='/cart' className='cart-button'>
    <CartIcon />
    {total ? (
      <div className='cart-button--total-container'>
        <Typography tag='span' size='xxs'>{total}</Typography>
      </div>
    ) : null}
  </Link>
);
