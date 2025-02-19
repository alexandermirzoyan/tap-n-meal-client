import Image from 'next/image';

import { Typography } from '@/components/Typography';
import { BackButton } from '@/components/BackButton';
import { getImageSrc } from '@/utils/getImageSrc';

import './styles.scss';

interface IPageProps {
  params: Promise<{ id: string }>;
}

const ProductPage = async ({ params }: IPageProps) => {
  const id = (await params).id;
  const imageSrc = '/uploads/product-mock-1.png';

  return (
    <>
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
      <Typography>{`Product #${id}`}</Typography>
    </>
  );
};

export default ProductPage;
