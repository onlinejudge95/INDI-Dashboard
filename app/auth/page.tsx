'use client';

import Link from 'next/link';
import React from 'react';
import { FaDiscord, FaGithub, FaGitlab, FaGoogle } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const SignIn: React.FC = () => {
  return (
    <section className='border-b min-h-screen'>
      <div className='grid grid-cols-1'>
        <div className='mt-20 mx-20 w-96 items-center'>
          <Card>
            <CardHeader>
              <CardTitle>
                <h1 className='text-3xl'>Sign-In</h1>
              </CardTitle>
              <CardDescription>
                <p>SignIn using any of the following.</p>
              </CardDescription>
            </CardHeader>
            <CardContent className='flex-cols'>
              <Button>
                Sign In with <FaDiscord className='ml-2 h-4 w-4' />
              </Button>
              <Button>
                Sign In with <FaGithub className='ml-2 h-4 w-4' />
              </Button>
              <Button>
                Sign In with <FaGitlab className='ml-2 h-4 w-4' />
              </Button>
              <Button>
                Sign In with <FaGoogle className='ml-2 h-4 w-4' />
              </Button>
            </CardContent>
            <CardFooter>
              <p>
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
