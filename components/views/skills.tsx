"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { developmentSkills, softSkills, technologicalSkills } from "@/data/data";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <div ref={ref} id="skills" className="mx-auto max-w-6xl pt-28 p-4">
      <p className="text-4xl font-semibold">Skills</p>

      <p className="mb-2 mt-5 font-bold text-black/60 dark:text-white/60">Development Skills</p>
      <div className="flex flex-wrap gap-2">
        {developmentSkills.map((skill, index) => (
          <motion.div
            key={index}
            className=" rounded-xl bg-secondary/80 p-5 py-2 md:text-lg font-semibold text-black dark:text-white"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.div>
        ))}
      </div>

      <p className="mb-2 mt-10 font-bold text-white/60">Technological Skills</p>
      <ul className="flex flex-wrap gap-2">
        {technologicalSkills.map((skill, index) => (
          <motion.li
            className=" rounded-xl bg-secondary/80 p-5 py-2 md:text-lg font-semibold text-black dark:text-white"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>

      <p className="mb-2 mt-10 font-bold text-white/60">Soft Skills</p>
      <ul className="flex flex-wrap gap-2">
        {softSkills.map((skill, index) => (
          <motion.li
            className=" rounded-xl bg-secondary/80 p-5 py-2 md:text-lg font-semibold text-black dark:text-white"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
