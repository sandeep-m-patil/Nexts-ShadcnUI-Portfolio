"use client";

import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; // Avoid rendering anything until after the first render
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
