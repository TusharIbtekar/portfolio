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
        dark:bg-gray-900/0 dark:border-gray-700 text-primary-color
        dark:hover:bg-slate-900/25 
        hover:text-primary-hover-color
        hover:bg-gray-100/75 hover:text-gray-500 
        backdrop-filter backdrop-blur-sm 
        saturate-200 font-medium border-2 border-gray-200/50 
        rounded-lg cursor-pointer default-transition default-focus px-8 py-2"
      href={href || "/"}
      passHref
    >
      {children}
    </Link>
  );
};
