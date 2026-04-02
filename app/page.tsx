"use client";
import Login from "@/app/components/Login";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/app/themeContext";

export default function Home() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-dvh flex justify-center items-center relative">
      <Button className={`theme absolute top-0 right-0 z-10 m-4 rounded-full h-10 w-10 transition duration-300 ease-in-out ${theme === 'dark' ? 'bg-foreground text-white hover:bg-zinc-700' : 'bg-primary text-white hover:bg-secondary'}`} onClick={toggleTheme}>
        <HugeiconsIcon icon={Sun01Icon} size={44}
          color="currentColor"
          strokeWidth={3} />
      </Button>
      {/* <Image
        src="/images/orng.jpg"
        alt="orange"
        fill
        className="object-cover" /> */}
      <Login />
    </div>
  );
}
