import type { Metadata } from 'next';

import './globals.css';

import { NavigationMenu } from '@/components/navigationMenu';
import { Footer } from '@/components/footer';
import { CustomContextProvider } from '@/components/provider';

export const metadata: Metadata = {
  title: 'INDIa',
  description: 'Remote observatory management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head>
        <link rel='icon' href='icons/india-favicon-white.png' sizes='any' />
      </head>
      <body className='antialiased bg-zinc-300 dark:bg-zinc-800'>
        <CustomContextProvider>
          <NavigationMenu />
          {children}
          <Footer />
        </CustomContextProvider>
      </body>
    </html>
  );
}
