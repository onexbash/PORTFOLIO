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
      <div className='absolute bottom-0 left-6 z-20 h-80 w-4 bg-gradient-to-t from-white dark:from-[#181825] md:left-10 '></div>
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
                background: theme === 'light' ? '#f3f4f6' : 'rgba(180, 190, 254, 0.08)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                // padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light' ? '0.4rem solid #9ca3af' : '0.4rem solid rgba(180, 190, 254, 0.5)',
              }}
              // date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? 'white' : '#27272a',
                fontSize: '1.5rem',
              }}
            >
              <div className='grid-cols-4 gap-5 md:grid'>
                <div className='flex h-fit !w-full flex-col pt-6 md:items-center md:justify-center'>
                  <Image
                    alt='company logo'
                    width={400}
                    height={400}
                    src={item.logo}
                    className='w-28 rounded-full bg-white p-4'
                  ></Image>
                  <p className=' mt-4 !font-bold md:text-center '>{item.company}</p>
                  <p className='!mt-1 !text-[14px] !font-extralight text-black/60 dark:text-[#cdd6f4]/60'>
                    {item.date}
                  </p>
                  <div className='mt-3 bg-white/10 p-[1px]'></div>
                </div>
                <div className='col-span-3 pt-6'>
                  <h3 className='text-2xl  capitalize'>{item.title}</h3>

                  <p className='!mt-2 !text-sm !font-light text-gray-700 dark:text-[#cdd6f4]/90'>
                    {item.description}
                  </p>

                  <p className='!mt-7'>Responsibilities</p>
                  <div className='mt-2'>
                    {item.tasks.map((task) => (
                      <li key={task} className='!text-sm text-gray-700 dark:text-[#cdd6f4]/60'>
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
