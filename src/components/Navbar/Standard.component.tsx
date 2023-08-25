import { NavigationItem, NavigationItemType } from "@/types/navigation";
import { motion } from "framer-motion";
import { ACTIONS } from "@/lib";
import { Button } from "@/components";
import ThemeSwitcher from "../ThemeSwitcher";

export function Standard(): JSX.Element {
  return (
    <nav className="fixed w-full bg-transparent py-5 md:py-10">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="space-x-5 sm:flex">
          {ACTIONS.map((action, index) => {
            return <span className="ml-2">{action.text}</span>;
          })}
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
