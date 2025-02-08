import Image from 'next/image';

import { Typography } from '@/components/Typography';
import { IButtonProps } from './types';
import CartIcon from '../../../public/icons/cart.svg';

import './styles.scss';

export const Button = ({
  label,
  prefix,
  isLoading,
  disabled,
}: IButtonProps) => {
  console.log('label :: ', label);
  console.log('prefix :: ', prefix);
  console.log('isLoading :: ', isLoading);
  console.log('disabled :: ', disabled);
  console.log('CartIcon', CartIcon);

  return (
    <button disabled={disabled || isLoading} className='btn'>
      <Image src={CartIcon} alt='Button prefix' className='btn--prefix' />
      <Typography weight='medium' size='sm'>{label}</Typography>
    </button>
  );
};
