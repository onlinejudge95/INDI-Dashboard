'use client';

import React from 'react';
import { FaCoins } from 'react-icons/fa';
import Balancer from 'react-wrap-balancer';

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Features: React.FC = () => {
  const featureText: FeatureText[] = [
    {
      icon: <FaCoins className='h-6 w-6' />,
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: <FaCoins className='h-6 w-6' />,
      title: 'Lorem Ipsum',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      icon: <FaCoins className='h-6 w-6' />,
      title: 'Lorem Ipsum',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
          <div className='mt-6 grid gap-6 md:mt-12 md:grid-cols-3'>
            {featureText.map(({ icon, title, description }, index) => (
              <div
                className='flex flex-col gap-4 mx-10 text-primary'
                key={index}
              >
                {icon}
                <h4 className='font-bold text-xl text-primary'>{title}</h4>
                <p className='text-base opacity-75'>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
