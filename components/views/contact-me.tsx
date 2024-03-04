"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactMe() {
  const { ref } = useSectionInView("Contact");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: email, // Update this field based on your form structure
          message: message, // Update or remove this field based on your form structure
        }),
      });

      if (response.ok) {
        toast.success("Email sent successfully.");
        setIsLoading(false);
        // Reset form or redirect user
      } else {
        toast.error("There was error sending email.");
        setIsLoading(false);

        // alert("Failed to send email");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("There was error sending email.");
      setIsLoading(false);
    }
  };

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
              You can contact me directly at <span className="text-foreground">xyz@gmail.com</span> or you can
              fill out this form.
            </p>
          </div>
          <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
            <Input
              className="h-14 px-4 dark:text-white rounded-lg borderBlack dark:bg-secondary/80 dark:bg-opacity-80 transition-all outline-none dark:outline-none  focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-1 "
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea
              className="h-52 autosize-none my-3 dark:text-white  dark:active:ring-1 focus:ring-1   dark:focus:ring-1 outline-none  rounded-lg borderBlack p-4 dark:bg-secondary/80 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-2"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              variant={"default"}
              className="w-full h-10 text-lg dark:bg-lavendar_color hover:scale-100"
              // className="h-12 bg-mauve_color dark:bg-mauve_color text-lg font-bold  text-white hover:bg-purple-600 "
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className=" mr-2 flex gap-3">
                  <Loader2 className="animate-spin" /> Sending Email...
                </span>
              ) : (
                <p>Send Email</p>
              )}
            </Button>
          </form>
        </div>
      </motion.section>
    </section>
  );
}
