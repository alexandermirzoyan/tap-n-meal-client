'use client';

import { KeyboardEvent } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { useRouter } from '@/i18n/navigation';
import { Input } from '@/components/Input';

import SearchIcon from '../../../../../../../public/icons/magnifier.svg';

export const SearchInput = () => {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();

  const onPressEnter = (evt: KeyboardEvent<HTMLInputElement>) => {
    const searchValue = evt.currentTarget.value;
    const params = new URLSearchParams(searchParams);

    if (!searchValue) {
      params.delete('search');
    } else {
      params.set('search', searchValue);
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Input placeholder={t('search')} prefix={<SearchIcon />} onPressEnter={onPressEnter} />
  );
};
