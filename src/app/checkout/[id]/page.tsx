'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { HeaderAction } from '@/components/HeaderAction';
import { Typography } from '@/components/Typography';
import { Radio } from '@/components/Radio';
import { Button } from '@/components/Button';
import { useOrder } from '@/hooks/useOrder';

import './styles.scss';

const PAYMENT_METHODS = [
  { id: 'card', name: 'Credit Card' },
  { id: 'cash', name: 'Cash' },
];

const CheckoutPage = () => {
  const tableId = 12;
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const { createOrder } = useOrder();

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
      <Typography size='xl' weight='semibold' className='checkout--title'>Checkout</Typography>
      <Radio
        label='Payment Method'
        options={PAYMENT_METHODS}
        className='checkout--method-input'
        onChange={(id: string) => setSelectedMethod(id)}
      />
      <Button label='Checkout' disabled={!selectedMethod} onClick={onCheckoutClick} className='fixed-action-btn' />
      <div className='checkout--blank-area' />
    </>
  );
};

export default CheckoutPage;
