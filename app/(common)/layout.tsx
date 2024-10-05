import { Footer } from '@/components/footer';
import { PublicNavbar } from '@/components/navbar/public';

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PublicNavbar />
      {children}
      <Footer />
    </>
  );
}
