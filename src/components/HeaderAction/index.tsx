import { BackButton } from '@/components/BackButton';
import { CartButton } from '@/components/CartButton';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

import { IHeaderActionProps } from './types';

import './styles.scss';

export const HeaderAction = ({ tableId }: IHeaderActionProps) => (
  <div className='header-action--container'>
    <BackButton to={`/menu/${tableId}`} />
    <div className='header-action--right-side'>
      <CartButton total={0} />
      <LanguageSwitcher />
    </div>
  </div>
);
