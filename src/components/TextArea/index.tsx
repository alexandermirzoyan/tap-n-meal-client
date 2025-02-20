'use client';

import RCTextArea from 'rc-textarea';

import { Typography } from '@/components/Typography';

import { ITextAreaProps } from './types';

import './styles.scss';

export const TextArea = ({ label, ...rest }: ITextAreaProps) => (
  <div className='textarea--container'>
    <Typography tag='span' size='xs' weight='medium' className='textarea--label'>{label}</Typography>
    <RCTextArea {...rest} />
  </div>
);
