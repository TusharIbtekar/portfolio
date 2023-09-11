"use client";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <div className="flex pt-16 mt-10 pb-12">
      <div className="flex-grow flex flex-col items-center max-w-sm sm:max-w-2xl w-full mx-auto px-0 sm:px-16">
        <motion.h2
          className="font-kaisei text-gray-500 dark:text-white text-xl lg:text-2xl tracking-tight"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          No Posts Yet
        </motion.h2>
      </div>
    </div>
  );
}
