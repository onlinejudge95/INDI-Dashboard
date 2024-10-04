import type { Metadata } from 'next';

import { CustomContextProvider } from '@/components/provider';
import './globals.css';

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
    <html lang='en'>
      <head>
        <link
          href='icons/india-favicon-white.png'
          rel='stylesheet'
          sizes='any'
        />
      </head>
      <body className='antialiased bg-zinc-300 dark:bg-zinc-800'>
        <CustomContextProvider>{children}</CustomContextProvider>
      </body>
    </html>
  );
}
