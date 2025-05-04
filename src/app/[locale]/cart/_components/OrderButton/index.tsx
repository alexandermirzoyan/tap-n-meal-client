'use client';

import { use } from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/Button';
import { CartContext } from '@/context/Cart';
import { formatNumber } from '@/utils/formatNumber';
import { Link } from '@/i18n/navigation';

export const OrderButton = () => {
  const tableId = 12;
  const { count, products } = use(CartContext);
  const t = useTranslations();

  if (!count) {
    return null;
  }

  const totalPrice = products.reduce((acc, cur) => acc + cur.price * cur.count, 0);

  return (
    <Link href={`/checkout/${tableId}`}>
      <Button label={`${t('placeOrder')} - ${formatNumber(totalPrice)} ֏`} className='fixed-action-btn' />
    </Link>
  );
};
