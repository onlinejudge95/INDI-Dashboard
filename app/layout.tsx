import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme';

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
      <body className='antialiased'>
        <ThemeProvider
          enableSystem
          disableTransitionOnChange
          attribute='class'
          defaultTheme='system'
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
