import { DashboardNavbar } from '@/components/navbar/dashboard';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex min-h-screen w-full flex-col bg-muted/40'>
      <DashboardNavbar />
      {children}
    </div>
  );
}
