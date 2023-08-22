import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

import { WithClassName } from "@/types/common";

interface OutlineProps extends AnchorHTMLAttributes<HTMLAnchorElement>, WithClassName {
	external?: boolean;
	icon?: string;
	small?: boolean;
}

export const Outline = ({ children, href, icon, ...rest }: OutlineProps): JSX.Element => {
  return (
    <Link className="inline-flex items-center justify-center w-full sm:w-auto bg-gray-50/75 hover:bg-gray-100/75 hover:text-gray-500 dark:bg-gray-900/75 dark:hover:bg-gray-800/75 dark:border-gray-700 dark:text-primary-500 dark:hover:text-primary-400 backdrop-filter backdrop-blur-sm saturate-200 text-gray-400 font-medium border-2 border-gray-200/50 rounded-lg cursor-pointer default-transition default-focus px-8 py-2" href={href || '/'} passHref>
      {children}
    </Link>
  );
}