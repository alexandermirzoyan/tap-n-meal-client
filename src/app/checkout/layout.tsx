import React from 'react';

const CheckoutLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => (
  <div className='page-layout'>
    {children}
  </div>
);

export default CheckoutLayout;
