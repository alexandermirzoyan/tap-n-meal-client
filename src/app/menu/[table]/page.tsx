import { request } from '@/service/request';

import { CartButton } from '@/components/CartButton';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Input } from '@/components/Input';

import { Categories } from './_components/Categories';
import { Products } from './_components/Products';

import LogoIcon from '../../../../public/icons/logo.svg';
import SearchIcon from '../../../../public/icons/magnifier.svg';

import './styles.scss';

interface IPageProps {
  params: Promise<{ table: string }>;
}

const MenuPage = async ({ params }: IPageProps) => {
  const table = (await params).table;
  const categories = await request({ url: '/categories' });
  console.log(`Menu for table ${table}`);

  return (
    <>
      <div className='menu--header-container'>
        <header className='header--container'>
          <LogoIcon />
          <div className='header--actions'>
            <CartButton total={0} />
            <LanguageSwitcher />
          </div>
        </header>
        <Input placeholder='Search' prefix={<SearchIcon />} />
        <Categories data={categories} />
      </div>

      <Products />
    </>
  );
};

export default MenuPage;
