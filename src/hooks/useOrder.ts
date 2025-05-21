import { use } from 'react';
import { useParams } from 'next/navigation';

import { request } from '@/service/request';
import { CartContext } from '@/context/Cart';
import { useRouter } from '@/i18n/navigation';

export const useOrder = () => {
  const { products, clearProducts } = use(CartContext);
  const router = useRouter();
  const { table } = useParams();

  const createOrder = async (paymentMethod: string) => {
    const orderProducts = products.map((product) => ({ id: product.id, quantity: product.count, comment: product.comment }));
    const response = await request({
      url: '/orders',
      method: 'POST',
      body: {
        table,
        paymentMethod,
        products: orderProducts,
      },
    });

    if (response.success) {
      clearProducts();
      router.push(`/${table}/menu?success`);
    }
  };

  return { createOrder };
};
