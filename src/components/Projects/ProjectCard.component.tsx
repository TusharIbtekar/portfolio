import { Tag } from "@/components/Tags";
import type { Projects } from "@/types";
import { Github, Radio } from "lucide-react";
import Link from "next/link";

export function ProjectCard({ projects }: Projects): JSX.Element {
  return (
    <div className="w-full">
      {projects.map((project, index) => {
        return (
          <div className="primary-morphs px-7 py-4 mt-10" key={index}>
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-bold text-primary-color">
                {project.name}
              </h2>
              <div>
                <time className="block text-xs text-primary-color">
                  {project.affliation}
                </time>
                <div className="flex">
                  {project.githubLink && (
                    <Link className="pr-2" href={project.githubLink || ""}>
                      <Github size={18} />
                    </Link>
                  )}
                  {project.demoLink && (
                    <Link href={project.demoLink || ""}>
                      <Radio size={18} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <Tag skills={project.stack} />
          </div>
        );
      })}
    </div>
  );
}
