import { HeaderAction } from '@/components/HeaderAction';
import { Typography } from '@/components/Typography';
import { Products } from './_components/Products';
import { OrderButton } from './_components/OrderButton';

import './styles.scss';

const CartPage = () => {
  const tableId = 12;

  return (
    <>
      <HeaderAction tableId={tableId} />
      <Typography size='xl' weight='semibold' className='cart--title'>My Cart</Typography>
      <div className='cart--items'>
        <Products />
      </div>
      <OrderButton />
    </>
  );
};

export default CartPage;
