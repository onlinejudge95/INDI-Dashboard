'use client';

import { ArrowRight, Coins } from 'lucide-react';
import Balancer from 'react-wrap-balancer';

import CommunityText from './types';
import Link from 'next/link';

const Community = () => {
  const communityText: CommunityText[] = [
    {
      icon: <Coins className='h-6 w-6' />,
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '/',
      cta: 'Learn More',
    },
    {
      icon: <Coins className='h-6 w-6' />,
      title: 'Lorem Ipsum',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      href: '/',
      cta: 'Learn More',
    },
    {
      icon: <Coins className='h-6 w-6' />,
      title: 'Lorem Ipsum',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      href: '/',
      cta: 'Learn More',
    },
    {
      icon: <Coins className='h-6 w-6' />,
      title: 'Lorem Ipsum',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      href: '/',
      cta: 'Learn More',
    },
  ];

  return (
    <section className='border-b min-h-screen'>
      <div className='not-prose'>
        <div className='flex flex-col gap-6 items-center text-center mt-20'>
          <h3 className='text-4xl'>
            <Balancer>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Balancer>
          </h3>
          <h4 className='text-2xl font-light opacity-70'>
            <Balancer>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Balancer>
          </h4>
          <div className='mt-6 grid gap-6 md:mt-12 md:grid-cols-4'>
            {communityText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  key={index}
                  className='flex flex-col justify-between gap-6 round-lg brder p-6 transition-all hover:mt-2 hover:mb-4'
                >
                  <div className='grid gap-4'>
                    {icon}
                    <h4 className='font-bold text-xl text-primary'>{title}</h4>
                    <p className='text-base opacity-75'>{description}</p>
                  </div>
                  {cta && (
                    <div className='flex h-fit items-center text-sm font-semibold'>
                      <p>{cta}</p> <ArrowRight className='ml-2 h-4 w-4' />
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
