export interface Project {
  name: string;
  affliation?: string;
  stack: string[];
  githubLink?: string;
  demoLink?: string;
}

export interface Projects {
  projects: Project[];
}
