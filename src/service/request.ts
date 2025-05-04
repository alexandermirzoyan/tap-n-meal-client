import { getLanguage } from '@/utils/getLanguage';

type TRequestParams = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: any;
}

export const request = async ({
  url,
  method = 'GET',
  body,
  headers,
}: TRequestParams) => {
  try {
    const language = await getLanguage();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}${url}`, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        Language: language,
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
