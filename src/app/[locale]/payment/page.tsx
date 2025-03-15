import { getTranslations } from 'next-intl/server';

import CardForm from '@/components/CardForm';
import { Typography } from '@/components/Typography';
import { BackButton } from '@/components/BackButton';

import './styles.scss';

const PaymentPage = async () => {
  const tableId = 12;
  const t = await getTranslations();

  return (
    <>
      <div className='payment--top-container'>
        <BackButton to={`/menu/${tableId}`} />
        <Typography size='lg' weight='semibold'>{t('payByCard')}</Typography>
        <div className='payment--empty-element' />
      </div>
      <CardForm />
    </>
  );
};

export default PaymentPage;
