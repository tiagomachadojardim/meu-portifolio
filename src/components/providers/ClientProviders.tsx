'use client';

import React from 'react';
import { ThemeProvider } from '@/hooks/use-theme';
import MainLayout from '@/components/layouts/MainLayout';

interface Props {
  children: React.ReactNode;
}

const ClientProviders: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <MainLayout>
        {children}
      </MainLayout>
    </ThemeProvider>
  );
};

export default ClientProviders;
