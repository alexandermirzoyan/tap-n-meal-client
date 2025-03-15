'use client';

import { use, MouseEvent } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Typography } from '@/components/Typography';
import { formatNumber } from '@/utils/formatNumber';
import { CartContext } from '@/context/Cart';
import { getImageSrc } from '@/utils/getImageSrc';
import { Link } from '@/i18n/navigation';

import { IProductCardProps } from './types';

import VeggieIcon from '../../../public/icons/veggie.svg';
import CartIcon from '../../../public/icons/cart.svg';

import './styles.scss';

export const ProductCard = ({
  id,
  title,
  available,
  imagePath,
  price,
  isVeggie,
}: IProductCardProps) => {
  const { addProduct } = use(CartContext);
  const t = useTranslations();

  const onAddToCartClick = (evt: MouseEvent) => {
    evt.preventDefault();
    addProduct({
      id,
      name: title,
      price,
      quantity: available,
      image: { path: imagePath },
      count: 1,
      comment: '',
    });
  };

  return (
    <Link href={`/product/${id}`} className='product-card'>
      {
        isVeggie ? (
          <div className='product-card--type'>
            <VeggieIcon />
          </div>
        ) : null
      }
      <Image src={getImageSrc(imagePath)} width={128} height={128} className='product-card--image' alt='Product' />
      <div className='product-card--info'>
        <Typography size='xs' weight='semibold'>{title}</Typography>
        <Typography size='xxs' className='product-card--available'>
          {`${t('available')}: ${available}`}
        </Typography>
      </div>
      <div className='product-card--price-info'>
        <Typography size='xs' weight='semibold' className='product-card--price'>
          {`${formatNumber(price)} ֏`}
        </Typography>
        <button onClick={onAddToCartClick} className='product-card--cart-btn'>
          <CartIcon />
        </button>
      </div>
    </Link>
  );
};
