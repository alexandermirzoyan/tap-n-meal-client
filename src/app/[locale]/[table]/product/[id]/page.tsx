import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { request } from '@/service/request';

import { Typography } from '@/components/Typography';
import { BackButton } from '@/components/BackButton';

import { getImageSrc } from '@/utils/getImageSrc';
import { formatNumber } from '@/utils/formatNumber';

import { AddToCart } from './_components/AddToCart';

import './styles.scss';

interface IPageProps {
  params: Promise<{ id: string }>;
}

const ProductPage = async ({ params }: IPageProps) => {
  const id = (await params).id;
  const product = await request({ url: `/products/${id}` });
  const imageSrc = product.image.path;
  const t = await getTranslations();

  return (
    <div className='product--page-container'>
      <div className='product--image-container'>
        <div className='product--image-blur' style={{ backgroundImage: `url(${getImageSrc(imageSrc)})` }} />
        <BackButton to='/menu' />
        <Image
          width={220}
          height={220}
          src={getImageSrc(imageSrc)}
          alt='Product Image'
        />
      </div>
      <div className='product--info-container'>
        <Typography size='md' weight='semibold'>{product.name}</Typography>
        <Typography size='xs' className='product--available-count'>{`${t('available')}: ${product.quantity}`}</Typography>
        <Typography size='xl' weight='semibold' className='product--price'>{`${formatNumber(product.price)} ֏`}</Typography>
        <Typography size='xs' weight='medium'>{t('description')}</Typography>
        <Typography size='xs' className='product--description'>{product.description}</Typography>

        <AddToCart max={product.quantity} product={product} />
      </div>
      <div className='product--empty-container' />
    </div>
  );
};

export default ProductPage;
