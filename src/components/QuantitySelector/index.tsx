'use client';

import { useState } from 'react';
import { Typography } from '@/components/Typography';

import { IQuantitySelectorProps } from './types';

import MinusIcon from '../../../public/icons/minus.svg';
import PlusIcon from '../../../public/icons/plus.svg';

import './styles.scss';

export const QuantitySelector = ({ max, onChange, defaultQuantity }: IQuantitySelectorProps) => {
  const min = 1;
  const [count, setCount] = useState(defaultQuantity || 1);

  const onChangeClick = (type: 'plus' | 'minus') => {
    if (type === 'minus' && count > min) {
      setCount(count - 1);
      onChange?.(count - 1);
      return;
    }

    if (type === 'plus' && count < max) {
      setCount(count + 1);
      onChange?.(count + 1);
    }
  };

  return (
    <div className='quantity-selector'>
      <button onClick={() => onChangeClick('minus')} disabled={count === min}>
        <MinusIcon />
      </button>
      <Typography size='xs'>{count}</Typography>
      <button onClick={() => onChangeClick('plus')} disabled={count === max}>
        <PlusIcon />
      </button>
    </div>
  );
};
