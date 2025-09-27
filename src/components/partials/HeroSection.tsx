import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiDribbble, FiFacebook, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';
import Button from '@/components/form/Button';

const HeroSection = () => {
  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar/man.png" width={180} height={180} alt="avatar" />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Mostafizur Rahman</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I&apos;m a{' '}
          <span className="font-semibold text-primary-500">
            Fullstack Developer
          </span>
        </div>
        <div className="mt-4  flex gap-5">
          <Link href="https://www.instragram.com" className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
            <FiInstagram size={25} />
          </Link>
          <Link href="https://www.twitter.com" className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
            <FiTwitter size={25} />
          </Link>
          <Link href="https://www.facebook.com" className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
            <FiFacebook size={25} />
          </Link>
          <Link href="https://www.dribble.com" className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
            <FiDribbble size={25} />
          </Link>
          <Link href="https://www.github.com" className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
            <FiGithub size={25} />
          </Link>
        </div>
        <Button className="mt-5 px-8">Hire Me</Button>
      </div>

      <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="mb-3 text-sm">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;