import { NavigationItem, NavigationItemType } from "@/types/navigation";
import { Library, Github, FolderGit2, ShipWheel } from "lucide-react";

export const ACTIONS: Array<NavigationItem> = [
  {
    type: NavigationItemType.LINK,
    href: "/",
    icon: <Library />,
    text: "Blog",
  },
  {
    type: NavigationItemType.LINK,
    href: "#",
    icon: <FolderGit2 />,
    text: "Projects",
  },
  {
    type: NavigationItemType.LINK,
    href: "#",
    icon: <ShipWheel />,
    text: "Experiences",
  },
  {
    type: NavigationItemType.LINK,
    href: "https://github.com/TusharIbtekar",
    icon: <Github />,
    text: "GitHub",
  },
];
