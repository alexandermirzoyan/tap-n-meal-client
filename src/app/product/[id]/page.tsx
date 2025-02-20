import Image from 'next/image';

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
  const id = (await params).id;
  const imageSrc = '/uploads/product-mock-1.png';
  console.log(`Product #${id}`);

  return (
    <div className='product--page-container'>
      <div className='product--image-container'>
        <div className='product--image-blur' style={{ backgroundImage: `url(${getImageSrc(imageSrc)})` }} />
        <BackButton to='/menu/12' />
        <Image
          width={220}
          height={220}
          src={getImageSrc(imageSrc)}
          alt='Product Image'
        />
      </div>
      <div className='product--info-container'>
        <Typography size='md' weight='semibold'>Veggie tomato mix</Typography>
        <Typography size='xs' className='product--available-count'>Available: 1</Typography>
        <Typography size='xl' weight='semibold' className='product--price'>30 ֏</Typography>
        <Typography size='xs' weight='medium'>Description</Typography>
        <Typography size='xs' className='product--description'>
          00 grams Mozzarella cheese (use as needed) 1½ cups Mix vegetables sliced or cubed (capsicum, onions, olives.
        </Typography>

        <TextArea label='Write a comment' placeholder='Your comment to this order' />

        <div className='product--actions-container'>
          <QuantitySelector max={10} />
          <Button label='Add to Card' prefix={<CartIcon />} />
        </div>
      </div>
      <div className='product--empty-container' />
    </div>
  );
};

export default ProductPage;
