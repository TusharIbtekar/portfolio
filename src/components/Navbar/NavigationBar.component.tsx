import { ACTIONS } from "@/lib";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="space-x-5 sm:flex">
      {ACTIONS.map((action, index) => {
        return (
          <Link key={index} className="ml-2" href={action.href || "/"}>
            {action.text}
          </Link>
        );
      })}
    </div>
  );
}
