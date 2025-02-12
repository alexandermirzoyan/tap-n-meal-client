'use client';

import { useState } from 'react';
import { Typography } from '@/components/Typography';

import { IRadioProps, TRadioOption } from './types';
import CheckMarkIcon from '../../../public/icons/checkmark.svg';

import './styles.scss';

export const Radio = ({ label, options, onChange }: IRadioProps) => {
  const [selectedValue, setSelectedValue] = useState<null | TRadioOption['id']>(null);

  const onRadioSelect = (id: TRadioOption['id']) => {
    if (id === selectedValue) {
      return;
    }

    setSelectedValue(id);
    onChange(id);
  };

  return (
    <div className='radio'>
      <Typography size='sm' weight='semibold'>{label}</Typography>
      <div className='radio--options-container'>
        {options.map((option) => {
          const isSelected = selectedValue === option.id;
          const selectedClassName = isSelected ? 'selected' : '';

          return (
            <button key={option.id} onClick={() => onRadioSelect(option.id)} className={`radio--option ${selectedClassName}`}>
              <div className={`radio--option-circle ${selectedClassName}`}>
                {isSelected ? <CheckMarkIcon /> : null}
              </div>
              <Typography size='xs' tag='span' weight='medium'>{option.name}</Typography>
            </button>
          );
        })}
      </div>
    </div>
  );
};
