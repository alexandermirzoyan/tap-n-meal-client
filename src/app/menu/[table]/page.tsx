import { request } from '@/service/request';
import { Typography } from '@/components/Typography';
import { CartButton } from '@/components/CartButton';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Input } from '@/components/Input';
import { Categories } from './_components/Categories';

import LogoIcon from '../../../../public/icons/logo.svg';
import SearchIcon from '../../../../public/icons/magnifier.svg';

import './styles.scss';

interface IPageProps {
  params: Promise<{ table: string }>;
}

const MenuPage = async ({ params }: IPageProps) => {
  const table = (await params).table;
  const categories = await request({ url: '/categories' });

  return (
    <>
      <header className='header--container'>
        <LogoIcon />
        <div className='header--actions'>
          <CartButton total={0} />
          <LanguageSwitcher />
        </div>
      </header>
      <Input placeholder='Search' prefix={<SearchIcon />} />

      <Categories data={categories} />

      <Typography>{`Menu for table ${table}`}</Typography>
    </>
  );
};

export default MenuPage;
