import type { Project } from "@/types";

export const PROJECTS: Array<Project> = [
  {
    name: "TimeTackle",
    affliation: "Brain Station 23",
    stack: ["reactjs", "typescript", "amcharts", "ant-design", "tailwindcss"],
    githubLink: "",
    demoLink: "",
  },
  {
    name: "Portfolio",
    stack: ["nextjs", "typescript", "tailwindcss"],
    githubLink: "https://github.com/TusharIbtekar/portfolio",
    demoLink: "https://www.ibtekar.dev/",
  },
  {
    name: "Ethereum Lottery",
    stack: [
      "web3",
      "solidity",
      "ethereum",
      "reactjs",
      "javascript",
      "mocha",
      "ganache",
    ],
    githubLink: "https://github.com/TusharIbtekar/lottery",
  },
  {
    name: "ToDo",
    stack: ["react", "redux", "javascript", "amcharts", "ant-design"],
    githubLink: "https://github.com/TusharIbtekar/react-todo",
    demoLink: "https://react-todoo.vercel.app/",
  },
  {
    name: "Examsspace",
    affliation: "Dast Inc.",
    stack: ["Angular", "Sass", "JWT", "REST API"],
  },
];
