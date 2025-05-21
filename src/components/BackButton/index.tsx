'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';

import { IBackButtonProps } from './types';

import BackIcon from '../../../public/icons/back.svg';

import './styles.scss';

export const BackButton = ({ to }: IBackButtonProps) => {
  const { table } = useParams();

  return (
    <Link href={`/${table}/${to}`} className='back-button'>
      <BackIcon />
    </Link>
  );
};
