import { DEFAULT_LANGUAGE } from '@/constants/languages';

export const getLanguage = async () => {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    const locale = pathname.split('/')[1];
    return locale || DEFAULT_LANGUAGE;
  }

  const { headers } = await import('next/headers');
  const reqHeaders = await headers();
  const referer = reqHeaders.get('referer') || '';
  const matchedLocale = referer.match(/\/(en|hy|ru)(\/|$)/)?.[1];

  return matchedLocale || DEFAULT_LANGUAGE;
};
