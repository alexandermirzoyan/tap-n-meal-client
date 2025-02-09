import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';

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
  </>
);

export default Home;
