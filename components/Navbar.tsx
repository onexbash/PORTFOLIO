'use client';

import { useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ModeToggle } from '@/components/mode-toggler';
import { useActiveSectionContext } from '@/components/active-session-context';
import { links } from '@/data/data';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { IconFavicon } from '@/components/icons/favicon';
import FaviconSVG from '@/public/icons/favicon.svg';

import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className='z-[1000] '>
      <div className='fixed top-0 w-full  '>
        <motion.nav
          aria-label='Global'
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className='!backdrop-blur-md'
        >
          <div className=' mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl bg-secondary_bg p-2 px-5 opacity-80 shadow shadow-primary_bg !backdrop-blur-md'>
            <div className='flex md:flex-1'>
              <Link href='/' className='ms-3 h-8 w-8 p-1.5 outline-none'>
                <IconFavicon className='h-6 w-6 text-accent2' fill='currentColor' />
              </Link>
            </div>
            <div className='flex md:hidden'>
              <button
                type='button'
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon className='h-6 w-6 text-foreground' aria-hidden='true' />
              </button>
            </div>
            <Popover.Group className='hidden md:flex md:gap-x-6'>
              {links.map((link) => (
                <li className='relative flex  items-center justify-center' key={link.hash}>
                  <Link
                    className={clsx(
                      `flex w-full items-center justify-center px-3 py-1 text-sm transition    ${
                        activeSection === link.name
                          ? 'text-accent_fg'
                          : ' out hovertxt rounded-full outline-none '
                      }`
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className='active-header-link absolute inset-0 -z-10 rounded-full text-primary_fg outline-none'
                        layoutId='activeSection'
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 50,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </li>
              ))}
            </Popover.Group>
            <div className='me-3 hidden md:flex md:flex-1 md:justify-end'>
              <ModeToggle />
            </div>
          </div>
        </motion.nav>
      </div>
      <Dialog as='div' className='md:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='!bg-background_bg fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 backdrop-blur-md md:max-w-sm md:ring-1 md:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='ms-3 h-8 w-8 p-1.5 outline-none'>
              <IconFavicon className='h-6 w-6 text-accent2' fill='currentColor' />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6 text-primary_fg' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-accent3'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => <></>}
                </Disclosure>
                {links.map((link) => (
                  <li className='relative flex  items-center justify-center' key={link.hash}>
                    <Link
                      className={clsx(
                        `flex w-full items-center justify-center rounded-2xl px-3 py-4 text-sm transition    ${
                          activeSection === link.name ? 'text-accent_fg' : ' hovertxt'
                        }`
                      )}
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                      }}
                    >
                      {link.name}

                      {link.name === activeSection && (
                        <motion.span
                          className='absolute inset-0 -z-10  rounded-full bg-accent1 text-accent_fg'
                          layoutId='activeSection'
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 50,
                          }}
                        ></motion.span>
                      )}
                    </Link>
                  </li>
                ))}
              </div>
              <div className='py-6'>
                <ModeToggle />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
