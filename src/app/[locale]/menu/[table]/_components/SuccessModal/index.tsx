'use client';

import { useRouter } from '@/i18n/navigation';
import { Modal } from '@/components/Modal';

import { ISuccessModalProps } from './types';

export const SuccessModal = ({ open }: ISuccessModalProps) => {
  const tableId = 12;
  const router = useRouter();

  if (!open) {
    return null;
  }

  const onModalClose = () => {
    router.push(`menu/${tableId}`);
  };

  return (
    <Modal
      open
      type='success'
      onClose={onModalClose}
      title='Thank you for your order'
      info='Your order was successfully done'
    />
  );
};
