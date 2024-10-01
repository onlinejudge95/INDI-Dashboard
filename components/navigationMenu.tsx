'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMenu, IoTelescope } from 'react-icons/io5';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme';
import Logo from '@/public/logo/india-high-resolution-logo-white-transparent.png';

const NavigationMenu: React.FC = () => {
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
            <Link
              href='/features'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Features
            </Link>
            <Link
              href='/community'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Community
            </Link>
            <Link
              href='/auth'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Get Started
            </Link>
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
          <Link
            href='/features'
            className='text-sm font-medium hover:underline underline-offset-4'
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href='/community'
            className='text-sm font-medium hover:underline underline-offset-4'
            prefetch={false}
          >
            Community
          </Link>
          <Link
            href='/auth'
            className='text-sm font-medium hover:underline underline-offset-4'
            prefetch={false}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export { NavigationMenu };
