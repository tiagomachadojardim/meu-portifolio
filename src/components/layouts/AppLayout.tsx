'use client';

import React from 'react';
import Menu from '@/components/partials/Menu';
import ScrollToTop from 'react-scroll-to-top';
import { FiAnchor } from 'react-icons/fi';

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
          className="fixed bottom-16 right-8 z-50 cursor-pointer rounded-xl bg-white/5 backdrop-blur-md p-3 text-primary-500 shadow-lg ring-1 ring-white/10 transition duration-200 hover:bg-primary-500/20 hover:scale-105"
          component={
            <div className="flex justify-center">
              <FiAnchor className="w-5 h-5 text-primary-500" />
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
