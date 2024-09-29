import type { Metadata } from 'next';
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
        <link rel='icon' href='icons/india-favicon-white.png' sizes='any' />
      </head>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
