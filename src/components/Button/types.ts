import React from 'react';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  prefix?: string;
  isLoading?: boolean;
  disabled?: boolean;
}
