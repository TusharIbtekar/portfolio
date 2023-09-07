import { motion } from "framer-motion";
import { Layout } from "@/layouts";

export default function Timeline() {
  return (
    <Layout.Default>
      <div className="flex flex-grow pt-16 mt-10 pb-12">
        <div className="flex-grow flex flex-col items-center max-w-sm sm:max-w-2xl w-full mx-auto px-0 sm:px-16">
          <motion.h1
            className="font-kaisei text-gray-500 dark:text-white text-3xl sm:text-xl md:text-2xl lg:text-3xl tracking-tight"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Experiences
          </motion.h1>
          <ul className="-mb-8" role="list">
            hello
          </ul>
        </div>
      </div>
    </Layout.Default>
  );
}
