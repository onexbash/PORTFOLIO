import React from "react";
import HeroSection from "@/components/views/hero-section";
import AboutMe from "@/components/views/about-me";
import Projects from "@/components/views/projects";

export default function Page() {
  return (
    <div id="Home" className="pb-10">
      <HeroSection />
      <AboutMe />
      <Projects />
    </div>
  );
}
