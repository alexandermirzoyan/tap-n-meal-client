import Image from 'next/image';
import { Typography } from '@/components/Typography';

import { IProductCardProps } from './types';

import ProductMockImage from '../../../public/images/product-mock-1.png';
import VeggieIcon from '../../../public/icons/veggie.svg';
import CartIcon from '../../../public/icons/cart.svg';

import './styles.scss';

export const ProductCard = ({
  title,
  available,
  price,
  isVeggie,
}: IProductCardProps) => (
  <div className='product-card'>
    {
      isVeggie ? (
        <div className='product-card--type'>
          <VeggieIcon />
        </div>
      ) : null
    }
    <Image src={ProductMockImage} className='product-card--image' alt='Product' />
    <div className='product-card--info'>
      <Typography size='xs' weight='semibold'>{title}</Typography>
      <Typography size='xxs' className='product-card--available'>
        {`Available: ${available}`}
      </Typography>
    </div>
    <div className='product-card--price-info'>
      <Typography size='xs' weight='semibold' className='product-card--price'>
        {`${price} ֏`}
      </Typography>
      <button className='product-card--cart-btn'>
        <CartIcon />
      </button>
    </div>
  </div>
);
