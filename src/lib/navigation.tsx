import { NavigationItem, NavigationItemType } from "@/types/navigation";
import { Library, Github, FolderGit2, ShipWheel, Linkedin } from "lucide-react";

export const ACTIONS: Array<NavigationItem> = [
  {
    type: NavigationItemType.LINK,
    href: "/blog",
    icon: <Library />,
    text: "Blog",
  },
  {
    type: NavigationItemType.LINK,
    href: "/projects",
    icon: <FolderGit2 />,
    text: "Projects",
  },
  {
    type: NavigationItemType.LINK,
    href: "/timeline",
    icon: <ShipWheel />,
    text: "Timeline",
  },
  {
    type: NavigationItemType.LINK,
    href: "https://github.com/TusharIbtekar",
    icon: <Github />,
    text: "GitHub",
  },
  {
    type: NavigationItemType.LINK,
    href: "https://www.linkedin.com/in/tushar-ibtekar/",
    icon: <Linkedin />,
    text: "LinkedIn",
  },
];
