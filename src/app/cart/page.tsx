import { BackButton } from '@/components/BackButton';
import { CartButton } from '@/components/CartButton';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';
import { Product } from './_components/Product';

import './styles.scss';

const CartPage = () => {
  const tableId = 12;

  return (
    <>
      <div className='cart--header-container'>
        <BackButton to={`/menu/${tableId}`} />
        <div className='cart--header-right-side'>
          <CartButton total={0} />
          <LanguageSwitcher />
        </div>
      </div>
      <Typography size='xl' weight='semibold' className='cart--title'>My Cart</Typography>
      <div className='cart--items'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <Button label='Place an order' className='cart--order-btn' />
    </>
  );
};

export default CartPage;
