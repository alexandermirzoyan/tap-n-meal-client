'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

import { useRouter } from '@/i18n/navigation';
import { Modal } from '@/components/Modal';

import { ISuccessModalProps } from './types';

export const SuccessModal = ({ open }: ISuccessModalProps) => {
  const router = useRouter();
  const t = useTranslations();
  const { table } = useParams();

  if (!open) {
    return null;
  }

  const onModalClose = () => {
    router.push(`/${table}/menu`);
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
