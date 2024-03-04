"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { ModeToggle } from "@/components/mode-toggler";
import { useActiveSectionContext } from "@/components/active-session-context";
import { links } from "@/data/data";
import clsx from "clsx";
import { motion } from "framer-motion";

import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[1000] ">
      <div className="fixed top-0 w-full  ">
        <motion.nav
          aria-label="Global"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="!backdrop-blur-md"
        >
          <div className="mx-auto xl:mt-3 flex max-w-6xl items-center justify-between xl:rounded-2xl border border-zinc-200/10 bg-[#cdd6f4]/40 p-4 xl:p-2  dark:border-zinc-700/10 dark:bg-[#313244] !dark:opacity-20 lg:px-5 !backdrop-blur-md">
            <div className="flex lg:flex-1">
              <Link href="/" className="ms-3 p-1.5 outline-none">
                <p className="text-xl font-extralight transition-colors duration-150 hover:text-foreground/70 outline-none">
                  Fabian Schlegel
                </p>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6 text-foreground" aria-hidden="true" />
              </button>
            </div>
            <Popover.Group className="hidden  md:flex lg:gap-x-6">
              {links.map((link) => (
                <li className="relative flex  items-center justify-center" key={link.hash}>
                  <Link
                    className={clsx(
                      `flex w-full items-center justify-center px-3 py-1 text-sm transition    ${activeSection === link.name ? "text-white hover:text-white dark:hover:text-white" : " hover:text-purple-400 dark:hover:text-purple-300 out rounded-full  outline-none"}`,
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className="absolute inset-0 -z-10 rounded-full active-header-link text-white outline-none"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 50,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </li>
              ))}
            </Popover.Group>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end me-3">
              <ModeToggle />
            </div>
          </div>
        </motion.nav>
      </div>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto !bg-background/90 px-6 py-6 backdrop-blur-md sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 outline-none">
              <p className="text-xl font-bold">Fabian Schlegel</p>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-foreground" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => <></>}
                </Disclosure>
                {links.map((link) => (
                  <li className="relative flex  items-center justify-center" key={link.hash}>
                    <Link
                      className={clsx(
                        `flex w-full items-center justify-center px-3 py-4 text-sm transition    ${activeSection === link.name ? "text-white hover:text-white dark:hover:text-white" : " hover:text-purple-400 dark:hover:text-purple-300"}`,
                      )}
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                      }}
                    >
                      {link.name}

                      {link.name === activeSection && (
                        <motion.span
                          className="absolute inset-0 -z-10  rounded-full bg-[#a855f7] text-white "
                          layoutId="activeSection"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 50,
                          }}
                        ></motion.span>
                      )}
                    </Link>
                  </li>
                ))}
              </div>
              <div className="py-6">
                <ModeToggle />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
