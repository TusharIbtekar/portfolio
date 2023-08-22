import { NavigationItem, NavigationItemType } from "@/types/navigation"
import {Library, Github, FolderGit2 } from 'lucide-react';

import { Button } from '@/components'
 
const ACTIONS: Array<NavigationItem> = [
  {
    type: NavigationItemType.LINK,
    href: '/',
    icon: <Library />,
    text: 'Blog',
  },
  {
    type: NavigationItemType.LINK,
    href: '/',
    icon: <FolderGit2 />,
    text: 'Projects',
  },
  {
    type: NavigationItemType.LINK,
    href: 'https://github.com/TusharIbtekar',
    icon: <Github />,
    text: 'GitHub',
  },
]


export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-12">
      <div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-gray-500 dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold">
          Tushar Ibtekar
        </h1>
        <p className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-400 sm:text-lg md:text-xl md:max-w-3xl">
          Software Engineer
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
          {
            ACTIONS.map((action, index) => {
              return (
                <div className="w-full sm:w-auto">
                  <Button.Outline href={action.href}>
                    {action.icon}
                    <span>{action.text}</span>
								  </Button.Outline>
                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}