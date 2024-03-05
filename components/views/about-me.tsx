'use client';

import { EvervaultCard } from '@/components/ui/evervault-card';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { CoreTechnologies } from '@/components/CoreTechnologies';

import { techlinks, techfill, iconComponents } from '@/components/icons/technologies';

import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from 'next-themes';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function AboutMe() {
  const { ref } = useSectionInView('About me', 0.3);

  const variants = {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5, // Duration of the animation
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id='about-me' ref={ref} className='mx-auto max-w-6xl p-4 pt-28'>
      <div className='flex justify-center'>
        <motion.p
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={variants}
          className='heading text-center text-accent3 '
        >
          About me
        </motion.p>
      </div>
      <div className='mt-10 flex grid-cols-5 flex-col gap-5 md:grid'>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={variants}
          className='bento-grid-box col-span-3 !p-0'
        >
          <EvervaultCard component={BoxOne} />
        </motion.div>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={variants}
          className='bento-grid-box relative col-span-2 flex items-center justify-center !p-0 py-5'
        >
          <EvervaultCard component={AboutImage} />
        </motion.div>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={variants}
          className='bento-grid-box col-span-1 flex flex-col items-center justify-center !p-0'
        >
          <EvervaultCard component={CompletedProjects} />
        </motion.div>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={variants}
          className='bento-grid-box col-span-1 flex flex-col items-center justify-center !p-0'
        >
          <EvervaultCard component={Experience} />
        </motion.div>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={variants}
          className='bento-grid-box col-span-3 !p-0'
        >
          <EvervaultCard component={DescriptionTwo} />
        </motion.div>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={variants}
          className='bento-grid-box col-span-4 mb-3 h-full text-center'
        >
          <CoreTechnologies />
        </motion.div>

        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={variants}
          className='bento-grid-box col-span-1 flex flex-col items-center justify-center !p-0'
        >
          <EvervaultCard component={LinkedIn} />
        </motion.div>
      </div>
    </section>
  );
}

function AboutImage() {
  return (
    <div className='relative flex items-center justify-center rounded-full'>
      <Image
        src='/images/avatar.png'
        width={400}
        height={400}
        alt='Fabian Schlegel'
        className=' w-40 select-none rounded-full bg-primary_bg shadow shadow-accent1 backdrop-blur-lg'
      ></Image>
    </div>
  );
}

function BoxOne() {
  return (
    <p className='text-secondary_fg md:text-lg'>
      I started my career in the IT industry with an Apprenticeship as IT Specialist back in 2019. After
      graduating I immediately found my way into the world of
      <span className='text-primary_fg '> Identity & Access Management.</span> Through my active participation
      in influential projects, I swiftly acquired essential skills both in the area of consulting and
      technical implementation. My active involvement in influential projects equipped me with essential
      skills in both consulting and technical implementation. While I appreciate the consulting industry, my
      true passion lies in hands-on engineering and programming — I couldn’t imagine life without it.
    </p>
  );
}

function CompletedProjects() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='text-5xl font-bold'>
        5
        <span className='text-foreground/70 ml-2 whitespace-nowrap text-center align-middle text-sm font-normal'>
          years
        </span>
      </span>
      <span className='text-foreground/70 mt-1 whitespace-nowrap text-center font-bold'>IT Experience</span>
    </div>
  );
}

function Experience() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='text-5xl font-bold'>
        2
        <span className='text-foreground/70 ml-2 whitespace-nowrap text-center align-middle text-sm font-normal'>
          years
        </span>
      </span>
      <span className='text-foreground/70 mt-1 whitespace-nowrap text-center font-bold'>IAM Experience</span>
    </div>
  );
}

function DescriptionTwo() {
  return (
    <p className='text-lg text-[#181825]/50 dark:text-[#cdd6f4]/60'>
      In addition to my full-time job in cybersecurity (IAM), I’ve dedicated significant free time over the
      past two years to self-teaching web development. I take pride in being a self-taught full-stack
      developer
    </p>
  );
}

function LinkedIn() {
  return (
    <Link href={'https://www.linkedin.com/in/fabian-schlegel'}>
      {' '}
      <FaLinkedin size={80} />
    </Link>
  );
}
