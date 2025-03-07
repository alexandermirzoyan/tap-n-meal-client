'use client';

import { useState } from 'react';

import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { QuantitySelector } from '@/components/QuantitySelector';
import { ProductCard } from '@/components/ProductCard';
import { BackButton } from '@/components/BackButton';
import { Radio } from '@/components/Radio';
import { Modal } from '@/components/Modal';
import { Input } from '@/components/Input';
import { TextArea } from '@/components/TextArea';
import { CartButton } from '@/components/CartButton';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

import CartIcon from '../../../../public/icons/cart.svg';
import MagnifierIcon from '../../../../public/icons/magnifier.svg';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Typography size='xxl'>Hello World!</Typography>
      <Typography size='xl'>Hello World!</Typography>
      <Typography size='lg'>Hello World!</Typography>
      <Typography size='md'>Hello World!</Typography>
      <Typography size='sm'>Hello World!</Typography>
      <Typography size='xs'>Hello World!</Typography>
      <Typography size='xxs'>Hello World!</Typography>

      <Button label='OPEN MODAL' onClick={() => setModalOpen(true)} />
      <Button label='Add to Card' prefix={<CartIcon />} />
      <Button label='Add to Card' isLoading prefix={<CartIcon />} />
      <Button label='Add to Card' disabled prefix={<CartIcon />} />

      <div style={{ display: 'inline-block', backgroundColor: 'white', padding: 20 }}>
        <QuantitySelector max={10} />
      </div>

      <div style={{ display: 'inline-block', backgroundColor: '#2C2C2C', padding: 20 }}>
        <ProductCard id={1} imagePath='' title='Veggie tomato mix' available={1} price={30} />
        <ProductCard id={2} imagePath='' title='Veggie tomato mix' available={1} price={30} isVeggie />
        <ProductCard id={3} imagePath='' title='Turur' available={30} price={100} />
      </div>

      <BackButton to='/' />
      <br />
      <CartButton />
      <br />

      <LanguageSwitcher />

      <Radio
        label='Payment Method'
        onChange={(value: string) => console.log(value)}
        options={[
          { id: '1', name: 'Credit Card' },
          { id: '2', name: 'Cash' },
        ]}
      />

      <Modal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        type='error'
        title='Oops...'
        info='Something went wrong. Try again'
      />

      <div style={{ marginBottom: 50 }} />

      <Input placeholder='Search' />
      <div style={{ marginBottom: 50 }} />
      <Input placeholder='Search' prefix={<MagnifierIcon />} />
      <div style={{ marginBottom: 50 }} />

      <div style={{ padding: 50, backgroundColor: '#FFFFFF' }}>
        <TextArea label='Write a comment' placeholder='Your comment to this order' />
      </div>

      <div style={{ marginBottom: 200 }} />
    </>
  );
};

export default Home;
