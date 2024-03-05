'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export default function ContactMe() {
  // Nodemailer
  const [message, setMessage] = useState('');
  const [sender_email, setSenderEmail] = useState('');

  // on form submit
  const sendMail = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender_email,
        message,
      }),
    });
    const responseData = await response.json();

    if (response.ok) {
      toast.success(responseData.message); // success
    } else {
      toast.error(responseData.message); // failure
    }

    console.log(responseData);
  };

  const { ref } = useSectionInView('Contact');

  return (
    <section ref={ref} id='contact' className='relative p-4'>
      <motion.section
        id='contact'
        ref={ref}
        className='z-[30] mx-auto mb-20 flex max-w-6xl flex-col gap-10 pt-28 text-center sm:mb-28'
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <div className='mx-auto w-full max-w-2xl '>
          <div className='flex flex-col justify-center'>
            <p className='flex justify-center text-center text-4xl text-highlight_fg'>Contact me</p>
            <p className='primary_fg/60 mt-2'>
              Contact me directly at <span className='text-primary_fg'>fabian@schlegel.one</span> or use this
              form.
            </p>
          </div>
          <form className='mt-10 flex flex-col text-primary_fg dark:text-primary_bg' onSubmit={sendMail}>
            <Input
              className='dark:secondary_bg/80 h-14 rounded-lg border border-accent3 px-4 outline-none transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 dark:bg-opacity-80 dark:text-primary_fg dark:outline-none '
              name='senderEmail'
              type='email'
              required
              maxLength={50}
              placeholder='Your email address'
              value={sender_email}
              onChange={(e) => {
                setSenderEmail(e.target.value);
              }}
            />
            <Textarea
              className='autosize-none dark:secondary_bg/80 my-3 h-52 rounded-lg  border border-accent3   p-4 outline-none  transition-all focus:ring-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 dark:bg-opacity-80 dark:text-primary_fg dark:outline-none dark:focus:bg-opacity-100 dark:focus:ring-1 dark:active:ring-1'
              name='message'
              placeholder='Message'
              required
              maxLength={5000}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <Button
              variant={'default'}
              className='h-10 w-full !bg-accent1 text-lg hover:scale-100'
              type='submit'
            >
              Send Email
            </Button>
            <Toaster />
          </form>
        </div>
      </motion.section>
    </section>
  );
}
