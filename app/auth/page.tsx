'use client';

import Link from 'next/link';
import React from 'react';
import { FaDiscord, FaGithub, FaGoogle } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { signIn } from 'next-auth/react';

type IdentityProvider = {
  icon: JSX.Element;
  provider: string;
};

const SignIn: React.FC = () => {
  const identityProviders: IdentityProvider[] = [
    { icon: <FaDiscord className='ml-2 h-4 w-4' />, provider: 'discord' },
    { icon: <FaGithub className='ml-2 h-4 w-4' />, provider: 'github' },
    { icon: <FaGoogle className='ml-2 h-4 w-4' />, provider: 'google' },
  ];
  return (
    <section className='border-b min-h-screen'>
      <div className='grid grid-cols-1'>
        <div className='mt-20 w-80 mx-20'>
          <Card>
            <CardHeader>
              <CardTitle>
                <h1 className='text-3xl text-center'>Sign-In</h1>
              </CardTitle>
              <CardDescription>
                <p className='text-center'>
                  Sign In using any of the following.
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col rounded-lg items-center'>
                {identityProviders.map(({ icon, provider }, index) => (
                  <div className='w-50 my-2' key={index}>
                    <Button
                      onClick={() => {
                        signIn(provider);
                      }}
                    >
                      Sign-In with {icon}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <p className='text-center'>
                You can check our{' '}
                <Link className='hover:opacity-75' href='/terms-of-service'>
                  Terms of Services
                </Link>{' '}
                and{' '}
                <Link className='hover:opacity-75,' href='/privacy-policy'>
                  Privacy Policy
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
