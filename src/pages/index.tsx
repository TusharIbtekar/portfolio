import { motion } from "framer-motion";

import { Button } from "@/components";
import { Layout } from "@/layouts";
import { ACTIONS } from "@/lib";

export default function HomePage() {
  return (
    <Layout.Default>
      <div className="min-h-screen flex items-center justify-center p-12">
        <div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
          <motion.h1
            className="font-kaisei text-gray-500 dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Tushar Ibtekar
          </motion.h1>
          <motion.p
            className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-400 sm:text-lg md:text-2xl md:max-w-3xl"
            animate={{ opacity: [0, 1], scale: [0.75, 1] }}
            transition={{
              type: "spring",
              delay: 0.5,
            }}
          >
            Polyglot Software Engineer
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
            {ACTIONS.map((action, index) => {
              return (
                action.slot !== "home" && (
                  <motion.div
                    className="w-full sm:w-auto"
                    key={index}
                    animate={{ y: [50, 0], opacity: [0, 1] }}
                    transition={{ delay: 0.1 * (index + 2) + 0.5 }}
                  >
                    <Button.Outline href={action.href}>
                      {action.icon}
                      <span className="ml-2">{action.text}</span>
                    </Button.Outline>
                  </motion.div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </Layout.Default>
  );
}
