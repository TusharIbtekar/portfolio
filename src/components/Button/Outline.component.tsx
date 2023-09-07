import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

export const Outline = ({
  children,
  href,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element => {
  return (
    <Link
      className="inline-flex items-center justify-center w-full sm:w-auto 
        bg-gray-50/25 
        dark:bg-gray-900/0 dark:border-gray-700 dark:text-blue-400 
        dark:hover:bg-slate-900/25 
        dark:hover:text-blue-500 
        hover:bg-gray-100/75 hover:text-gray-500 
        backdrop-filter backdrop-blur-sm 
        saturate-200 text-gray-500 font-medium border-2 border-gray-200/50 
        rounded-lg cursor-pointer default-transition default-focus px-8 py-2"
      href={href || "/"}
      passHref
    >
      {children}
    </Link>
  );
};
