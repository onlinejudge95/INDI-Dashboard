'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import { IoMenu, IoTelescope } from 'react-icons/io5';
import { PiSignOut } from 'react-icons/pi';
import { VscDebugDisconnect } from 'react-icons/vsc';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Logo from '@/public/logo/india-high-resolution-logo-white-transparent.png';

type UnauthenticatedMenuItem = {
  href: string;
  text: string;
};

type AuthenticatedMenuItem = {
  href: string;
  text: string;
  icon: JSX.Element;
};

const AuthenticatedMenu: React.FC = () => {
  const menuItem: AuthenticatedMenuItem[] = [
    {
      icon: <VscDebugDisconnect className='h-5 w-5' />,
      href: '#connection',
      text: 'Connection',
    },
  ];
  return (
    <div className='flex min-h-screen w-full flex-col bg-muted-40'>
      <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
        <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
          <Link
            href='/dashboard'
            className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
          >
            <IoTelescope className='h-6 w-6' />
            <span className='sr-only'>INDIa</span>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <ThemeToggle />
                <span className='sr-only'>Theme</span>
              </TooltipTrigger>
              <TooltipContent side='right'>Theme</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {menuItem.map(({ icon, href, text }, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={href}
                    className='flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                  >
                    {icon}
                    <span className='sr-only'>{text}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side='right'>{text}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  onClick={() => {
                    signOut({ callbackUrl: '/auth', redirect: true });
                  }}
                >
                  <PiSignOut className='h-5 w-5' />
                  <span className='sr-only'>Sign Out</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side='right'>Sign Out</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
    </div>
  );
};

const UnauthenticatedMenu: React.FC = () => {
  const menuItem: UnauthenticatedMenuItem[] = [
    { href: '/features', text: 'Features' },
    { href: '/community', text: 'Community' },
    { href: '/auth', text: 'Get Started' },
  ];

  return (
    <header className='flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-stone-700 dark:bg-neutral-900 text-white'>
      <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' className='lg:hidden'>
            <IoMenu className='h-6 w-6' />
            <span className='sr-only'>Toggle Navigation Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <Link href='/' className='flex items-center gap-2' prefetch={false}>
            <IoTelescope className='h-6 w-6' />
            <span className='text-lg font-semibold'>INDIa</span>
          </Link>
          <div className='grid gap-4 py-6'>
            <ThemeToggle />
            {menuItem.map(({ href, text }, index) => (
              <Link
                href={href}
                key={index}
                prefetch={false}
                className='flex w-full items-center py-2 text-lg font-semibold'
              >
                {text}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <div className='mr-4 lg:mr-8'>
        <Link href='/'>
          <Image src={Logo} alt='INDIa Logo' className='h-12 w-12 ml-4' />
        </Link>
      </div>
      <div className='ml-auto hidden lg:flex'>
        <nav className='flex items-center gap-6'>
          <ThemeToggle />
          {menuItem.map(({ href, text }, index) => (
            <Link
              href={href}
              key={index}
              prefetch={false}
              className='flex w-full items-center py-2 text-lg font-semibold'
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

const NavigationMenu: React.FC = () => {
  const { status } = useSession();

  return status === 'authenticated' ? (
    <AuthenticatedMenu />
  ) : (
    <UnauthenticatedMenu />
  );
};
export { NavigationMenu };
