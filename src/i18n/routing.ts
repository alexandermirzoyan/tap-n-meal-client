import { defineRouting } from 'next-intl/routing';
import { DEFAULT_LANGUAGE } from '@/constants/languages';

export const routing = defineRouting({
  locales: ['en', 'hy', 'ru'],
  defaultLocale: DEFAULT_LANGUAGE,
});
