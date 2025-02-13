'use client';

import { createPortal } from 'react-dom';

import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';

import { IModalProps } from './types';

import CheckMarkIcon from '../../../public/icons/checkmark.svg';
import CloseIcon from '../../../public/icons/close.svg';

import './styles.scss';

export const Modal = ({
  open,
  onClose,
  title,
  info,
  type = 'success',
}: IModalProps) => {
  if (!open) {
    return null;
  }

  return createPortal(
    (
      <div className='modal--container'>
        <div className='modal--content-container'>
          <button onClick={onClose} className='modal--close-btn'>
            <CloseIcon />
          </button>
          <div className={`modal--icon-container ${type}`}>
            <div className={`modal--icon-circle ${type}`}>
              { type === 'success' ? <CheckMarkIcon /> : <CloseIcon /> }
            </div>
          </div>
          <Typography weight='semibold' size='lg'>{title}</Typography>
          <Typography size='xs' className='modal--info'>{info}</Typography>
          <Button label={type === 'success' ? 'Great' : 'OK'} onClick={onClose} className='w-full' />
        </div>
      </div>
    ),
    document.body,
  );
};
