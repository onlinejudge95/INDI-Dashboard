'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';

type CustomContextProps = {
  children: React.ReactNode;
};

const CustomContextProvider: React.FC<CustomContextProps> = ({ children }) => {
  return (
    <SessionProvider>
      <NextThemesProvider
        disableTransitionOnChange
        enableSystem
        attribute='class'
        defaultTheme='system'
      >
        {children}
      </NextThemesProvider>
    </SessionProvider>
  );
};

export { CustomContextProvider };
