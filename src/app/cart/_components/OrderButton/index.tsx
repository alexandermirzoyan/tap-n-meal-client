'use client';

import { use } from 'react';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { CartContext } from '@/context/Cart';

export const OrderButton = () => {
  const tableId = 12;
  const { count } = use(CartContext);

  if (!count) {
    return null;
  }

  return (
    <Link href={`/checkout/${tableId}`}>
      <Button label='Place an order' className='fixed-action-btn' />
    </Link>
  );
};
