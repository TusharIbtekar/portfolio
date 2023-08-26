import Link from "next/link";
import { motion } from "framer-motion";

import { ACTIONS } from "@/lib";
import { usePathname } from "next/navigation";
import { NavigationItem, NavigationItemType } from "@/types/navigation";
import { Home } from "lucide-react";

const homeItem: NavigationItem = {
  type: NavigationItemType.LINK,
  href: "/",
  icon: <Home />,
  text: "Home",
};
const navACTIONS = [homeItem, ...ACTIONS];

export default function NavigationBar() {
  const pathName = usePathname();
  return (
    <div className="space-x-5 sm:flex">
      {navACTIONS.map((action, index) => {
        const active = pathName?.includes(action.href || "/");
        return (
          <Link
            key={index}
            className={`horizontal-underline text-base 
              ${active ? "horizontal-underline-active" : ""}`}
            href={action.href || "/"}
          >
            <span className="tracking-wide text-gray-900 dark:text-gray-100">
              {action.text}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
