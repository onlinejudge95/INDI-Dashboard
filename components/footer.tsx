'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Balancer from 'react-wrap-balancer';

import Logo from '@/public/logo/india-high-resolution-logo-white-transparent.png';

const Footer: React.FC = () => {
  return (
    <footer className='bg-stone-700 dark:bg-neutral-900 text-white'>
      <div className='grid gap-12 items-center md:grid-cols-[1.5fr_0.5fr_0.5fr]'>
        <div className='grid gap-6 mx-2 mb-4'>
          <Link href='/'>
            <h3 className='sr-only'>INDIa</h3>
            <Image
              src={Logo}
              alt='INDIa Logo'
              width={120}
              height={27.27}
              className='transition-all hover:opacity-75 dark:invert'
            />
          </Link>
          <p>
            <Balancer>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Balancer>
          </p>
          <p>
            ©{' '}
            <a href='https://github.com/onlinejudge95/INDI-Dashboard'>INDIa</a>.
            All rights reserved. 2024-present.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h5>Website</h5>
          <Link href='/'>Home</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/careers'>Careers</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        <div className='flex flex-col gap-2'>
          <h5>Legal</h5>
          <Link href='/privacy-policy'>Privacy Policy</Link>
          <Link href='/terms-of-service'>Terms of Service</Link>
          <Link href='/cookie-policy'>Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
