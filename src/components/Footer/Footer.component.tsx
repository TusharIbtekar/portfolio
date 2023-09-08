import { ACTIONS } from "@/lib";
import Link from "next/link";

export function Footer() {
  return (
    <div className="fixed flex flex-col md:flex-row justify-between bottom-12 right-4 md:right-40 md:w-20">
      {ACTIONS.map((action, index) => {
        return (
          action.slot === "footer" && (
            <Link key={index} className="" href={action.href || "/"}>
              <span className="dark:text-blue-400 dark:hover:text-gray-500 text-gray-500 hover:text-blue-400">
                {action.icon}
              </span>
            </Link>
          )
        );
      })}
    </div>
  );
}
