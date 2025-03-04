'use client';

import { use, useState } from 'react';
import { useRouter } from 'next/navigation';

import { HeaderAction } from '@/components/HeaderAction';
import { Typography } from '@/components/Typography';
import { Radio } from '@/components/Radio';
import { Button } from '@/components/Button';
import { request } from '@/service/request';
import { CartContext } from '@/context/Cart';

import './styles.scss';

const PAYMENT_METHODS = [
  { id: 'card', name: 'Credit Card' },
  { id: 'cash', name: 'Cash' },
];

const CheckoutPage = () => {
  const tableId = 12;
  const router = useRouter();
  const { products } = use(CartContext);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const onCheckoutClick = async () => {
    if (selectedMethod === 'card') {
      router.push('/payment');
      return;
    }

    const orderProducts = products.map((product) => ({ id: product.id, quantity: product.count, comment: product.comment }));
    const response = await request({
      url: '/orders',
      method: 'POST',
      body: {
        table: tableId,
        paymentMethod: 'cash',
        products: orderProducts,
      },
    });

    if (response.success) {
      router.push(`/menu/${tableId}?success`);
    }
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
