import Image from 'next/image';

import { Typography } from '@/components/Typography';
import { IButtonProps } from './types';

import './styles.scss';

export const Button = ({
  label,
  prefix,
  isLoading,
  disabled,
  ...rest
}: IButtonProps) => {
  const isDisabled = disabled || isLoading;
  const className = `${isDisabled ? 'disabled' : ''}`;

  const renderPrefixIcon = () => {
    if (isLoading) {
      return <div className='btn--loader' />;
    }

    if (prefix) {
      return <Image src={prefix} alt='Button prefix' className='btn--prefix' />;
    }

    return null;
  };

  return (
    <button disabled={isDisabled} className={`btn ${className}`} {...rest}>
      {renderPrefixIcon()}
      <Typography weight='medium' size='sm'>{label}</Typography>
    </button>
  );
};
