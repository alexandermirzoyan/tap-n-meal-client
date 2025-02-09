import React from 'react';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  prefix?: any;
  isLoading?: boolean;
  disabled?: boolean;
}
