import Image from 'next/image';

import Logo from '@/public/logo/india-high-resolution-logo-black-transparent.png';
import Balancer from 'react-wrap-balancer';
import { Button } from '../ui/button';
import Link from 'next/link';
import { TelescopeIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section id='hero' className='min-h-screen'>
      <div className='flex flex-col items-center text-center mt-8'>
        <Image
          src={Logo}
          alt='INDIa Logo'
          className='not-prose w-80 h-100 mb-6 dark:invert md:mb-8'
        />
        <h1 className='text-6xl !mb-0'>
          <Balancer>Fine grained modern remote observatory control</Balancer>
        </h1>
        <h3 className='text-2xl mt-8 text-muted-foreground'>
          <Balancer>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Balancer>
        </h3>
        <div className='not-prose mt-6 flex gap-2 md:mt-12'>
          <Button asChild>
            <Link href='/authenticate'>
              <TelescopeIcon className='mr-2' />
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero };
