"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiGlobe } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const HeroSection = () => {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      // Esconde o indicador quando o usuário rolar mais que 80px
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
    <div className="hero relative -mt-16 flex items-center justify-center px-4">
      <div className="flex flex-col items-center max-w-4xl">
        <div className="overflow-hidden rounded-full border-4 border-primary-500/20 shadow-xl">
          <Image src="/images/avatar/man.png" width={180} height={180} alt="Tiago Jardim" />
        </div>
        <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center">
          Tiago Jardim
        </h1>
        <div className="mt-3 flex flex-col items-center gap-1 text-base md:text-lg lg:text-xl">
          <span className="font-semibold text-primary-500 text-center">
            Desenvolvedor Full Stack & Fundador
          </span>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl px-4 text-sm md:text-base">
            Transformando ideias em produtos digitais. Fundador da <span className="text-primary-500 font-semibold">Bientech</span>
          </p>
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
            href="https://linkedin.com/in/tiago-jardim" 
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
            href="https://bientech.com.br" 
            target="_blank"
            className="text-gray-700 dark:text-gray-300 transition-all duration-150 hover:text-primary-500 hover:scale-110"
            aria-label="Bientech Website"
          >
            <FiGlobe size={24} />
          </Link>
          <Link 
            href="mailto:tiagomachadojardim@gmail.com" 
            className="text-gray-700 dark:text-gray-300 transition-all duration-150 hover:text-primary-500 hover:scale-110"
            aria-label="Email"
          >
            <FiMail size={24} />
          </Link>
        </div>
        {/* CTAs removidos conforme pedido */}
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