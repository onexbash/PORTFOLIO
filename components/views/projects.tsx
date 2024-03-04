'use client';
import React from 'react';
import { motion } from 'framer-motion';
import CardProjects from '@/components/CardProjects';
import { projectsData } from '@/data/data';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);
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
    <section ref={ref} id='projects' className='p-4 pt-28'>
      {' '}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className='mx-auto max-w-6xl'
      >
        <motion.p
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={variants}
          className='heading'
        >
          Projects
        </motion.p>
        <div className='grid grid-cols-1 gap-4 pt-12 xl:grid-cols-2'>
          {projectsData.map((projects) => (
            <motion.div
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              variants={variants}
              key={projects.title}
            >
              <CardProjects
                key={projects.title}
                title={projects.title}
                description={projects.description}
                tasks={projects.tasks}
                imgSrc={projects.imgSrc}
                href={projects.url}
                company={projects.company}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
