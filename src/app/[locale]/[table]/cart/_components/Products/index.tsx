'use client';

import { use, useState, useEffect } from 'react';
import Image from 'next/image';

import { CartContext } from '@/context/Cart';
import { ICartProduct } from '@/context/Cart/types';
import { Typography } from '@/components/Typography';
import { QuantitySelector } from '@/components/QuantitySelector';
import { getImageSrc } from '@/utils/getImageSrc';
import { formatNumber } from '@/utils/formatNumber';
import { getLanguage } from '@/utils/getLanguage';
import { request } from '@/service/request';

import TrashIcon from '../../../../../../../public/icons/trash.svg';

import './styles.scss';

export const Products = () => {
  const [localizedProducts, setLocalizedProducts] = useState<ICartProduct[]>([]);
  const { products, removeProduct, changeCount } = use(CartContext);

  const onQuantityChange = (productId: number, newCount: number) => {
    changeCount(productId, newCount);
  };

  const loadProducts = async () => {
    const language = await getLanguage();
    const localizedProductsToSet: ICartProduct[] = [];

    for (const product of products) {
      const response = await request({
        url: `/products/${product.id}`,
        headers: { Authorization: 'Bearer TOKEN', Language: '' },
      });

      const foundNameInLocale = response.name.find((name: { locale: { code: string } }) => name.locale.code === language);
      localizedProductsToSet.push({ ...product, name: foundNameInLocale.name });
    }

    setLocalizedProducts(localizedProductsToSet);
  };

  useEffect(() => {
    loadProducts();
  }, [products]);

  return localizedProducts.map((product) => (
    <div key={product.id} className='product-cart--container'>
      <div className='product-cart--image-container'>
        <Image src={getImageSrc(product.image.path)} width={100} height={100} alt='Image' />
      </div>
      <div className='product-cart--info-container'>
        <div className='product-cart--title-container'>
          <Typography size='xs' weight='semibold' className='product-cart--title'>{product.name}</Typography>
          <button onClick={() => removeProduct(product.id)} className='product-cart--remove-btn'>
            <TrashIcon />
          </button>
        </div>
        <Typography size='md' weight='semibold' className='product-cart--price'>{`${formatNumber(product.price)} ֏`}</Typography>
        <QuantitySelector onChange={(count) => onQuantityChange(product.id, count)} defaultQuantity={product.count} max={product.quantity} />
      </div>
    </div>
  ));
};
