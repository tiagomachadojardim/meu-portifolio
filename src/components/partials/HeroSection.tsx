"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';
import { startups } from '@/data/startups';

const HeroSection = () => {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setShowScrollHint(false);
      } else {
        setShowScrollHint(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="hero relative px-4">
      <div className="flex flex-col items-center max-w-4xl">
        <div className="overflow-hidden rounded-full border-4 border-primary-500/20 shadow-xl">
          <Image src="/images/avatar/avatar.png" width={180} height={180} alt="Tiago Jardim" />
        </div>
        <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center">
          Tiago Jardim
        </h1>
        <div className="mt-3 flex flex-col items-center gap-2 text-base md:text-lg lg:text-xl">
          <span className="font-semibold text-primary-500 text-center">
            Desenvolvedor Full Stack & Empreendedor
          </span>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl px-4 text-sm md:text-base">
            Cofundador de startups em HealthTech e soluções digitais. Transformo ideias em produtos
            de ponta a ponta.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-1">
            {startups.map((startup) => (
              <a
                key={startup.name}
                href={startup.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-200 hover:bg-primary-200 dark:hover:bg-primary-900 transition-colors font-medium"
              >
                {startup.name}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 md:gap-4 justify-center">
          <Link
            href="https://github.com/tiagomachadojardim"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 transition-all duration-150 hover:text-primary-500 hover:scale-110"
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tiagojardim-tech"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 transition-all duration-150 hover:text-primary-500 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </Link>
          <Link
            href="https://wa.me/5553997054143?text=Ol%C3%A1%20Tiago%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
            target="_blank"
            className="text-gray-700 dark:text-gray-300 transition-all duration-150 hover:text-primary-500 hover:scale-110"
            aria-label="WhatsApp"
          >
            <SiWhatsapp size={24} />
          </Link>
          <Link
            href="mailto:tiagomachadojardim@gmail.com"
            className="text-gray-700 dark:text-gray-300 transition-all duration-150 hover:text-primary-500 hover:scale-110"
            aria-label="Email"
          >
            <FiMail size={24} />
          </Link>
        </div>
      </div>
      {showScrollHint && (
        <div className="absolute bottom-0 flex flex-col items-center animate-fade-in">
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">Scroll Down</p>
          <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
            <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
