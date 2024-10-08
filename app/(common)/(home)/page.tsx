'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoTelescope } from 'react-icons/io5';
import Balancer from 'react-wrap-balancer';

import Logo from '@/public/logo/india-high-resolution-logo-black-transparent.png';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className='border-b min-h-screen'>
      <div className='flex flex-col items-center text-center mt-8'>
        <Image
          src={Logo}
          alt='INDIa Logo'
          className='not-prose w-80 h-100 mb-6 dark:invert md:mb-8'
        />
        <h1 className='text-6xl !mb-0'>
          <Balancer>Fine grained modern remote observatory control</Balancer>
        </h1>
        <p className='text-2xl mt-8 text-muted-foreground'>
          <Balancer>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Balancer>
        </p>
        <div className='not-prose mt-6 flex gap-2 md:mt-12'>
          <Button asChild>
            <Link href='/auth'>
              <IoTelescope className='mr-2' />
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
