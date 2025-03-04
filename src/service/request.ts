import { APP_LANGUAGE } from '@/constants/appLanguage';

type TRequestParams = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
}

export const request = async ({ url, method = 'GET', body }: TRequestParams) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}${url}`, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        Language: APP_LANGUAGE,
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
