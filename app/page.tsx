import React from 'react';
import HeroSection from '@/components/views/hero-section';
import AboutMe from '@/components/views/about-me';
import Projects from '@/components/views/projects';
import Skills from '@/components/views/skills';
import Experience from '@/components/views/experience';
import ContactMe from '@/components/views/contact-me';
export default function Page() {
  return (
    <div id='Home' className='pb-10'>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <ContactMe />
    </div>
  );
}
