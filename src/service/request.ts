import { APP_LANGUAGE } from '@/constants/appLanguage';

type TRequestParams = {
  url: string;
}

export const request = async ({ url }: TRequestParams) => {
  try {
    const response = await fetch(`${process.env.API_ORIGIN}${url}`, { headers: { Language: APP_LANGUAGE } });
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
