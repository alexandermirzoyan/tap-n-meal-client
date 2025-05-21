import { Typography } from '@/components/Typography';
import { ICategoryButtonProps } from './types';

import './styles.scss';

export const CategoryButton = ({ label, isSelected, ...rest }: ICategoryButtonProps) => {
  const selectedClassName = isSelected ? 'selected' : '';

  return (
    <button className={`category-btn ${selectedClassName}`} {...rest}>
      <Typography size='xs'>{label}</Typography>
    </button>
  );
};
