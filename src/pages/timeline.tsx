import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import { Layout } from "@/layouts";
import type { Experience } from "@/types";
import { Tag } from "@/components/Tags";

interface experienceProps {
  experiences: Experience[];
}

export const getStaticProps: GetStaticProps<experienceProps> = async () => {
  const { default: experiences } = await import("@/data/experiences.json");

  return {
    props: {
      experiences,
    },
  };
};

export default function Timeline({
  experiences,
}: experienceProps): JSX.Element {
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
          <div className="primary-morphs px-7 py-4 w-full mt-10">
            {experiences.map((experience, index) => {
              return (
                <>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg md:text-xl font-bold text-zinc-300">
                      {experience.title}
                    </h2>
                    <time className="block text-xs text-slate-100">
                      {experience.period}
                    </time>
                  </div>
                  <p className="text-sm">{experience.role}</p>
                  <Tag skills={experience.skills} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </Layout.Default>
  );
}
