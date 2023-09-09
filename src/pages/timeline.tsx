import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import { Layout } from "@/layouts";
import type { Experience, Experiences } from "@/types";
import { ExperienceCard } from "@/components/Timeline";

export const getStaticProps: GetStaticProps<Experiences> = async () => {
  const { default: experiences } = await import("@/data/experiences.json");
  console.log(experiences);
  return {
    props: {
      experiences,
    },
  };
};

export default function Timeline({ experiences }: Experiences): JSX.Element {
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
          <ExperienceCard experiences={experiences} />
        </div>
      </div>
    </Layout.Default>
  );
}
