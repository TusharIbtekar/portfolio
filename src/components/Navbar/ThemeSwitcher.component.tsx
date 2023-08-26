import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Theme } from "@/types";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.button
      aria-label="Toggle Dark Mode"
      type="button"
      whileTap={{
        scale: 0.9,
        rotate: 360,
        transition: { duration: 0.2 },
      }}
      whileHover={{ scale: 1.2 }}
      onClick={() =>
        setTheme(resolvedTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
      }
    >
      {mounted && (theme === Theme.DARK || resolvedTheme === Theme.DARK) ? (
        <Moon />
      ) : (
        <Sun />
      )}
    </motion.button>
  );
}
