import Link from 'next/link';
import { techlinks, techfill, iconComponents } from '@/components/icons/technologies';
import { useTheme } from 'next-themes';
import Marquee from 'react-fast-marquee';
export function CoreTechnologies() {
  const { theme } = useTheme();

  return (
    <div>
      Core Technologies
      <Marquee autoFill pauseOnHover className=' mt-6 flex'>
        {Object.keys(techlinks).map((iconName) => {
          const IconComponent = iconComponents[iconName];
          if (!IconComponent) {
            console.error(`Missing component for icon: ${iconName}`);
            return null;
          }
          return (
            <Link href={techlinks[iconName]} key={iconName}>
              <div className='hoverbg mx-4 h-16 w-16 rounded-xl'>
                <IconComponent className='w-full p-1' fill={techfill[iconName]} />
              </div>
            </Link>
          );
        })}
      </Marquee>
    </div>
  );
}