import { ACTIONS } from "@/lib";
import ThemeSwitcher from "./ThemeSwitcher.component";

export function Standard(): JSX.Element {
  return (
    <nav className="fixed w-full bg-transparent py-5 md:py-10">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="space-x-5 sm:flex">
          {ACTIONS.map((action, index) => {
            return (
              <span key={index} className="ml-2">
                {action.text}
              </span>
            );
          })}
        </div>
        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
