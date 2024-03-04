import "@/css/globals.css";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CardProjects = ({ href, title, imgSrc, company, tasks, description, ...props }) => (
  <Card className={cn("group flex h-full  justify-between")} {...props}>
    <div>
      <CardHeader>
        <div className="">
          <a
            target="_blank"
            className=" font-light text-black/80 dark:text-[#cdd6f4]/80"
            href={href}
            aria-label={`Link to ${company}`}
          >
            {company}
          </a>
        </div>

        {/* <CardTitle></CardTitle> */}
      </CardHeader>
      <CardContent className="overflow-hidden ">
        <div className="relative  gap-6">
          <div className="relative overflow-hidden h-40 w-80` rounded-md flex-shrink-0">
            <Image
              alt={title}
              src={imgSrc}
              className="h-full w-full  rounded-md object-cover object-center transition-all duration-500 group-hover:scale-105"
              width={800}
              height={800}
            />
          </div>
          <div>
            <p className=" text-xl font-bold md:text-3xl">{title}</p>
            <div className="py-6 pt-3">
              <p className="  max-w-none text-sm text-black/60 dark:text-[#cdd6f4]/60">{description}</p>
            </div>
          </div>
        </div>
        {/* <Dialog>
          <DialogTrigger>View Full Project</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data
                from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog> */}
      </CardContent>
    </div>
  </Card>
);

export default CardProjects;
