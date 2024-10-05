import Link from 'next/link';
import React from 'react';
import { CiSettings } from 'react-icons/ci';
import { FaSignOutAlt, FaUserAstronaut } from 'react-icons/fa';
import { IoTelescope } from 'react-icons/io5';
import { LuPanelLeftOpen } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipTrigger } from '@/components/ui/tooltip';

type DashboardNavbarItem = {
  icon: JSX.Element;
  href: string;
  text: string;
};

const DashboardNavbar: React.FC = () => {
  const menuItem: DashboardNavbarItem[] = [
    {
      icon: <FaUserAstronaut className='h-5 w-5' />,
      href: '/dashboard#user',
      text: 'User',
    },
    {
      icon: <FaSignOutAlt className='h-5 w-5' />,
      href: '/api/auth/signout',
      text: 'Sign Out',
    },
  ];
  return (
    <>
      <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
        <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
          <Link
            href='/dashboard'
            className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
          >
            <IoTelescope className='h-4 w-4 transition-all group-hover:scale-110' />
            <span className='sr-only'>INDIa</span>
          </Link>
          <Separator />
          {menuItem.map(({ icon, href, text }, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                >
                  {icon}
                  <span className='sr-only'>{text}</span>
                </Link>
              </TooltipTrigger>
            </Tooltip>
          ))}
        </nav>
      </aside>
      <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' variant='outline' className='sm:hidden'>
            <LuPanelLeftOpen className='h-5 w-5' />
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='sm:max-w-xs'>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link
              href='/dashboard'
              className='group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'
            >
              <IoTelescope className='h-5 w-5 transition-all group-hover:scale-110' />
              <span className='sr-only'>INDIa</span>
            </Link>
            {menuItem.map(({ icon, href, text }, index) => (
              <Link
                className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                key={index}
                href={href}
              >
                {icon}
                {text}
              </Link>
            ))}
            <Link
              href='/dashboard/settings'
              className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
            >
              <CiSettings className='h-5 w-5' /> Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export { DashboardNavbar };
