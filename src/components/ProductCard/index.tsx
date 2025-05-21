'use client';

import { use, useState, MouseEvent } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

import { Typography } from '@/components/Typography';
import { formatNumber } from '@/utils/formatNumber';
import { CartContext } from '@/context/Cart';
import { getImageSrc } from '@/utils/getImageSrc';
import { Link } from '@/i18n/navigation';
import { ADD_TO_CART_SUCCESS_STATE_DURATION } from '@/constants/addToCartSuccessDuration';

import { IProductCardProps } from './types';

import VeggieIcon from '../../../public/icons/veggie.svg';
import CartIcon from '../../../public/icons/cart.svg';
import CheckMarkIcon from '../../../public/icons/checkmark.svg';

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
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const t = useTranslations();
  const { table } = useParams();

  const onAddToCartClick = (evt: MouseEvent) => {
    evt.preventDefault();

    setIsAddedToCart(true);
    addProduct({
      id,
      name: title,
      price,
      quantity: available,
      image: { path: imagePath },
      count: 1,
      comment: '',
    });

    setTimeout(() => {
      setIsAddedToCart(false);
    }, ADD_TO_CART_SUCCESS_STATE_DURATION);
  };

  return (
    <Link href={`/${table}/product/${id}`} className='product-card'>
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
        <button
          disabled={isAddedToCart}
          onClick={onAddToCartClick}
          className={`product-card--cart-btn ${isAddedToCart ? 'success' : ''}`}
        >
          { isAddedToCart ? <CheckMarkIcon /> : <CartIcon /> }
        </button>
      </div>
    </Link>
  );
};
