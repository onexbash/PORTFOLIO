'use client';

import { EvervaultCard } from '@/components/ui/evervault-card';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaXTwitter } from 'react-icons/fa6';
import {
  IconCloudflare,
  IconCSS,
  IconFigma,
  IconFirebase,
  IconGit,
  IconHTML,
  IconJavascript,
  IconJest,
  IconMarkdown,
  IconMySQL,
  IconNextJS,
  IconNodeJS,
  IconPostgres,
  IconPrisma,
  IconPython,
  IconReactJS,
  IconTailwindcss,
  IconTypescript,
  IconVite,
  IconVSCode,
} from '@/components/icons';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from 'next-themes';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

interface IconLink {
  href: string;
  Component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
}

export default function AboutMe() {
  const { ref } = useSectionInView('About me', 0.3);
  const { theme } = useTheme();

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

  const iconData = [
    { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML', IconComponent: IconHTML },
    { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS', IconComponent: IconCSS },
    { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', IconComponent: IconJavascript },
    { href: 'https://www.typescriptlang.org', IconComponent: IconTypescript },
    { href: 'https://www.figma.com', IconComponent: IconFigma },
    { href: 'https://tailwindcss.com', IconComponent: IconTailwindcss },
    { href: 'https://nextjs.org', IconComponent: IconNextJS },
    { href: 'https://reactjs.org', IconComponent: IconReactJS },
    { href: 'https://www.python.org', IconComponent: IconPython },
    { href: 'https://www.postgresql.org', IconComponent: IconPostgres },
    { href: 'https://www.prisma.io', IconComponent: IconPrisma },
    { href: 'https://www.mysql.com', IconComponent: IconMySQL },
    { href: 'https://firebase.google.com', IconComponent: IconFirebase },
    { href: 'https://git-scm.com', IconComponent: IconGit },
    { href: 'https://vitejs.dev', IconComponent: IconVite },
    { href: 'https://code.visualstudio.com', IconComponent: IconVSCode },
    { href: 'https://www.cloudflare.com', IconComponent: IconCloudflare },
    { href: 'https://www.markdownguide.org', IconComponent: IconMarkdown },
    { href: 'https://jestjs.io', IconComponent: IconJest },
    { href: 'https://nodejs.org/en', IconComponent: IconNodeJS },
  ];

  return (
    <section id='about-me' ref={ref} className='mx-auto max-w-6xl p-4 pt-28'>
      <div className='flex justify-center'>
        <motion.p
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={variants}
          className='heading text-gradient  from-foreground to-foreground/60 text-center '
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
          <FavouriteStack />
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
    <div className='relative flex items-center justify-center rounded-full text-4xl font-bold text-white'>
      <Image
        src='/images/avatar.png'
        width={200}
        height={200}
        alt='Fabian Schlegel'
        className='w-40 select-none rounded-full border border-zinc-300 bg-white/10 backdrop-blur-lg dark:border-0 dark:bg-white/10'
      ></Image>
    </div>
  );
}

function BoxOne() {
  return (
    <p className='text-lg text-[#181825]/60 dark:text-[#cdd6f4]/60'>
      Hey there! I'm <span className='bento-grid-text'>Fabian Schlegel</span>, a 21-year-old with a passion
      for <span className='bento-grid-text'>Cyber security and Tech</span> . Ever since I started my career,
      I've been diving deep into the world of{' '}
      <span className='italic dark:text-[#cdd6f4]/90'>Identity & Access Management (IAM)</span>, working on
      impactful projects that helped me become a quick learner and a skilled consultant. But hold on tight,
      because even though I'm comfortable navigating the world of advice and solutions, my career also extends
      the world of technical implementation. Think intricate systems, clever coding, and making sure
      everything runs smoothly – that's my happy place!
    </p>
  );
}

function CompletedProjects() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='text-5xl font-bold'>30+</span>
      <span className='mt-1 whitespace-nowrap text-center text-foreground/70'>Completed Projects</span>
    </div>
  );
}

function Experience() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='text-5xl font-bold'>3+</span>
      <span className='mt-1 whitespace-nowrap text-center text-foreground/70'>Experience</span>
    </div>
  );
}

function DescriptionTwo() {
  return (
    <p className='text-lg text-[#181825]/50 dark:text-[#cdd6f4]/60'>
      Beyond the world of security, I'm also a self-taught{' '}
      <span className='bento-grid-text'>Full Stack Developer</span> , having spent my free time mastering both{' '}
      <span className='italic text-[#181825] dark:text-[#cdd6f4]/90'>front-end and back-end development</span>{' '}
      . This dual expertise allows me to see projects from a unique perspective, ensuring secure systems with
      user-friendly interfaces.
    </p>
  );
}

function FavouriteStack() {
  const { theme } = useTheme();
  const iconData = [
    { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML', IconComponent: IconHTML },
    { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS', IconComponent: IconCSS },
    { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', IconComponent: IconJavascript },
    { href: 'https://www.typescriptlang.org', IconComponent: IconTypescript },
    { href: 'https://www.figma.com', IconComponent: IconFigma },
    { href: 'https://tailwindcss.com', IconComponent: IconTailwindcss },
    { href: 'https://nextjs.org', IconComponent: IconNextJS },
    { href: 'https://reactjs.org', IconComponent: IconReactJS },
    { href: 'https://www.python.org', IconComponent: IconPython },
    { href: 'https://www.postgresql.org', IconComponent: IconPostgres },
    { href: 'https://www.prisma.io', IconComponent: IconPrisma },
    { href: 'https://www.mysql.com', IconComponent: IconMySQL },
    { href: 'https://firebase.google.com', IconComponent: IconFirebase },
    { href: 'https://git-scm.com', IconComponent: IconGit },
    { href: 'https://vitejs.dev', IconComponent: IconVite },
    { href: 'https://code.visualstudio.com', IconComponent: IconVSCode },
    { href: 'https://www.cloudflare.com', IconComponent: IconCloudflare },
    { href: 'https://www.markdownguide.org', IconComponent: IconMarkdown },
    { href: 'https://jestjs.io', IconComponent: IconJest },
    { href: 'https://nodejs.org/en', IconComponent: IconNodeJS },
  ];

  return (
    <div>
      Favourite Stack
      <Marquee
        autoFill
        pauseOnHover
        className='mt-6 flex '
        gradient={true}
        gradientColor={`${theme === 'light' ? '#F4F4F5' : '#232336'}`}
      >
        {iconData.map(({ href, IconComponent }, index) => (
          <a target='_blank' key={index} href={href}>
            <IconComponent className='me-4' width='52' height='52' />
          </a>
        ))}
      </Marquee>
    </div>
  );
}

function LinkedIn() {
  return (
    <Link href={'https://www.linkedin.com/'}>
      {' '}
      <FaLinkedin size={80} />
    </Link>
  );
}
