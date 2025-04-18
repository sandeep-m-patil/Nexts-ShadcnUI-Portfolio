"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className={"bg-[#8a2be2] text-white dark:bg-white dark:text-[#8a2be2]"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun className="w-4 h-4 " /> : <Moon className="w-4 h-4" />}
    </Button>
  );
}
