import React from "react";
import HeroSection from "@/components/views/hero-section";
import AboutMe from "@/components/views/about-me";
import Projects from "@/components/views/projects";
import Skills from "@/components/views/skills";
import Experience from "@/components/views/experience";
export default function Page() {
  return (
    <div id="Home" className="pb-10">
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
    </div>
  );
}
