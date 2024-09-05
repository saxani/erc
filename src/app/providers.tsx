'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    // <SessionProvider>
    <NextThemesProvider
      attribute='class'
      defaultTheme='light'
      themes={['light', 'dark', 'modern']}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
    // </SessionProvider>
  );
}
