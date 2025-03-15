'use client';

import { useTranslations } from 'next-intl';

import { useRouter } from '@/i18n/navigation';
import { Modal } from '@/components/Modal';

import { ISuccessModalProps } from './types';

export const SuccessModal = ({ open }: ISuccessModalProps) => {
  const tableId = 12;
  const router = useRouter();
  const t = useTranslations();

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
      title={t('order.success.title')}
      info={t('order.success.info')}
    />
  );
};
