'use client';

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { useOrder } from '@/hooks/useOrder';

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
  const stripe = useStripe();
  const elements = useElements();

  const { createOrder } = useOrder();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    const cardElement = elements.getElement(CardElement);
    console.log('Card Info:', cardElement);

    await createOrder('card');
    setLoading(false);
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
