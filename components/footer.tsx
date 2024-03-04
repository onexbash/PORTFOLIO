import React from "react";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-foreground/60 pb-10 ">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 justify-center mb-10 max-w-lg mx-auto">
        <div className=" flex gap-4 justify-center my-auto p-6 px-10 rounded-lg hover:bg-[#0a66c2] hover:text-white transition-colors duration-300">
          <Link href={"https://www.linkedin.com/"}>
            <FaLinkedin size={40} />
          </Link>
        </div>
        <Link
          href={"https://github.com/"}
          className=" flex gap-4 visible  justify-center my-auto p-6 py-7 rounded-lg hover:bg-black hover:text-white transition-colors duration-300"
        >
          <BsGithub size={35} />
        </Link>
        <Link
          href={"https://gmail.com/"}
          className=" flex gap-4 justify-center my-auto p-6 rounded-lg hover:bg-[#9c40ff] hover:text-white transition-colors duration-300"
        >
          <IoMail size={40} />
        </Link>
        <Link
          href={"https://discord.com/"}
          className=" flex gap-4 justify-center my-auto p-6 rounded-lg hover:bg-[#7289DA] hover:text-white transition-colors duration-300"
        >
          <FaDiscord size={40} />
        </Link>
      </div>

      <small className="mb-2 block text-[#cdd6f4]/60 text-xs">
        &copy; 2024 Fabian Schlegel. All rights reserved.
      </small>
      <p className="text-xs text-[#cdd6f4]/60">
        <span className="font-semibold">About this website:</span> built with React & Next.js (App Router &
        Server Actions), TypeScript, Tailwind CSS, Framer Motion, Nodemailer, Vercel hosting, PNPM.
      </p>
    </footer>
  );
}
