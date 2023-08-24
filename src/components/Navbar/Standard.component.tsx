import { NavigationItem, NavigationItemType } from "@/types/navigation"
import { motion } from "framer-motion";


const ACTIONS: Array<NavigationItem> = [
  {
    type: NavigationItemType.LINK,
    href: '/',
    text: 'Blog',
  },
  {
    type: NavigationItemType.LINK,
    href: '/',
    text: 'Projects',
  },
  {
    type: NavigationItemType.LINK,
    href: 'https://github.com/TusharIbtekar',
    text: 'GitHub',
  },
]

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