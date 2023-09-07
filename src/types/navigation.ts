import { ReactNode } from "react";

interface NavigationItemBase {
  endIcon?: string | ReactNode;
  icon?: string | ReactNode;
  text: string;
  onClick?: () => void;
  href?: string;
  slot?: string;
}

export enum NavigationItemType {
  LINK = "link",
}

export type NavigationItem = {
  type: NavigationItemType.LINK;
} & NavigationItemBase;
