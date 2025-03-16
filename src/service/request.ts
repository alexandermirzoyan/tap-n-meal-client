import { DEFAULT_LANGUAGE } from '@/constants/languages';

type TRequestParams = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
}

const getLanguage = async () => {
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

export const request = async ({ url, method = 'GET', body }: TRequestParams) => {
  try {
    const language = await getLanguage();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}${url}`, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        Language: language,
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
