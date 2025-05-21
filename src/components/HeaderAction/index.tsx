import { BackButton } from '@/components/BackButton';
import { CartButton } from '@/components/CartButton';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

import './styles.scss';

export const HeaderAction = () => (
  <div className='header-action--container'>
    <BackButton to='/menu' />
    <div className='header-action--right-side'>
      <CartButton />
      <LanguageSwitcher />
    </div>
  </div>
);
