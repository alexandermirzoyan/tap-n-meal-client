'use client';

import { useState } from 'react';

import { CategoryButton } from '../CategoryButton';
import { ICategoryProps } from './types';

import './styles.scss';

export const Categories = ({ data }: ICategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(data[0].id);

  return (
    <div className='categories--container'>
      {data.map((category) => (
        <CategoryButton
          key={category.id}
          label={category.name}
          isSelected={selectedCategory === category.id}
          onClick={() => setSelectedCategory(category.id)}
        />
      ))}
    </div>
  );
};
