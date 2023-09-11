"use client";

import { motion } from "framer-motion";
import { Theme } from "@/types";
import { Navbar } from "@/components";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import "@/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  };
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme={Theme.DARK} enableSystem>
          <motion.main
            data-scroll
            className="mb-auto"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Navbar.Standard />
            <div className="flex flex-col justify-center px-8">{children}</div>
            <Footer />
          </motion.main>
        </ThemeProvider>
      </body>
    </html>
  );
}
