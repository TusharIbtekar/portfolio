import { NavigationItem, NavigationItemType } from "@/types/navigation";
import {
  Library,
  Github,
  FolderGit2,
  ShipWheel,
  Linkedin,
  Home,
  PencilLine,
} from "lucide-react";

export const ACTIONS: Array<NavigationItem> = [
  {
    type: NavigationItemType.LINK,
    href: "/",
    icon: <Home />,
    text: "Home",
    slot: "home",
  },
  {
    type: NavigationItemType.LINK,
    href: "/blog",
    icon: <Library />,
    text: "Blog",
    slot: "nav",
  },
  {
    type: NavigationItemType.LINK,
    href: "/projects",
    icon: <FolderGit2 />,
    text: "Projects",
    slot: "nav",
  },
  {
    type: NavigationItemType.LINK,
    href: "/timeline",
    icon: <ShipWheel />,
    text: "Timeline",
    slot: "nav",
  },
  {
    type: NavigationItemType.LINK,
    href: "https://github.com/TusharIbtekar",
    icon: <Github />,
    text: "GitHub",
    slot: "footer",
  },
  {
    type: NavigationItemType.LINK,
    href: "https://www.linkedin.com/in/tushar-ibtekar/",
    icon: <Linkedin />,
    text: "LinkedIn",
    slot: "footer",
  },
  {
    type: NavigationItemType.LINK,
    href: "https://dev.to/ibtekar",
    icon: <PencilLine />,
    text: "dev.to",
    slot: "footer",
  },
  {
    type: NavigationItemType.LINK,
    href: "https://medium.com/@ibtekar",
    icon: <PencilLine />,
    text: "medium",
    slot: "footer",
  },
];
