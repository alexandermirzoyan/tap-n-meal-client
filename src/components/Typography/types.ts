import { ReactNode } from 'react';

export type TTags = 'h1' | 'h2' | 'h3' | 'p' | 'span';

export interface ITypographyProps {
  children: ReactNode;
  tag?: TTags;
  size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  className?: string;
}
