'use client';

import { Theme, useTheme } from '@/hooks/use-theme';
import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';

const SimpleMenu = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Sobre', href: '/#about' },
    { name: 'Projetos', href: '/#works' },
    { name: 'CV', href: '/cv' },
    { name: 'Contato', href: '/#contact' },
  ];

  return (
    <header className="header text-gray-700 dark:text-gray-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 md:px-6">
        <Link href="/" className="text-3xl font-bold">
          <span>Tiago Jardim</span>
          <span className="text-primary-500">.</span>
        </Link>
        
        <nav className="ml-auto hidden items-center md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                'px-4 py-2 font-semibold transition-colors duration-300 hover:text-primary-600 hover:underline',
                {
                  'text-primary-500': pathname === item.href,
                }
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="ml-auto transition-colors duration-150 hover:text-primary-500 md:-mt-0.5 md:ml-3"
          onClick={() => toggleTheme()}
        >
          {theme === Theme.LIGHT ? <BsMoonStars size={20} /> : <BsSun size={20} />}
        </button>

        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="ml-5 flex text-gray-700 dark:text-gray-200 md:hidden"
          aria-label="Open menu"
        >
          <HiMenuAlt3 size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-40 flex md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform origin-right"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform origin-right"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex h-full w-full max-w-xs flex-1 flex-col bg-white dark:bg-gray-800 pt-5">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="text-white">&#10006;</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex h-full flex-col overflow-y-auto">
                <div className="border-b px-2 pb-4 dark:border-gray-700">
                  <Link href="/" className="text-3xl font-bold">
                    <span>Tiago Jardim</span>
                    <span className="text-primary-500">.</span>
                  </Link>
                </div>
                <nav className="mt-4 space-y-1 px-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        'group flex items-center px-2 py-2 text-base font-medium transition-colors duration-150 hover:text-primary-600',
                        { 'text-primary-500': pathname === item.href }
                      )}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true" />
        </Dialog>
      </Transition.Root>
    </header>
  );
};

export default SimpleMenu;
