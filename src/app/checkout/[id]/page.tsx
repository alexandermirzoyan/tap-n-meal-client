'use client';

import { useState } from 'react';

import { HeaderAction } from '@/components/HeaderAction';
import { Typography } from '@/components/Typography';
import { Radio } from '@/components/Radio';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

import './styles.scss';

const PAYMENT_METHODS = [
  { id: 'card', name: 'Credit Card' },
  { id: 'cash', name: 'Cash' },
];

const TIP_OPTIONS = [
  { id: '1', name: 'No' },
  { id: '2', name: '500 ֏' },
  { id: '3', name: '1000 ֏' },
  { id: 'other', name: 'Other amount' },
];

const CheckoutPage = () => {
  const tableId = 12;
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [tip, setTip] = useState<string | null>(null);

  console.log('selectedMethod :: ', selectedMethod);
  console.log('tip :: ', tip);

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
      <Radio
        label='Do you want to leave a tip?'
        options={TIP_OPTIONS}
        onChange={(id: string) => setTip(id)}
      />
      {tip === 'other' ? (
        <div className='checkout--amount-container'>
          <Typography weight='medium' size='xs'>Amount</Typography>
          <Input placeholder='Enter the amount' type='number' />
        </div>
      ) : null}
      <Button label='Checkout' className='fixed-action-btn' />
      <div className='checkout--blank-area' />
    </>
  );
};

export default CheckoutPage;
