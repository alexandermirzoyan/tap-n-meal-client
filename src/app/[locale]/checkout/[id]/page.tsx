'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { HeaderAction } from '@/components/HeaderAction';
import { Typography } from '@/components/Typography';
import { Radio } from '@/components/Radio';
import { Button } from '@/components/Button';
import { useOrder } from '@/hooks/useOrder';
import { useRouter } from '@/i18n/navigation';

import './styles.scss';

const CheckoutPage = () => {
  const tableId = 12;
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const { createOrder } = useOrder();
  const t = useTranslations();

  const PAYMENT_METHODS = [
    { id: 'card', name: t('creditCard') },
    { id: 'cash', name: t('cash') },
  ];

  const onCheckoutClick = async () => {
    if (selectedMethod === 'card') {
      router.push('/payment');
      return;
    }

    await createOrder('cash');
  };

  return (
    <>
      <HeaderAction tableId={tableId} />
      <Typography size='xl' weight='semibold' className='checkout--title'>{t('checkout')}</Typography>
      <Radio
        label={t('paymentMethod')}
        options={PAYMENT_METHODS}
        className='checkout--method-input'
        onChange={(id: string) => setSelectedMethod(id)}
      />
      <Button label={t('checkout')} disabled={!selectedMethod} onClick={onCheckoutClick} className='fixed-action-btn' />
      <div className='checkout--blank-area' />
    </>
  );
};

export default CheckoutPage;
