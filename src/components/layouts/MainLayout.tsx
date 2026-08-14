'use client';

import React from 'react';
import SimpleMenu from '@/components/partials/SimpleMenu';
import Footer from '@/components/partials/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FiAnchor } from 'react-icons/fi';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop
        smooth
        className="fixed bottom-16 right-8 z-50 cursor-pointer rounded-xl bg-white p-3 text-primary-500 shadow-lg ring-1 ring-gray-200 transition duration-200 hover:bg-primary-50 hover:scale-105 dark:bg-white/10 dark:ring-white/10 dark:hover:bg-primary-500/20"
        component={
          <div className="flex justify-center">
            <FiAnchor className="w-5 h-5 text-primary-500" />
          </div>
        }
      />
      <SimpleMenu />
      <div className="mt-16">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
