import CardForm from '@/components/CardForm';
import { Typography } from '@/components/Typography';
import { BackButton } from '@/components/BackButton';

import './styles.scss';

const PaymentPage = () => {
  const tableId = 12;

  return (
    <>
      <div className='payment--top-container'>
        <BackButton to={`/menu/${tableId}`} />
        <Typography size='lg' weight='semibold'>Pay by Card</Typography>
        <div className='payment--empty-element' />
      </div>
      <CardForm />
    </>
  );
};

export default PaymentPage;
