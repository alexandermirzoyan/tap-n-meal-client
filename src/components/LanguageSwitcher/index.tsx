'use client';

import { useRef, useState } from 'react';

import { Typography } from '@/components/Typography';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import AMFlagIcon from '../../../public/icons/flags/am.svg';
import RUFlagIcon from '../../../public/icons/flags/ru.svg';
import USFlagIcon from '../../../public/icons/flags/us.svg';
import BackIcon from '../../../public/icons/back.svg';

import './styles.scss';

const LANGUAGES = [
  { id: 'am', name: 'Am', icon: <AMFlagIcon /> },
  { id: 'en', name: 'En', icon: <USFlagIcon /> },
  { id: 'ru', name: 'Ru', icon: <RUFlagIcon /> },
];

export const LanguageSwitcher = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedLanguageId, setSelectedLanguageId] = useState('am');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownIconClassName = isDropdownOpen ? 'open' : 'close';
  const selectedLanguage = LANGUAGES.find((lang) => lang.id === selectedLanguageId);

  useOutsideClick(ref, () => setDropdownOpen(false));

  const onLanguageSelect = (id: string) => {
    setSelectedLanguageId(id);
    setDropdownOpen(false);
  };

  return (
    <div className='language-switcher'>
      <button onClick={() => setDropdownOpen(!isDropdownOpen)} className='language-switcher--btn'>
        <div className='language-switcher--flag-container'>
          {selectedLanguage?.icon}
        </div>
        <Typography weight='medium' size='xs'>{selectedLanguage?.name}</Typography>
        <div className={`language-switcher--dropdown-icon ${dropdownIconClassName}`}>
          <BackIcon />
        </div>
      </button>
      {isDropdownOpen ? (
        <div ref={ref} className='language-switcher--list' >
          {LANGUAGES.filter((lang) => lang.id !== selectedLanguageId).map((lang) => (
            <button key={lang.id} onClick={() => onLanguageSelect(lang.id)} className='language-switcher--language-picker'>
              {lang.icon}
              <Typography weight='medium' size='xs'>{lang.name}</Typography>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};
