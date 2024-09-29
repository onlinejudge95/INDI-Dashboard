'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from './ui/button';

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button variant='ghost' size='icon' onClick={handleThemeChange}>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export { ThemeProvider, ThemeToggle };
