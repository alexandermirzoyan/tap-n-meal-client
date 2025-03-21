'use client';

import { use } from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/Button';
import { CartContext } from '@/context/Cart';
import { Link } from '@/i18n/navigation';

export const OrderButton = () => {
  const tableId = 12;
  const { count } = use(CartContext);
  const t = useTranslations();

  if (!count) {
    return null;
  }

  return (
    <Link href={`/checkout/${tableId}`}>
      <Button label={t('placeOrder')} className='fixed-action-btn' />
    </Link>
  );
};
