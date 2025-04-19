"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ColorModeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("dark")}
        className="dark:hidden"
        data-oid="1o25vv_"
      >
        <Moon data-oid="vpipc0u" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("light")}
        className="hidden dark:flex"
        data-oid="qsl3lmz"
      >
        <Sun data-oid="z5h-sot" />
      </Button>
    </>
  );
}
