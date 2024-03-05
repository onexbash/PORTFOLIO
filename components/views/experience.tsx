'use client';

import React from 'react';
import SectionHeading from '@/components/section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/data/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.2);
  const { theme } = useTheme();

  return (
    <section ref={ref} id='experience' className='bg- relative mx-auto mt-28 max-w-6xl scroll-mt-28'>
      <div className='absolute bottom-0 left-6 z-20 h-80 w-4 md:left-10 '></div>
      <SectionHeading key={'left'}>My experience</SectionHeading>
      <VerticalTimeline
        layout={'1-column-left'}
        lineColor={theme === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(180, 190, 254, 0.08)'}
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: 'var(--secondary_bg)',
                boxShadow: 'none',
                textAlign: 'left',
                // padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: '0.5rem solid var(--accent3)',
              }}
              // date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'var(--secondary_bg)',
                fontSize: '1.5rem',
              }}
            >
              <div className='grid-cols-4 gap-5 md:grid'>
                <div className='flex h-fit !w-full flex-col pt-6 md:items-center md:justify-center'>
                  <Image
                    alt='company logo'
                    width={200}
                    height={200}
                    src={item.logo}
                    className='w-28 rounded-full bg-white p-4'
                  />
                  <p className=' mt-4 !font-bold md:text-center '>{item.company}</p>
                  <p className='!mt-1 !text-[14px] !font-extralight text-primary_fg '>{item.date}</p>
                  <div className='mt-3 bg-accent3 p-[1px] md:mt-0 md:bg-transparent md:p-0' />
                </div>
                <div className='col-span-3 pt-6'>
                  <h3 className='text-2xl capitalize text-accent2'>{item.title}</h3>

                  <p className='!mt-2 !text-sm !font-light text-primary_fg'>{item.description}</p>

                  <p className='!mt-7 text-highlight_fg'>Responsibilities</p>
                  <div className='mt-2'>
                    {item.tasks.map((task) => (
                      <li key={task} className='!text-sm text-secondary_fg'>
                        {task}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
