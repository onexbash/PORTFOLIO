'use client';
import { useMotionValue } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useMotionTemplate, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const EvervaultCard = ({
  text,
  className,
  component: Component,
}: {
  text?: string;
  className?: string;
  component: any;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState('');

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        'relative  flex   h-full w-full select-none items-center justify-center bg-transparent p-0.5',
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className='group/card relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-4 py-7 md:p-10  '
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
        <div className='relative z-10 flex items-center justify-center py-10 md:py-0'>
          <Component />{' '}
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className='pointer-events-none'>
      <div className='absolute inset-0 rounded-lg  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50'></div>
      <motion.div
        className='absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500/40 to-purple-500/40 opacity-0  backdrop-blur-xl transition duration-500 group-hover/card:opacity-100'
        style={style}
      />
      <motion.div
        className='absolute inset-0 rounded-lg opacity-0 mix-blend-overlay  group-hover/card:opacity-100'
        style={style}
      ></motion.div>
    </div>
  );
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  );
};
