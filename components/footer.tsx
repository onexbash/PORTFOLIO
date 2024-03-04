import React from 'react';
import { FaDiscord, FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='mb-10 px-4 pb-10 text-center text-foreground/60 '>
      <div className='mx-auto mb-10 grid max-w-lg grid-cols-2 justify-center gap-4 sm:grid-cols-4'>
        <div className=' my-auto flex justify-center gap-4 rounded-lg p-6 px-10 transition-colors duration-300 hover:bg-[#0a66c2] hover:text-white'>
          <Link href={'https://www.linkedin.com/'}>
            <FaLinkedin size={40} />
          </Link>
        </div>
        <Link
          href={'https://github.com/'}
          className=' visible my-auto flex  justify-center gap-4 rounded-lg p-6 py-7 transition-colors duration-300 hover:bg-black hover:text-white'
        >
          <BsGithub size={35} />
        </Link>
        <Link
          href={'https://gmail.com/'}
          className=' my-auto flex justify-center gap-4 rounded-lg p-6 transition-colors duration-300 hover:bg-[#9c40ff] hover:text-white'
        >
          <IoMail size={40} />
        </Link>
        <Link
          href={'https://discord.com/'}
          className=' my-auto flex justify-center gap-4 rounded-lg p-6 transition-colors duration-300 hover:bg-[#7289DA] hover:text-white'
        >
          <FaDiscord size={40} />
        </Link>
      </div>

      <small className='mb-2 block text-xs text-[#cdd6f4]/60'>
        &copy; 2024 Fabian Schlegel. All rights reserved.
      </small>
      <p className='text-xs text-[#cdd6f4]/60'>
        <span className='font-semibold'>About this website:</span> built with React & Next.js (App Router &
        Server Actions), TypeScript, Tailwind CSS, Framer Motion, Nodemailer, Vercel hosting, PNPM.
      </p>
    </footer>
  );
}
