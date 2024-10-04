import { Footer } from '@/components/footer';
import { NavigationMenu } from '@/components/navigationMenu';

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavigationMenu />
      {children}
      <Footer />
    </>
  );
}
