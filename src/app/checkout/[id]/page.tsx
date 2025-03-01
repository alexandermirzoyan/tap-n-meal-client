'use client';

import { useState } from 'react';

import { HeaderAction } from '@/components/HeaderAction';
import { Typography } from '@/components/Typography';
import { Radio } from '@/components/Radio';
import { Button } from '@/components/Button';

import './styles.scss';

const PAYMENT_METHODS = [
  { id: 'card', name: 'Credit Card' },
  { id: 'cash', name: 'Cash' },
];

const CheckoutPage = () => {
  const tableId = 12;
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  console.log('selectedMethod :: ', selectedMethod);

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
      <Button label='Checkout' disabled={!selectedMethod} className='fixed-action-btn' />
      <div className='checkout--blank-area' />
    </>
  );
};

export default CheckoutPage;
