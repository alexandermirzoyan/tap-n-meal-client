import React from 'react';

const CartLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => (
  <div className='page-layout'>
    {children}
  </div>
);

export default CartLayout;
