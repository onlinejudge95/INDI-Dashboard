'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button variant='ghost' size='icon' onClick={handleThemeChange}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

export { ThemeToggle };
