import React from 'react';

const MenuLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => (
  <div className='page-layout'>
    {children}
  </div>
);

export default MenuLayout;
