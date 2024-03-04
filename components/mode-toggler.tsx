"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full p-0 transition-all duration-0 hover:dark:bg-black !outline-none"
    >
      <Sun
        onClick={() => setTheme("dark")}
        className="h-[2.5rem] w-[2.5rem] p-2   duration-0 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        onClick={() => setTheme("light")}
        className="absolute h-[2.5rem] w-[2.5rem] rotate-90 scale-0 p-2  duration-0 dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
