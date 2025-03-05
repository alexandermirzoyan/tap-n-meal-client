'use client';

import React, { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { request } from '@/service/request';
import { CartContext } from '@/context/Cart';

import './styles.scss';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const cardStyle = {
  base: {
    fontSize: '16px',
    color: '#32325d',
    '::placeholder': { color: '#aab7c4' },
  },
  invalid: { color: '#fa755a' },
};

const CardInput = () => {
  const tableId = 12;
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const { products } = use(CartContext);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    const cardElement = elements.getElement(CardElement);
    console.log('Card Info:', cardElement);

    const orderProducts = products.map((product) => ({ id: product.id, quantity: product.count, comment: product.comment }));
    const response = await request({
      url: '/orders',
      method: 'POST',
      body: {
        table: tableId,
        paymentMethod: 'card',
        products: orderProducts,
      },
    });

    if (response.success) {
      setLoading(false);
      router.push(`/menu/${tableId}?success`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='card-form'>
      <div className='card-input'>
        <CardElement options={{ style: cardStyle }} />
      </div>
      <button type='submit' disabled={loading} className='pay-button'>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};

const CardForm = () => (
  <Elements stripe={stripePromise}>
    <CardInput />
  </Elements>
);

export default CardForm;
