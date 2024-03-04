"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HiOutlineDownload } from "react-icons/hi";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";

import { PiDotFill } from "react-icons/pi";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [currentTheme, setCurrentTheme] = useState<string>("");
  const { theme } = useTheme();
  const { ref } = useSectionInView("Home", 0.5);

  useEffect(() => {
    setCurrentTheme(theme ?? ""); // Use an empty string as a default value
  }, [theme]); // Add 'theme' as a dependency

  return (
    <section ref={ref} id="home" className="mt-10 md:mt-28 p-4">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.1 }}
        className="gap- relative mx-auto flex max-w-6xl flex-col items-center justify-between py-20 text-center"
      >
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <Image
              src="/images/avatar.png"
              width={200}
              height={200}
              alt="Fabian Schlegel"
              className="w-40 unblur-animation rounded-full border border-zinc-300 bg-white/10 dark:border-0 backdrop-blur-lg dark:bg-white/10"
            ></Image>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.1 }}
          >
            <div className="mt-10 text-3xl md:text-5xl font-bold text-foreground">
              Hello, 👋 I'm Fabian Schlegel.
            </div>
            <p className="text-sm md:text-base mt-6 max-w-3xl text-black/60 dark:text-text_color opacity-80">
              Hello! I'm a 21-year-old Identity & Access Management professional. I specialize in technical
              implementation, a skill honed through key projects. My passion extends to cybersecurity, and
              I've also delved into Full Stack Development in my free time.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-5 mt-10">
              <a target="_blank" href="/downloads/resume-fabian-schlegel.pdf" className="outline-none">
                <Button
                  variant={"default"}
                  className="!bg-lavendar_color rounded-full text-lg w-full"
                  size={"xl"}
                >
                  Download Resume
                  <HiOutlineDownload size={20} />
                </Button>
              </a>
              <Link href="#contact">
                <Button variant={"outline"} className="rounded-full text-lg ps-14 pe-20 w-full " size={"xl"}>
                  <PiDotFill size={36} className="mb-[2px] text-green-400" />
                  Hire Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
