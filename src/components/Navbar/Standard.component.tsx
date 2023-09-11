"use client";
import ThemeSwitcher from "./ThemeSwitcher.component";
import NavigationBar from "./NavigationBar.component";
import { usePathname } from "next/navigation";

export function Standard(): JSX.Element {
  const isHome = usePathname() === "/" ? true : false;
  return (
    <nav className="fixed w-full bg-transparent py-5 md:py-10">
      <div className="mx-auto flex w-full lg:w-1/3 px-2 items-center justify-between">
        <div>{!isHome && <NavigationBar />}</div>
        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
