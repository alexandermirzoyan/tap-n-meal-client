import React from 'react';

const PaymentLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => (
  <div className='page-layout'>
    {children}
  </div>
);

export default PaymentLayout;
