import { NavigationItem, NavigationItemType } from "@/types/navigation";
import { motion } from "framer-motion";
import { ACTIONS } from "@/lib";
import { Button } from "@/components";

export function Standard(): JSX.Element {
  return (
    <nav className="fixed w-full">
      <div className="flex items-center justify-between space-x-3 text-base leading-5">
        <div className="hidden space-x-5 sm:flex">
          {ACTIONS.map((action, index) => {
            return <span className="ml-2">{action.text}</span>;
          })}
        </div>
        <div>
          <Button.Icon>
            <span>Test</span>
          </Button.Icon>
        </div>
      </div>
    </nav>
  );
}
