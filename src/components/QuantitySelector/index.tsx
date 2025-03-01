'use client';

import { useState, useEffect } from 'react';
import { Typography } from '@/components/Typography';

import { IQuantitySelectorProps } from './types';

import MinusIcon from '../../../public/icons/minus.svg';
import PlusIcon from '../../../public/icons/plus.svg';

import './styles.scss';

export const QuantitySelector = ({ max, onChange }: IQuantitySelectorProps) => {
  const min = 1;
  const [count, setCount] = useState(1);

  const onChangeClick = (type: 'plus' | 'minus') => {
    if (type === 'minus' && count > min) {
      setCount(count - 1);
      return;
    }

    if (type === 'plus' && count < max) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    onChange?.(count);
  }, [count]);

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
