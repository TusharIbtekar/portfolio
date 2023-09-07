import Link from "next/link";
import { ACTIONS } from "@/lib";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const pathName = usePathname();
  return (
    <div className="space-x-5 sm:flex">
      {ACTIONS.map((action, index) => {
        const active = pathName?.includes(action.href || "/");
        return (
          (action.slot === "nav" || action.slot === "home") && (
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
          )
        );
      })}
    </div>
  );
}
