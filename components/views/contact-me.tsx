"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function ContactMe() {
  // Nodemailer
  const [message, setMessage] = useState("");
  const [sender_email, setSenderEmail] = useState("");

  // on form submit
  const sendMail = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

  const { ref } = useSectionInView("Contact");

  return (
    <section ref={ref} id="contact" className="relative p-4">
      <motion.section
        id="contact"
        ref={ref}
        className="mb-20 sm:mb-28 max-w-6xl flex flex-col  gap-10 text-center mx-auto pt-28 z-[30]"
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
        <div className="w-full max-w-2xl mx-auto ">
          <div className="flex justify-center flex-col">
            <p className="text-gradient from-foreground to-foreground/60 text-4xl text-center flex justify-center">
              Contact me
            </p>
            <p className="mt-2 text-foreground/60">
              Contact me directly at <span className="text-foreground">fabian@schlegel.one</span> or use this
              form.
            </p>
          </div>
          <form className="mt-10 flex flex-col dark:text-base_color text-text_color" onSubmit={sendMail}>
            <Input
              className="h-14 px-4 dark:text-text_color rounded-lg borderBlack dark:bg-secondary/80 dark:bg-opacity-80 transition-all outline-none dark:outline-none  focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-1 "
              name="senderEmail"
              type="email"
              required
              maxLength={50}
              placeholder="Your email address"
              value={sender_email}
              onChange={(e) => {
                setSenderEmail(e.target.value);
              }}
            />
            <Textarea
              className="h-52 autosize-none my-3 dark:text-text_color  dark:active:ring-1 focus:ring-1   dark:focus:ring-1 outline-none  rounded-lg borderBlack p-4 dark:bg-secondary/80 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-2"
              name="message"
              placeholder="Message"
              required
              maxLength={5000}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <Button
              variant={"default"}
              className="w-full h-10 text-lg dark:bg-lavendar_color hover:scale-100"
              type="submit"
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
