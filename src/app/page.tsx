import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { QuantitySelector } from '@/components/QuantitySelector';
import { ProductCard } from '@/components/ProductCard';

import CartIcon from '../../public/icons/cart.svg';

const Home = () => (
  <>
    <Typography size='xxl'>Hello World!</Typography>
    <Typography size='xl'>Hello World!</Typography>
    <Typography size='lg'>Hello World!</Typography>
    <Typography size='md'>Hello World!</Typography>
    <Typography size='sm'>Hello World!</Typography>
    <Typography size='xs'>Hello World!</Typography>
    <Typography size='xxs'>Hello World!</Typography>

    <Button label='Add to Card' prefix={<CartIcon />} />
    <Button label='Add to Card' isLoading prefix={<CartIcon />} />
    <Button label='Add to Card' disabled prefix={<CartIcon />} />

    <div style={{ display: 'inline-block', backgroundColor: 'white', padding: 20 }}>
      <QuantitySelector max={10} />
    </div>

    <div style={{ display: 'inline-block', backgroundColor: '#2C2C2C', padding: 20 }}>
      <ProductCard title='Veggie tomato mix' available={1} price={30} />
      <ProductCard title='Veggie tomato mix' available={1} price={30} isVeggie />
      <ProductCard title='Turur' available={30} price={100} />
    </div>
  </>
);

export default Home;
