import Link from 'next/link';
import { techlinks, techfill, iconComponents } from '@/components/icons/technologies';
import Marquee from 'react-fast-marquee';
export function CoreTechnologies() {
  return (
    <div>
      Core Technologies
      <Marquee autoFill className=' mt-6 flex'>
        {Object.keys(techlinks).map((iconName) => {
          const IconComponent = iconComponents[iconName];
          if (!IconComponent) {
            console.error(`Missing component for icon: ${iconName}`);
            return null;
          }
          return (
            <Link href={techlinks[iconName]} key={iconName}>
              <div className='hoverbg mx-4 h-16 w-16 rounded-lg bg-secondary_bg'>
                <IconComponent className='w-full p-1 text-secondary_bg' fill={techfill[iconName]} />
              </div>
            </Link>
          );
        })}
      </Marquee>
    </div>
  );
}
