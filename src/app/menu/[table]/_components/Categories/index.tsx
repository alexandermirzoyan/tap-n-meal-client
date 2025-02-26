'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { CategoryButton } from '../CategoryButton';
import { ICategoryProps } from './types';

import './styles.scss';

export const Categories = ({ data }: ICategoryProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(data[0].id);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('category', String(selectedCategory));
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [router, searchParams, selectedCategory]);

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
