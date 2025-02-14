import RCInput from 'rc-input';

import { IInputProps } from './types';
import './styles.scss';

export const Input = ({ className: customClassName, ...rest }: IInputProps) => (
  <RCInput {...rest} className={`${customClassName || ''} ${!rest.prefix ? 'without-prefix' : ''}`} />
);
