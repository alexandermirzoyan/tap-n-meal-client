import { ReactNode, ReactElement } from 'react';

import { ITypographyProps, TTags } from './types';
import './styles.scss';

const nodeByVariants: Record<TTags, (_children: ReactNode, _className: string) => ReactElement> = {
  p: (children, className) => <p className={className}>{children}</p>,
  span: (children, className) => <span className={className}>{children}</span>,
  h1: (children, className) => <h1 className={className}>{children}</h1>,
  h2: (children, className) => <h2 className={className}>{children}</h2>,
  h3: (children, className) => <h3 className={className}>{children}</h3>,
};

export const Typography = ({
  children,
  tag = 'p',
  size = 'md',
  weight = 'regular',
  className: customClassName = '',
}: ITypographyProps) => {
  const className = `typography typography--${size} typography--${weight} ${customClassName}`;
  return nodeByVariants[tag](children, className);
};
