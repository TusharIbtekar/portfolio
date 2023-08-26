import { ACTIONS } from "@/lib";
import Link from "next/link";
import { motion } from "framer-motion";
export default function NavigationBar() {
  return (
    <div className="space-x-5 sm:flex">
      {ACTIONS.map((action, index) => {
        return (
          <Link
            key={index}
            className="horizontal-underline text-base hover:horizontal-underline"
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
