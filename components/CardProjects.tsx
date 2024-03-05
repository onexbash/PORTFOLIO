import '@/css/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const CardProjects = ({ href, title, imgSrc, company, tasks, description, ...props }) => (
  <Card className={cn('group flex h-full  justify-between')} {...props}>
    <div>
      <CardHeader>
        <div className=''>
          <Link
            target='_blank'
            className='hovertxt font-semibold text-secondary_fg'
            href={href}
            aria-label={`Link to ${company}`}
          >
            {company}
          </Link>
        </div>

        <CardTitle className='text-xl font-bold text-highlight_fg md:text-3xl'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='overflow-hidden '>
        <div className='relative  gap-6'>
          <div className='w-80` relative h-40 flex-shrink-0 overflow-hidden rounded-md'>
            <Image
              alt={title}
              src={imgSrc}
              className='h-full w-full  rounded-md object-cover object-center transition-all duration-500 group-hover:scale-105'
              width={800}
              height={800}
            />
          </div>
          <div>
            <div className='py-6 pt-3'>
              <p className='  max-w-none text-sm text-secondary_fg'>{description}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </div>
  </Card>
);

export default CardProjects;
