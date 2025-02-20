import Image from 'next/image';

import { request } from '@/service/request';

import { Typography } from '@/components/Typography';
import { BackButton } from '@/components/BackButton';
import { TextArea } from '@/components/TextArea';
import { Button } from '@/components/Button';
import { QuantitySelector } from '@/components/QuantitySelector';

import { getImageSrc } from '@/utils/getImageSrc';

import CartIcon from '../../../../public/icons/cart.svg';

import './styles.scss';

interface IPageProps {
  params: Promise<{ id: string }>;
}

const ProductPage = async ({ params }: IPageProps) => {
  const tableId = 12;
  const id = (await params).id;
  const product = await request({ url: `/products/${id}` });
  const imageSrc = product.image.path;

  return (
    <div className='product--page-container'>
      <div className='product--image-container'>
        <div className='product--image-blur' style={{ backgroundImage: `url(${getImageSrc(imageSrc)})` }} />
        <BackButton to={`/menu/${tableId}`} />
        <Image
          width={220}
          height={220}
          src={getImageSrc(imageSrc)}
          alt='Product Image'
        />
      </div>
      <div className='product--info-container'>
        <Typography size='md' weight='semibold'>{product.name}</Typography>
        <Typography size='xs' className='product--available-count'>{`Available: ${product.quantity}`}</Typography>
        <Typography size='xl' weight='semibold' className='product--price'>{`${product.price} ֏`}</Typography>
        <Typography size='xs' weight='medium'>Description</Typography>
        <Typography size='xs' className='product--description'>{product.description}</Typography>

        <TextArea label='Write a comment' placeholder='Your comment to this order' />

        <div className='product--actions-container'>
          <QuantitySelector max={product.quantity} />
          <Button label='Add to Card' prefix={<CartIcon />} />
        </div>
      </div>
      <div className='product--empty-container' />
    </div>
  );
};

export default ProductPage;
