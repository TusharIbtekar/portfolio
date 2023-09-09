import type { Experience, Experiences } from "@/types";
import { Tag } from "@/components/Tags";

export function ExperienceCard({ experiences }: Experiences): JSX.Element {
  return (
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
  );
}
