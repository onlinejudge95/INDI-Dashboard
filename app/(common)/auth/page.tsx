'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import React from 'react';
import { FaDiscord, FaGithub, FaGoogle, FaTwitch } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

type IdentityProvider = {
  icon: JSX.Element;
  provider: string;
};

const SignIn: React.FC = () => {
  const identityProviders: IdentityProvider[] = [
    { icon: <FaDiscord className='ml-2 h-4 2-4' />, provider: 'discord' },
    { icon: <FaGithub className='ml-2 h-4 w-4' />, provider: 'github' },
    { icon: <FaGoogle className='ml-2 h-4 w-4' />, provider: 'google' },
    { icon: <FaTwitch className='ml-2 h-4 w-4' />, provider: 'twitch' },
  ];

  return (
    <div className='w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-3xl font-bold'>Sign-In</h1>
            <p className='text-balance text-muted-foreground'>
              Sign In using any of the following.
            </p>
          </div>
          {identityProviders.map(({ icon, provider }, index) => (
            <Button
              className='w-full'
              key={index}
              onClick={() => signIn(provider, { callbackUrl: '/dashboard' })}
            >
              Sign in with {icon}
            </Button>
          ))}
          <div className='mt-4 text-sm text-center'>
            By signing in you agree to accept our{' '}
            <Link href='/privacy-policy' className='hover:opacity-75'>
              Privacy Policy
            </Link>{' '}
            &{' '}
            <Link href='/terms-of-service' className='hover:opacity-75'>
              Terms of Service
            </Link>{' '}
          </div>
        </div>
      </div>
      <div className='hidden bg-muted lg:block'>
        <Image
          src='/pexels-pixabay-47367.jpg'
          alt='Lunar Composite'
          width={1920}
          height={1848}
          className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </div>
    </div>
  );
};

export default SignIn;
