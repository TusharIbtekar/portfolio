import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components";

export function DefaultLayout({ children }: PropsWithChildren): JSX.Element {
  const variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  };
  return (
    <>
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
      </motion.main>
    </>
  );
}
