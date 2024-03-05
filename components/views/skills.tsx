'use client';
import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import { developmentSkills, softSkills, technologicalSkills } from '@/data/data';
import { motion } from 'framer-motion';

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <div ref={ref} id='skills' className='mx-auto max-w-6xl p-4 pt-28'>
      <p className='text-4xl font-semibold text-highlight_fg'>Skills</p>

      <p className='mb-2 mt-5 font-bold text-primary_fg'>Development</p>
      <div className='flex flex-wrap gap-2'>
        {developmentSkills.map((skill, index) => (
          <motion.div
            key={index}
            className='rounded-xl bg-secondary_bg p-5 py-2 font-semibold text-secondary_fg md:text-lg'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.div>
        ))}
      </div>

      <p className='mb-2 mt-10 font-bold text-primary_fg'>Technologies</p>
      <ul className='flex flex-wrap gap-2'>
        {technologicalSkills.map((skill, index) => (
          <motion.li
            className='rounded-xl bg-secondary_bg p-5 py-2 font-semibold text-secondary_fg md:text-lg'
            key={index}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>

      <p className='mb-2 mt-10 font-bold text-primary_fg'>Soft Skills</p>
      <ul className='flex flex-wrap gap-2'>
        {softSkills.map((skill, index) => (
          <motion.li
            className='rounded-xl bg-secondary_bg p-5 py-2 font-semibold text-secondary_fg md:text-lg'
            key={index}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
