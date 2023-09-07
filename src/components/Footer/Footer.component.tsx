import { ACTIONS } from "@/lib";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="absolute flex flex-row bottom-12 right-40 w-auto">
      {ACTIONS.map((action, index) => {
        return (
          action.slot === "footer" && (
            <Link key={index} className="" href={action.href || "/"}>
              <span className="px-12 dark:text-blue-400">{action.icon}</span>
            </Link>
          )
        );
      })}
    </div>
  );
}
