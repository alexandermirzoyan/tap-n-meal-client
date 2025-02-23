import Image from 'next/image';

import { Typography } from '@/components/Typography';
import { QuantitySelector } from '@/components/QuantitySelector';
import { getImageSrc } from '@/utils/getImageSrc';
import { formatNumber } from '@/utils/formatNumber';

import TrashIcon from '../../../../../public/icons/trash.svg';

import './styles.scss';

export const Product = () => {
  const imageSrc = '/uploads/product-mock-1.png';

  return (
    <div className='product-cart--container'>
      <div className='product-cart--image-container'>
        <Image src={getImageSrc(imageSrc)} width={100} height={100} alt='Image' />
      </div>
      <div className='product-cart--info-container'>
        <div className='product-cart--title-container'>
          <Typography size='xs' weight='semibold' className='product-cart--title'>Veggie tomato mix</Typography>
          <button className='product-cart--remove-btn'>
            <TrashIcon />
          </button>
        </div>
        <Typography size='md' weight='semibold' className='product-cart--price'>{`${formatNumber(30)} ֏`}</Typography>
        <QuantitySelector max={10} />
      </div>
    </div>
  );
};
