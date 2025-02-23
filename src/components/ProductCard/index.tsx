import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@/components/Typography';
import { formatNumber } from '@/utils/formatNumber';

import { IProductCardProps } from './types';

import VeggieIcon from '../../../public/icons/veggie.svg';
import CartIcon from '../../../public/icons/cart.svg';

import './styles.scss';

export const ProductCard = ({
  id,
  title,
  available,
  imageSrc,
  price,
  isVeggie,
}: IProductCardProps) => (
  <Link href={`/product/${id}`} className='product-card'>
    {
      isVeggie ? (
        <div className='product-card--type'>
          <VeggieIcon />
        </div>
      ) : null
    }
    <Image src={imageSrc} width={128} height={128} className='product-card--image' alt='Product' />
    <div className='product-card--info'>
      <Typography size='xs' weight='semibold'>{title}</Typography>
      <Typography size='xxs' className='product-card--available'>
        {`Available: ${available}`}
      </Typography>
    </div>
    <div className='product-card--price-info'>
      <Typography size='xs' weight='semibold' className='product-card--price'>
        {`${formatNumber(price)} ֏`}
      </Typography>
      <button className='product-card--cart-btn'>
        <CartIcon />
      </button>
    </div>
  </Link>
);
