'use client';

import React from 'react';
import SimpleMenu from '@/components/partials/SimpleMenu';
import Footer from '@/components/partials/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FiArrowUp } from 'react-icons/fi';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop
        smooth
        className="fixed bottom-16 right-8 z-10 cursor-pointer rounded-lg bg-primary-500 p-3 text-white transition-colors duration-150 hover:bg-primary-600 shadow-lg"
        component={
          <div className="flex justify-center">
            <FiArrowUp />
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
