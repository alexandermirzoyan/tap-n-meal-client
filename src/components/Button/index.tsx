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
      return <div className='btn--prefix'>{prefix}</div>;
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
