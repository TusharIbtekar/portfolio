import ThemeSwitcher from "./ThemeSwitcher.component";
import NavigationBar from "./NavigationBar.component";

export function Standard(): JSX.Element {
  return (
    <nav className="fixed w-full bg-transparent py-5 md:py-10">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div>
          <NavigationBar />
        </div>
        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
