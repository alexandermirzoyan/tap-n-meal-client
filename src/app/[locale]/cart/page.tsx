import { getTranslations } from 'next-intl/server';

import { HeaderAction } from '@/components/HeaderAction';
import { Typography } from '@/components/Typography';
import { Products } from './_components/Products';
import { OrderButton } from './_components/OrderButton';

import './styles.scss';

const CartPage = async () => {
  const tableId = 12;
  const t = await getTranslations();

  return (
    <>
      <HeaderAction tableId={tableId} />
      <Typography size='xl' weight='semibold' className='cart--title'>{t('myCart')}</Typography>
      <div className='cart--items'>
        <Products />
      </div>
      <OrderButton />
    </>
  );
};

export default CartPage;
