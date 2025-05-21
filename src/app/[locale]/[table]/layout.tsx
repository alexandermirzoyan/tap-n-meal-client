import React from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import { CartProvider } from '@/context/Cart';

import '@/styles/index.scss';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t('head.title'),
    description: t('head.description'),
  };
}

interface ILayoutProps {
  children: React.ReactNode;
  params: Promise<{locale: 'en' | 'hy' | 'ru'}>;
}

const LocaleLayout = async ({ children, params }: ILayoutProps) => {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <CartProvider>
            {children}
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
