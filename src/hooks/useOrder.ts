import { use } from 'react';

import { request } from '@/service/request';
import { CartContext } from '@/context/Cart';
import { useRouter } from '@/i18n/navigation';

export const useOrder = () => {
  const tableId = 12;
  const { products, clearProducts } = use(CartContext);
  const router = useRouter();

  const createOrder = async (paymentMethod: string) => {
    const orderProducts = products.map((product) => ({ id: product.id, quantity: product.count, comment: product.comment }));
    const response = await request({
      url: '/orders',
      method: 'POST',
      body: {
        paymentMethod,
        table: tableId,
        products: orderProducts,
      },
    });

    if (response.success) {
      clearProducts();
      router.push(`/menu/${tableId}?success`);
    }
  };

  return { createOrder };
};
