'use client';

import React from 'react';
import Menu from '@/components/partials/Menu';
import ScrollToTop from 'react-scroll-to-top';
import { FiArrowUp } from 'react-icons/fi';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
        <ScrollToTop
          smooth
          className="fixed bottom-16 right-8 z-10 cursor-pointer rounded-lg bg-primary-500 p-3 text-white transition-colors duration-150 hover:bg-primary-600 shadow-lg"
          component={
            <div className="flex justify-center">
              <FiArrowUp />
            </div>
          }
        />
        <Menu />
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
};

export default AppLayout;
