import type { Metadata } from 'next';
import graphik from './fonts/fontLoader';
import { Inter } from 'next/font/google';
import './globals.css';

import Providers from '@/app/providers';
import Header from '@/components/header';
import Menu from '@/components/menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Essity Resource Centre',
  description: 'The home of the Essity Resource Centre',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${graphik.variable} font-sans`}>
        <Providers>
          <Header />
          <Menu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
