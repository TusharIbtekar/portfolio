import { NavigationItem, NavigationItemType } from "@/types/navigation"
import { motion } from "framer-motion";
import { ACTIONS } from "@/lib";

export function Standard(): JSX.Element {

  return (
    <nav className="fixed w-full">
      <div>
      {
        ACTIONS.map((action, index) => {
          return (
            <span className="ml-2">{action.text}</span>
          )
        })
      }
      </div>
      <div>

      </div>
    </nav>
  )
}