import Link from 'next/link';

import { IBackButtonProps } from './types';

import BackIcon from '../../../public/icons/back.svg';

import './styles.scss';

export const BackButton = ({ to }: IBackButtonProps) => (
  <Link href={to} className='back-button'>
    <BackIcon />
  </Link>
);
