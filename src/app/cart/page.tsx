import { HeaderAction } from '@/components/HeaderAction';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';
import { Product } from './_components/Product';

import './styles.scss';

const CartPage = () => {
  const tableId = 12;

  return (
    <>
      <HeaderAction tableId={tableId} />
      <Typography size='xl' weight='semibold' className='cart--title'>My Cart</Typography>
      <div className='cart--items'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <Button label='Place an order' className='fixed-action-btn' />
    </>
  );
};

export default CartPage;
