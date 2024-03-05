'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HiOutlineDownload } from 'react-icons/hi';
import { Handshake } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSectionInView } from '@/lib/hooks';

import { PiDotFill } from 'react-icons/pi';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const [currentTheme, setCurrentTheme] = useState<string>('');
  const { theme } = useTheme();
  const { ref } = useSectionInView('Home', 0.5);

  useEffect(() => {
    setCurrentTheme(theme ?? ''); // Use an empty string as a default value
  }, [theme]); // Add 'theme' as a dependency

  return (
    <section ref={ref} id='home' className='mt-10 p-4 md:mt-28'>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.1 }}
        className='gap- relative mx-auto flex max-w-6xl flex-col items-center justify-between py-20 text-center'
      >
        <div className='flex flex-col items-center justify-center'>
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <Image
              src='/images/avatar.png'
              width={300}
              height={300}
              alt='Fabian Schlegel'
              className='unblur-animation 0 w-40 rounded-full bg-transparent shadow shadow-accent1 backdrop-blur-lg'
            />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
          >
            <div className='mt-10 text-3xl font-bold text-highlight_fg md:text-5xl'>
              Hello World 👋, I'm Fabian Schlegel.
            </div>
            <p className='mt-6 max-w-3xl text-sm text-primary_fg opacity-80 md:text-base'>
              I'm a 21-year-old Identity & Access Management professional from germany specializing in
              technical implementation, a skill honed through key projects. My passion extends to
              cybersecurity, and I've also delved into Full Stack Development in my free time.
            </p>
            <div className='mt-10 flex flex-col justify-center gap-5 md:flex-row'>
              <a target='_blank' href='/downloads/resume-fabian-schlegel.pdf' className='outline-none'>
                <Button
                  variant={'default'}
                  className='w-full rounded-full !bg-accent2 text-lg opacity-70'
                  size={'xl'}
                >
                  Download Resume
                  <HiOutlineDownload size={20} />
                </Button>
              </a>
              <Link href='#contact'>
                <Button
                  variant={'outline'}
                  className='w-full rounded-full bg-accent1 ps-14 text-lg text-accent_fg opacity-70 hover:text-accent_fg'
                  size={'xl'}
                >
                  Contact Me
                  <Handshake size={18} className='mt-[1px]' />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
