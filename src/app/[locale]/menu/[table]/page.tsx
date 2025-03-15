import { getTranslations } from 'next-intl/server';

import { request } from '@/service/request';

import { CartButton } from '@/components/CartButton';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Input } from '@/components/Input';

import { Categories } from './_components/Categories';
import { Products } from './_components/Products';
import { SuccessModal } from './_components/SuccessModal';

import LogoIcon from '../../../../../public/icons/logo.svg';
import SearchIcon from '../../../../../public/icons/magnifier.svg';

import './styles.scss';

interface IPageProps {
  params: Promise<{ table: string }>;
  searchParams: Promise<{ success?: string }>;
}

const MenuPage = async ({ params, searchParams }: IPageProps) => {
  const t = await getTranslations();
  const table = (await params).table;
  const showSuccess = (await searchParams).success !== undefined;
  const categories = await request({ url: '/categories' });

  console.log(`Menu for table ${table}`);

  return (
    <>
      <div className='menu--header-container'>
        <header className='header--container'>
          <LogoIcon />
          <div className='header--actions'>
            <CartButton />
            <LanguageSwitcher />
          </div>
        </header>
        <Input placeholder={t('search')} prefix={<SearchIcon />} />
        <Categories data={categories} />
      </div>

      <Products />
      <SuccessModal open={showSuccess} />
    </>
  );
};

export default MenuPage;
