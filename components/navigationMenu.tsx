'use client';

import { MenuIcon, Telescope } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/public/logo/india-high-resolution-logo-white-transparent.png';
import { ThemeToggle } from '@/components/theme';

const NavigationMenu = () => {
  return (
    <header className='flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-zinc-600 text-white'>
      <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' className='lg:hidden'>
            <MenuIcon className='h-6 w-6' />
            <span className='sr-only'>Toggle Navigation Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <Link href='#' className='flex items-center gap-2' prefetch={false}>
            <Telescope className='h-6 w-6' />
            <span className='text-lg font-semibold'>INDIa</span>
          </Link>
          <div className='grid gap-4 py-6'>
            <ThemeToggle />
            <Link
              href='#'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href='#'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              About
            </Link>
            <Link
              href='#'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Pricing
            </Link>
            <Link
              href='#'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className='mr-4 lg:mr-8'>
        <Image src={Logo} alt='Your Logo' className='h-12 w-12 ml-4' />
      </div>
      <div className='ml-auto hidden lg:flex'>
        <nav className='flex items-center gap-6'>
          <ThemeToggle />
          <Link
            href='#'
            className='text-sm font-medium hover:underline underline-offset-4'
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href='#'
            className='text-sm font-medium hover:underline underline-offset-4'
            prefetch={false}
          >
            About
          </Link>
          <Link
            href='#'
            className='text-sm font-medium hover:underline underline-offset-4'
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href='#'
            className='text-sm font-medium hover:underline underline-offset-4'
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export { NavigationMenu };