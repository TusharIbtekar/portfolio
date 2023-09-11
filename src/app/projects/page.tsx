"use client";
import type { Projects } from "@/types";
import { ProjectCard } from "@/components/Projects";
import { PROJECTS } from "@/lib/projects";

export default function Projects({ projects }: Projects): JSX.Element {
  return (
    <div className="flex pt-16 mt-10 pb-12">
      <div className="flex flex-col items-center max-w-sm sm:max-w-2xl w-full mx-auto px-0 sm:px-16">
        <ProjectCard projects={PROJECTS} />
      </div>
    </div>
  );
}
